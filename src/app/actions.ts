
'use server';

import { z } from 'zod';
import { generateThankYouNote as generateThankYouNoteFlow } from '@/ai/flows/generate-thank-you-note';
import type { GenerateThankYouNoteInput, GenerateThankYouNoteOutput } from '@/ai/flows/generate-thank-you-note';

const BookingInquirySchema = z.object({
  clientName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  weddingDate: z.string().min(1, { message: "Please select a wedding date." }),
  venue: z.string().min(2, { message: "Venue must be at least 2 characters." }),
  packageOfInterest: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message cannot exceed 500 characters." }),
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
    message: "Thank you for your inquiry! We'll be in touch soon.",
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
    return { error: "Failed to generate thank you note. Please try again." };
  }
}

