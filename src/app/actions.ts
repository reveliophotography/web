
'use server';


import { z } from 'zod';
import nodemailer from 'nodemailer';

const BookingInquirySchema = z.object({
  clientName: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce una dirección de correo electrónico válida." }),
  phone: z.string().optional(),
  weddingDate: z.string().min(1, { message: "Por favor, selecciona una fecha para la boda." }),
  venue: z.string().min(2, { message: "El lugar debe tener al menos 2 caracteres." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }).max(1000, { message: "El mensaje no puede exceder los 1000 caracteres." }),
  privacyPolicy: z.boolean().refine(val => val === true, {
    message: "Debes aceptar la política de privacidad para continuar."
  })
});

export type BookingInquiryData = z.infer<typeof BookingInquirySchema>;

export async function handleBookingInquiry(data: BookingInquiryData) {
  const validationResult = BookingInquirySchema.safeParse(data);

  if (!validationResult.success) {
    return {
      success: false,
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  console.log('Iniciando envío de email...');
  
  // Verificar que tenemos la contraseña
  if (!process.env.REVELIO_EMAIL_PASS) {
    console.error('No se encontró la variable de entorno REVELIO_EMAIL_PASS');
    return {
      success: false,
      message: "Error de configuración del servidor",
    };
  }
  
  // Configuración del transporte SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp.buzondecorreo.com',
    port: 465,
    secure: true,
    auth: {
      user: 'info@reveliophotography.es',
      pass: process.env.REVELIO_EMAIL_PASS,
    },
    debug: true,
    logger: true
  });
  
  console.log('Transporter configurado');

  // Construir el mensaje
  const { clientName, email, phone, weddingDate, venue, message: userMessage } = validationResult.data;
  const messageText = `
Nueva consulta de boda:

DATOS DEL CLIENTE:
----------------
Nombre: ${clientName}
Email: ${email}
Teléfono: ${phone || 'No proporcionado'}
Fecha de la boda: ${weddingDate}
Lugar: ${venue}

MENSAJE DEL CLIENTE:
-----------------
${userMessage}

-------------------
Enviado desde el formulario de contacto de reveliophotography.es
`;

  const mailOptions = {
    from: {
      name: 'Formulario Revelio Photography',
      address: 'info@reveliophotography.es'
    },
    to: ['info@reveliophotography.es', 'alex.montalvo.carrasco@gmail.com'],
    subject: `Nueva consulta de boda de ${clientName}`,
    replyTo: email,
    headers: {
      'X-Mailer': 'Revelio Photography Website',
      'X-Priority': '1',
      'Importance': 'high',
      'X-Source': 'Contact Form'
    },
    text: `
Nombre: ${clientName}
Email: ${email}
Teléfono: ${phone || '-'}
Fecha de la boda: ${weddingDate}
Lugar: ${venue}
Mensaje:
${userMessage}
    `,
  };

  try {
    console.log('Iniciando verificación de conexión...');
    
    // Verificar la conexión primero
    await transporter.verify();
    console.log('Conexión SMTP verificada correctamente');
    
    console.log('Preparando para enviar email con opciones:', {
      ...mailOptions,
      pass: '***' // Ocultamos la contraseña en los logs
    });
    
    // Intentar enviar el email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email enviado exitosamente');
    console.log('Detalles de envío:', {
      messageId: info.messageId,
      response: info.response,
      accepted: info.accepted,
      rejected: info.rejected
    });
    
    return {
      success: true,
      message: "¡Gracias por vuestro mensaje! Me pondré en contacto con vosotros muy pronto.",
    };
  } catch (error: any) {
    console.error('=== ERROR DETALLADO DEL ENVÍO DE EMAIL ===');
    console.error('Tipo de error:', error.name);
    console.error('Mensaje de error:', error.message);
    console.error('Código de error:', error.code);
    console.error('Comando:', error.command);
    console.error('Respuesta del servidor:', error.response);
    
    if (error.code === 'EAUTH') {
      console.error('Error de autenticación - Verifica las credenciales');
    } else if (error.code === 'ESOCKET') {
      console.error('Error de conexión - Verifica la configuración del servidor SMTP');
    }
    
    console.error('Stack trace:', error.stack);
    
    return {
      success: false,
      message: `Error al enviar el mensaje: ${error.message || 'Error desconocido'}. Por favor, inténtalo de nuevo más tarde.`,
    };
  }
}
