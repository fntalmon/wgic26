import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Send notification email
    try {
      await sendExhibitorNotification(name, email);
    } catch (emailError) {
      console.error('Failed to send exhibitor notification email:', emailError);
      // Continue execution even if email fails
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Info pack access granted' 
    }, { status: 200 });

  } catch (error) {
    console.error('Exhibitor pack download error:', error);
    return NextResponse.json({ 
      error: 'Internal server error' 
    }, { status: 500 });
  }
}

async function sendExhibitorNotification(name: string, email: string) {
  const recipientEmail = process.env.EXHIBITOR_RECIPIENT_EMAIL;

  console.log('🔍 Exhibitor Pack Config Check:');
  console.log('   EXHIBITOR_RECIPIENT_EMAIL:', process.env.EXHIBITOR_RECIPIENT_EMAIL ? '✓ Set' : '✗ Not set');
  console.log('   ZOHO_USER:', process.env.ZOHO_USER ? '✓ Set' : '✗ Not set');
  
  if (!recipientEmail) {
    console.log('Exhibitor pack download (no admin email configured):', name, email);
    return;
  }

  let transporter;
  
  if (process.env.ZOHO_USER && process.env.ZOHO_PASS) {
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
  } else if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });
  } else {
    console.log('No email service configured for exhibitor notifications');
    return;
  }

  const mailOptions = {
    from: process.env.ZOHO_USER || process.env.GMAIL_USER,
    to: recipientEmail,
    subject: `Nueva Solicitud de Descarga - Exhibitor Pack`,
    html: `
      <h2>Solicitud de Descarga de Exhibitor Pack</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Correo Electrónico:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Fecha y Hora:</strong> ${new Date().toLocaleString('es-ES')}</p>
      <hr />
      <p>Esta es una notificación automática del sitio web de WGIC26.</p>
    `,
    text: `Solicitud de Descarga de Exhibitor Pack\n\nNombre: ${name}\nCorreo Electrónico: ${email}\nFecha y Hora: ${new Date().toLocaleString('es-ES')}`
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log('✓ Email de notificación enviado al administrador:', result.response);
  } catch (error) {
    console.error('✗ Error al enviar email de notificación:', error);
    throw error;
  }
}
