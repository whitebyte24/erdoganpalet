import { NextResponse } from 'next/server';
import { getTransporter, defaultReceiver, defaultSender } from '@/lib/nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, _honeypot } = body;

    // 1. Spam / Honeypot Check
    if (_honeypot && _honeypot.trim() !== '') {
      console.warn('[SPAM PREVENTED] Contact form honeypot triggered by IP/bot.');
      return NextResponse.json({ success: true, message: 'Mesajınız başarıyla iletildi.' });
    }

    // 2. Input Validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Lütfen geçerli bir ad soyad giriniz.' },
        { status: 400 }
      );
    }

    if (!phone || phone.trim().length < 7) {
      return NextResponse.json(
        { success: false, error: 'Lütfen geçerli bir telefon numarası giriniz.' },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: 'Lütfen mesajınızı en az 5 karakter olarak giriniz.' },
        { status: 400 }
      );
    }

    // 3. Email Content Prep
    const mailSubject = `[Web İletişim Formu] ${subject || 'Yeni İletişim Mesajı'} - ${name}`;
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; background-color: #fafaf8;">
        <div style="background-color: #0F3D2E; color: #ffffff; padding: 24px; text-align: center;">
          <h2 style="margin: 0; color: #D9A441; font-size: 22px;">ERDOĞAN PALET A.Ş.</h2>
          <p style="margin: 6px 0 0 0; font-size: 14px; color: #e0e0e0;">Web Sitesi İletişim Formu Mesajı</p>
        </div>
        
        <div style="padding: 30px; background-color: #ffffff;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 30%; color: #0F3D2E;">Ad Soyad:</td>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; color: #333333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #0F3D2E;">Telefon:</td>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; color: #333333;"><a href="tel:${phone}" style="color: #0F3D2E; font-weight: bold;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #0F3D2E;">E-posta:</td>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; color: #333333;">${email || 'Belirtilmedi'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #0F3D2E;">Konu:</td>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; color: #333333;">${subject || 'Genel İletişim'}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 16px; background-color: #fafaf8; border-left: 4px solid #0F3D2E; border-radius: 4px;">
            <h4 style="margin: 0 0 8px 0; color: #0F3D2E;">Mesaj İçeriği:</h4>
            <p style="margin: 0; font-size: 14px; color: #444444; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
        </div>

        <div style="background-color: #f4f4f4; padding: 16px; text-align: center; font-size: 12px; color: #777777;">
          Bu e-posta erdoganpalet.com.tr web sitesindeki iletişim formundan otomatik gönderilmiştir.
        </div>
      </div>
    `;

    // 4. Send Email via Transporter
    const transporter = getTransporter();
    const info = await transporter.sendMail({
      from: `"${name} (Web Formu)" <${defaultSender}>`,
      replyTo: email || defaultSender,
      to: defaultReceiver,
      subject: mailSubject,
      html: htmlContent,
    });

    console.log('[CONTACT FORM SUCCESS] Sent email messageId:', info.messageId, 'From:', name);

    return NextResponse.json({
      success: true,
      message: 'Mesajınız başarıyla iletildi. En kısa sürede sizinle iletişime geçeceğiz.',
    });
  } catch (error: any) {
    console.error('[CONTACT FORM ERROR]', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Mesaj gönderilirken sunucu hatası oluştu. Lütfen doğrudan telefon ile iletişime geçiniz.',
      },
      { status: 500 }
    );
  }
}
