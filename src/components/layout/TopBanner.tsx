
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

  return null;
}
