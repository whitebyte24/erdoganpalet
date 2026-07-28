import nodemailer from 'nodemailer';

export const getTransporter = () => {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    console.warn('[SMTP Warning] SMTP credentials not fully configured in environment variables.');
  }

  return nodemailer.createTransport({
    host: host || 'mail.erdoganpalet.com.tr',
    port: port,
    secure: port === 465, // true for 465, false for other ports
    auth: {
      user: user || '',
      pass: pass || '',
    },
    tls: {
      rejectUnauthorized: false, // Prevents issues with self-signed SSL on cPanel mail servers
    },
  });
};

export const defaultReceiver = process.env.CONTACT_RECEIVER_EMAIL || 'info@erdoganpalet.com.tr';
export const defaultSender = process.env.SMTP_FROM || 'info@erdoganpalet.com.tr';
