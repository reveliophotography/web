
import BookingForm from '@/components/contact/BookingForm';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

// Re-use contact info for consistency
const contactInfo = {
  displayPhone: "(123) 456-7890",
  fullPhone: "+1234567890",
  email: "hello@revelioweddings.com",
  whatsappNumber: "1234567890",
  whatsappMessage: "Hola, estoy interesado/a en sus servicios de fotografía de bodas y me gustaría saber más sobre sus paquetes y disponibilidad.",
};
const whatsappLink = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`;

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-5xl font-serif font-bold text-primary mb-4">Ponte en Contacto</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          ¡Estamos emocionados de escuchar sobre tus planes de boda! Por favor, completa el formulario a continuación para consultar sobre nuestra disponibilidad y servicios fotográficos personalizados. Normalmente respondemos en 24-48 horas.
        </p>
      </section>

      <BookingForm />

      <section className="text-center mt-12">
        <h2 className="text-3xl font-serif font-semibold text-primary mb-6">Otras Formas de Contactar</h2>
        <p className="text-lg text-foreground/80 mb-6 max-w-xl mx-auto">
          También puedes contactarnos directamente. ¡Estaremos encantados de atenderte!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4">
          <Link href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-lg">
            <Mail className="h-5 w-5" /> {contactInfo.email}
          </Link>
          <Link href={`tel:${contactInfo.fullPhone}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-lg">
            <Phone className="h-5 w-5" /> {contactInfo.displayPhone}
          </Link>
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-lg">
            <MessageCircle className="h-5 w-5" /> WhatsApp
          </Link>
        </div>
      </section>
    </div>
  );
}
