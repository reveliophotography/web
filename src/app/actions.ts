
'use server';

import { z } from 'zod';
import { generateThankYouNote as generateThankYouNoteFlow } from '@/ai/flows/generate-thank-you-note';
import type { GenerateThankYouNoteInput, GenerateThankYouNoteOutput } from '@/ai/flows/generate-thank-you-note';

const BookingInquirySchema = z.object({
  clientName: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce una dirección de correo electrónico válida." }),
  phone: z.string().optional(),
  weddingDate: z.string().min(1, { message: "Por favor, selecciona una fecha para la boda." }),
  venue: z.string().min(2, { message: "El lugar debe tener al menos 2 caracteres." }),
  packageOfInterest: z.string().optional(),
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
  console.log("New Booking Inquiry:", validationResult.data);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "¡Gracias por tu consulta! Nos pondremos en contacto pronto.",
  };
}


export async function generateThankYouNoteAction(input: GenerateThankYouNoteInput): Promise<GenerateThankYouNoteOutput | { error: string }> {
  try {
    // The AI flow input schema is already defined in `generate-thank-you-note.ts`
    // We can add Zod validation here as well if needed, but it's also handled by the flow itself.
    const result = await generateThankYouNoteFlow(input);
    return result;
  } catch (error) {
    console.error("Error generating thank you note:", error);
    return { error: "Error al generar la nota de agradecimiento. Por favor, inténtalo de nuevo." };
  }
}

