
'use client';

import Link from 'next/link';
import { Instagram, MessageCircle, Phone, Mail } from 'lucide-react';

export default function TopBanner() {
  // Reemplaza con tu información de contacto real
  const displayPhone = "(123) 456-7890";
  const fullPhone = "+1234567890";
  const email = "hello@revelioweddings.com";
  const whatsappNumber = "1234567890"; // Número para WhatsApp, sin código de país para el enlace wa.me si ya está en formato internacional
  const whatsappMessage = "Hola, estoy interesado en sus servicios de fotografía.";
  const instagramUser = "revelioweddings"; 

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-muted text-muted-foreground py-2 px-4 md:px-6 border-b border-border">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-xs">
        <div className="flex items-center gap-x-4 gap-y-1 flex-wrap justify-center sm:justify-start mb-2 sm:mb-0">
          <Link href={`tel:${fullPhone}`} className="hover:text-primary transition-colors flex items-center gap-1">
            <Phone size={14} /> {displayPhone}
          </Link>
          <Link href={`mailto:${email}`} className="hover:text-primary transition-colors flex items-center gap-1">
            <Mail size={14} /> {email}
          </Link>
        </div>
        <div className="flex items-center gap-x-4 gap-y-1 flex-wrap justify-center sm:justify-end">
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
            <MessageCircle size={14} /> WhatsApp
          </Link>
          <Link href={`https://instagram.com/${instagramUser}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Instagram size={16} />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

