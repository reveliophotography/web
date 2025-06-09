
'use server';

import { z } from 'zod';

const BookingInquirySchema = z.object({
  clientName: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce una dirección de correo electrónico válida." }),
  phone: z.string().optional(),
  weddingDate: z.string().min(1, { message: "Por favor, selecciona una fecha para la boda." }), // Keep as string for server action from formatted date
  venue: z.string().min(2, { message: "El lugar debe tener al menos 2 caracteres." }),
  // packageOfInterest removed from schema
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }).max(500, { message: "El mensaje no puede exceder los 500 caracteres." }),
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

  // In a real application, you would save this data to a database, send an email, etc.
  console.log("New Booking Inquiry (simplified):", validationResult.data);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "¡Gracias por tu consulta! Nos pondremos en contacto pronto.",
  };
}
