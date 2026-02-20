import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email, phone } = await request.json();

    if (!email || !phone) {
      return NextResponse.json({ error: 'Email and phone are required' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Phone validation (basic: 6–15 digits)
    const phoneDigits = String(phone).replace(/\D/g, '');
    if (phoneDigits.length < 6 || phoneDigits.length > 15) {
      return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 });
    }

    // Send notification email
    try {
      await sendEmailNotification(email, phone);
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError);
      // Continue execution even if email fails
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    }, { status: 200 });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json({ 
      error: 'Internal server error' 
    }, { status: 500 });
  }
}

async function sendEmailNotification(subscriberEmail: string, subscriberPhone?: string) {
  const recipientEmail = process.env.NEWSLETTER_RECIPIENT_EMAIL;
  

  
  if (!recipientEmail) {
  
    return;
  }

  // Create transporter based on available configuration
  let transporter;

  if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
    // Gmail configuration
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });
  } else if (process.env.ZOHO_USER && process.env.ZOHO_PASS) {
    // Zoho Mail configuration - Port 465 with SSL
    transporter = nodemailer.createTransport({
      host: 'smtppro.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  } else if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    // SMTP configuration
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  } else {

    return;
  }



  const mailOptions = {
    from: process.env.GMAIL_USER || process.env.ZOHO_USER || process.env.SMTP_USER || 'noreply@wgic26.barcelona',
    to: recipientEmail,
    subject: 'New Newsletter Subscription - WGIC26',
    text: `New newsletter subscription: ${subscriberEmail}${subscriberPhone ? ` / ${subscriberPhone}` : ''}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #2d5a27; margin-bottom: 20px;">🌿 Nueva Suscripción al Newsletter - WGIC26</h2>
          
          <div style="background-color: #f0f8f0; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0; font-size: 16px;"><strong>Email:</strong> ${subscriberEmail}</p>
            <p style="margin: 0; font-size: 16px;"><strong>Phone:</strong> ${subscriberPhone || '—'}</p>
            <p style="margin: 10px 0 0 0; font-size: 14px; color: #666;"><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              timeZone: 'Europe/Madrid'
            })}</p>
          </div>

          <p style="color: #555; line-height: 1.6;">
            Una nueva persona se ha suscrito al newsletter del World Green Infrastructure Congress 2026.
          </p>

          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          
          <p style="color: #888; font-size: 12px; margin: 0;">
            Este email fue enviado automáticamente desde el sitio web de WGIC26 Barcelona-Lleida.
          </p>
        </div>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);


  // Send confirmation email to the subscriber (if possible)
  try {
    const confirmationSubject = 'Subscription confirmation - WGIC26';
    const confirmationText = `Thank you for subscribing to the World Green Infrastructure Congress (WGIC26) newsletter.\n\nWe will send updates about the congress to this address: ${subscriberEmail}\nPhone: ${subscriberPhone || 'N/A'}`;
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #2d5a27; margin-bottom: 20px;">Thank you for subscribing!</h2>
          <p style="color: #555; line-height: 1.6;">Hello,</p>
          <p style="color: #555; line-height: 1.6;">Thank you for subscribing to the <strong>WGIC26 newsletter</strong>. We will send news and updates to <strong>${subscriberEmail}</strong>.</p>
          <p style="color: #555; line-height: 1.6;"><strong>Phone:</strong> ${subscriberPhone || 'N/A'}</p>
          <p style="color: #555; line-height: 1.6;">If you wish to unsubscribe at any time, reply to this email or contact <a href=\"mailto:${recipientEmail}\">${recipientEmail}</a>.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #888; font-size: 12px; margin: 0;">This email was sent automatically from the WGIC26 Barcelona-Lleida website.</p>
        </div>
      </div>
    `;

    const confirmationMail = {
      from: process.env.GMAIL_USER || process.env.ZOHO_USER || process.env.SMTP_USER || 'noreply@wgic26.barcelona',
      to: subscriberEmail,
      subject: confirmationSubject,
      text: confirmationText,
      html: confirmationHtml
    };

    await transporter.sendMail(confirmationMail);

  } catch (confirmError) {
    console.error('Failed to send confirmation email to subscriber:', confirmError);
    // Do not throw — subscription already recorded and admin notified
  }
}