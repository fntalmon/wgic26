import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, participationType } = await request.json();

    // Validations
    if (!name || !email || !phone || !company || !participationType) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Phone validation - at least 6 digits
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 6) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // Send notification email to admin
    try {
      await sendInterestFormNotification(name, email, phone, company, participationType);
    } catch (emailError) {
      console.error('Failed to send interest form notification email:', emailError);
      // Continue execution even if email fails
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Interest form submitted successfully'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Interest form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function sendInterestFormNotification(
  name: string,
  email: string,
  phone: string,
  company: string,
  participationType: string
) {
  const recipientEmail = process.env.INTEREST_FORM_RECIPIENT_EMAIL;

  const sendUser = process.env.INTEREST_FORM_RECIPIENT_PASSWORD ? recipientEmail : process.env.ZOHO_USER;
  const sendPass = process.env.INTEREST_FORM_RECIPIENT_PASSWORD ? process.env.INTEREST_FORM_RECIPIENT_PASSWORD : process.env.ZOHO_PASS;

  console.log('🔍 Interest Form Debug:');
  console.log(`   Trying to send from: ${sendUser}`);
  console.log(`   Using custom password: ${process.env.INTEREST_FORM_RECIPIENT_PASSWORD ? 'YES' : 'NO'}`);

  if (!recipientEmail) {
    console.log('Interest form submission (no admin email configured):', name, email);
    return;
  }

  let transporter;

  if (sendUser && sendPass) {
    transporter = nodemailer.createTransport({
      host: 'smtppro.zoho.com',
      port: 465,
      secure: true, // SSL
      auth: {
        user: sendUser,
        pass: sendPass
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  } else if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });
  } else {
    console.log('No email service configured for interest form notifications');
    return;
  }

  // 1) Email en castellano a sponsorship con los datos del formulario
  const adminMailOptions = {
    from: sendUser || process.env.GMAIL_USER,
    to: recipientEmail,
    replyTo: email, // Permite responder directamente al interesado
    subject: `Nueva Solicitud de Interés - ${company}`,
    html: `
      <h2>Nueva Solicitud de Interés</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Correo Electrónico:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Teléfono:</strong> ${phone}</p>
      <p><strong>Empresa:</strong> ${company}</p>
      <p><strong>Tipo de Participación:</strong> ${participationType}</p>
      <p><strong>Fecha y Hora:</strong> ${new Date().toLocaleString('es-ES')}</p>
      <hr />
      <p>Esta es una notificación automática del sitio web de WGIC26.</p>
    `,
    text: `Nueva Solicitud de Interés\n\nNombre: ${name}\nCorreo Electrónico: ${email}\nTeléfono: ${phone}\nEmpresa: ${company}\nTipo de Participación: ${participationType}\nFecha y Hora: ${new Date().toLocaleString('es-ES')}`
  };

  try {
    const result = await transporter.sendMail(adminMailOptions);
    console.log('✓ Email de solicitud enviado a sponsorship:', result.response);
  } catch (error) {
    console.error('✗ Error al enviar email a sponsorship:', error);
    // Continue — do not block user confirmation
  }

  // 2) Email en inglés a la persona que rellenó el formulario
  const userMailOptions = {
    from: sendUser || process.env.GMAIL_USER,
    to: email,
    subject: `Thank you for your interest in WGIC2026`,
    html: `
      <p>Dear ${name},</p>
      <p>Thank you for expressing your interest in the World Green Infrastructure Congress 2026.</p>
      <p>We have received your information and will review it carefully. Our sponsorship team will be in touch with you shortly to discuss customized participation options that best fit your organization's goals.</p>
      <p>If you have any immediate questions, please feel free to reply to this email.</p>
      <p>Best regards,<br/>WGIC 2026 Team</p>
    `,
    text: `Dear ${name},\n\nThank you for expressing your interest in the World Green Infrastructure Congress 2026.\n\nWe have received your information and will review it carefully. Our sponsorship team will be in touch with you shortly to discuss customized participation options that best fit your organization's goals.\n\nIf you have any immediate questions, please feel free to reply to this email.\n\nBest regards,\nWGIC 2026 Team`
  };

  try {
    const res = await transporter.sendMail(userMailOptions);
    console.log('✓ Email de confirmación enviado al usuario:', email, res.response);
  } catch (error) {
    console.error('✗ Error al enviar email de confirmación:', error);
    // don't throw — form submission should still work
  }
}
