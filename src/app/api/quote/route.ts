import { NextResponse } from 'next/server';
import { getTransporter, defaultReceiver, defaultSender } from '@/lib/nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { companyName, name, email, phone, productType, quantity, dimensions, city, notes, _honeypot } = body;

    // 1. Spam / Honeypot Check
    if (_honeypot && _honeypot.trim() !== '') {
      console.warn('[SPAM PREVENTED] Quote form honeypot triggered.');
      return NextResponse.json({ success: true, message: 'Teklif talebiniz başarıyla alındı.' });
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

    // 3. Email Content Prep
    const mailSubject = `[TEKLİF TALEBİ] ${productType || 'Palet Teklifi'} - ${companyName || name}`;
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; background-color: #fafaf8;">
        <div style="background-color: #0F3D2E; color: #ffffff; padding: 24px; text-align: center;">
          <h2 style="margin: 0; color: #D9A441; font-size: 24px;">ERDOĞAN PALET A.Ş.</h2>
          <p style="margin: 6px 0 0 0; font-size: 15px; color: #ffffff; font-weight: bold;">YENİ FİYAT TEKLİFİ TALEBİ</p>
        </div>
        
        <div style="padding: 30px; background-color: #ffffff;">
          <h3 style="color: #0F3D2E; margin-top: 0; border-bottom: 2px solid #D9A441; padding-bottom: 8px;">Müşteri & Firma Bilgileri</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 35%; color: #0F3D2E;">Firma Adı:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; color: #333;">${companyName || 'Bireysel Müşteri'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #0F3D2E;">Yetkili Ad Soyad:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #0F3D2E;">Telefon:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; color: #333;"><a href="tel:${phone}" style="color: #0F3D2E; font-weight: bold;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #0F3D2E;">E-posta:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; color: #333;">${email || 'Belirtilmedi'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #0F3D2E;">Teslimat Şehri:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; color: #333;">${city || 'Belirtilmedi'}</td>
            </tr>
          </table>

          <h3 style="color: #0F3D2E; margin-top: 24px; border-bottom: 2px solid #D9A441; padding-bottom: 8px;">Talep Edilen Ürün & Miktar</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 35%; color: #0F3D2E;">Palet Türü / Ürün:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; color: #0F3D2E; font-weight: bold;">${productType || 'Standart Palet'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #0F3D2E;">Talep Miktarı (Adet):</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; color: #333; font-weight: bold;">${quantity || 'Belirtilmedi'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #0F3D2E;">Özel Ölçü / Teknik Özellik:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; color: #333;">${dimensions || 'Standart Ölçü'}</td>
            </tr>
          </table>

          ${notes ? `
          <div style="margin-top: 20px; padding: 16px; background-color: #fafaf8; border-left: 4px solid #D9A441; border-radius: 4px;">
            <h4 style="margin: 0 0 8px 0; color: #0F3D2E;">Ek Notlar ve Açıklamalar:</h4>
            <p style="margin: 0; font-size: 14px; color: #444; white-space: pre-wrap; line-height: 1.6;">${notes}</p>
          </div>
          ` : ''}
        </div>

        <div style="background-color: #f4f4f4; padding: 16px; text-align: center; font-size: 12px; color: #777777;">
          Bu teklif talebi erdoganpalet.com.tr web sitesindeki teklif alma formundan otomatik iletilmiştir.
        </div>
      </div>
    `;

    // 4. Send Email
    const transporter = getTransporter();
    const info = await transporter.sendMail({
      from: `"${name} (Fiyat Teklifi Talebi)" <${defaultSender}>`,
      replyTo: email || defaultSender,
      to: defaultReceiver,
      subject: mailSubject,
      html: htmlContent,
    });

    console.log('[QUOTE FORM SUCCESS] Sent quote email messageId:', info.messageId, 'Company/Name:', companyName || name);

    return NextResponse.json({
      success: true,
      message: 'Fiyat teklif talebiniz başarıyla alındı. Satış ekibimiz en kısa sürede size teklif sunacaktır.',
    });
  } catch (error: any) {
    console.error('[QUOTE FORM ERROR]', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Teklif talebi gönderilirken bir hata oluştu. Lütfen doğrudan iletişim hattımızdan bize ulaşın.',
      },
      { status: 500 }
    );
  }
}
