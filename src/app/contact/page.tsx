
import BookingForm from '@/components/contact/BookingForm';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const contactInfo = {
  displayPhone: "(346) 984-80039",
  fullPhone: "+34698480039",
  email: "hello@revelioweddings.com",
  whatsappNumber: "34698480039",
  whatsappMessage: "Hola, estoy interesado/a en tus servicios de fotografía de bodas y me gustaría saber más.",
};
const whatsappLink = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`;

import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24 space-y-16">
      <section className="text-center">
        <div className="flex justify-center mb-8">
          <Image
            src="/miguel.jpg"
            alt="Contacto Revelio"
            width={600}
            height={400}
            className="rounded-lg shadow-xl w-full max-w-md h-auto object-cover"
          />
        </div>
        <h1 className="text-5xl font-serif font-bold text-primary mb-4">¿Listos para liarla en vuestra boda?</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Cuéntanos todo sobre vuestra boda en Sevilla o Andalucía: cómo imagináis la fiesta, quiénes son vuestros peludos, qué locuras queréis recordar para siempre. Rellenad el formulario y empecemos a crear recuerdos auténticos, divertidos y llenos de emoción.
        </p>
      </section>

      <BookingForm />

      <section className="text-center">
        <h2 className="text-3xl font-serif font-semibold text-primary mb-6">Otras formas de conectar</h2>
        <p className="text-lg text-foreground/80 mb-6 max-w-xl mx-auto">
          Si lo preferís, también podéis contactarnos directamente.
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
