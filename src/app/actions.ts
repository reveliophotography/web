
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

  // Configuración del transporte SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp.buzondecorreo.com',
    port: 465,
    secure: true,
    auth: {
      user: 'info@reveliophotography.es',
      pass: process.env.REVELIO_EMAIL_PASS || '',
    }
  });

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
    from: 'info@reveliophotography.es',
    to: 'info@reveliophotography.es',
    subject: `Nueva consulta de boda de ${clientName}`,
    replyTo: email,
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
    // Verificar la conexión primero
    await transporter.verify();
    console.log('Conexión SMTP verificada correctamente');
    
    // Intentar enviar el email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email enviado:', info);
    
    return {
      success: true,
      message: "¡Gracias por vuestro mensaje! Me pondré en contacto con vosotros muy pronto.",
    };
  } catch (error: any) {
    const errorDetails = {
      name: error?.name,
      message: error?.message,
      stack: error?.stack,
      code: error?.code,
      command: error?.command,
      response: error?.response,
    };
    
    console.error('Error detallado:', errorDetails);
    
    return {
      success: false,
      message: `Error al enviar el mensaje: ${errorDetails.message || 'Error desconocido'}. Por favor, inténtalo de nuevo más tarde.`,
    };
  }
}
