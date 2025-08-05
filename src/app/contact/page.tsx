
import BookingForm from '@/components/contact/BookingForm';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const contactInfo = {
  displayPhone: "(123) 456-7890",
  fullPhone: "+1234567890",
  email: "hello@revelioweddings.com",
  whatsappNumber: "1234567890",
  whatsappMessage: "Hola, estoy interesado/a en tus servicios de fotografía de bodas y me gustaría saber más.",
};
const whatsappLink = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`;

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24 space-y-16">
      <section className="text-center">
        <h1 className="text-5xl font-serif font-bold text-primary mb-4">Hablemos</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Me encantaría escuchar sobre vuestros planes. Contadme todo sobre vuestra boda, vuestras ideas, vuestros sueños. Cuantos más detalles, mejor podré entender vuestra historia. Rellenad el formulario y empecemos a crear algo increíble juntos.
        </p>
      </section>

      <BookingForm />

      <section className="text-center">
        <h2 className="text-3xl font-serif font-semibold text-primary mb-6">Otras formas de conectar</h2>
        <p className="text-lg text-foreground/80 mb-6 max-w-xl mx-auto">
          Si lo prefieres, también puedes contactarme directamente.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4">
          <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-lg">
            <Mail className="h-5 w-5" /> {contactInfo.email}
          </a>
          <a href={`tel:${contactInfo.fullPhone}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-lg">
            <Phone className="h-5 w-5" /> {contactInfo.displayPhone}
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-lg">
            <MessageCircle className="h-5 w-5" /> WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
