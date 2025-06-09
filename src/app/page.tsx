
'use client'; 

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Camera, Sparkles, PawPrint, MessageCircle, Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { useState, useEffect } from 'react'; 
import SplashScreen from '@/components/splash/SplashScreen';

const heroSlides = [
  { src: 'https://placehold.co/1600x900.png', alt: 'Hermosa escena de boda 1', dataAiHint: 'bride groom landscape' },
  { src: 'https://placehold.co/1600x900.png', alt: 'Momentos de celebración únicos', dataAiHint: 'wedding party joy' },
  { src: 'https://placehold.co/1600x900.png', alt: 'Detalles de boda artísticos', dataAiHint: 'wedding artistic details' },
];

const featuredImages = [
  { src: 'https://placehold.co/600x400.png', alt: 'Pareja de novios feliz', dataAiHint: 'wedding couple' },
  { src: 'https://placehold.co/600x400.png', alt: 'Detalles elegantes de boda', dataAiHint: 'wedding details' },
  { src: 'https://placehold.co/600x400.png', alt: 'Ceremonia de boda pintoresca', dataAiHint: 'wedding ceremony' },
];

// Información de contacto para CTAs (similar a TopBanner para consistencia)
const contactInfo = {
  displayPhone: "(123) 456-7890",
  fullPhone: "+1234567890",
  email: "hello@revelioweddings.com",
  whatsappNumber: "1234567890",
  whatsappMessage: "Hola, estoy interesado/a en sus servicios de fotografía de bodas y me gustaría saber más sobre sus paquetes y disponibilidad.",
};
const whatsappLink = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`;


export default function HomePage() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashScreenShown = localStorage.getItem('splashScreenShown');
    if (splashScreenShown === 'true') {
      setShowSplash(false);
    }
  }, []);

  const handleSplashFinished = () => {
    localStorage.setItem('splashScreenShown', 'true');
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onFinished={handleSplashFinished} />;
  }

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section with Autoplaying Carousel Background */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center rounded-lg overflow-hidden shadow-xl">
        <Carousel
          plugins={[plugin.current]}
          opts={{ loop: true }}
          className="absolute inset-0 w-full h-full z-0"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                  data-ai-hint={slide.dataAiHint}
                  priority={index === 0} 
                />
              </CarouselItem>
            ))}
          </CarouselContent>
           <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 border-none h-10 w-10 md:h-12 md:w-12" />
           <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 border-none h-10 w-10 md:h-12 md:w-12" />
        </Carousel>
        
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <div className="relative z-20 p-6 space-y-6 text-white">
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-primary-foreground">
            Revelio Weddings
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Capturando la esencia de tu historia de amor con elegancia y arte atemporales.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact">
              Consulta Sobre Tu Fecha <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-serif font-semibold text-primary mb-6">
          Bienvenidos a Revelio Weddings
        </h2>
        <p className="text-lg text-foreground/80 leading-relaxed mb-4">
          En Revelio, creemos que cada boda es una obra maestra única, una sinfonía de emociones, risas y momentos preciados. Nuestra pasión es documentar artísticamente tu día especial, creando una narrativa visual que atesorarás toda la vida. Con una mezcla de narración espontánea y retratos artísticos, nos esforzamos por capturar la auténtica belleza y alegría de tu celebración.
        </p>
        <div className="flex items-center justify-center text-lg text-foreground/80 leading-relaxed">
            <PawPrint className="h-6 w-6 mr-2 text-primary" />
            <span>¡Y sí, amamos a las mascotas! Estaremos encantados de incluir a tus amigos de cuatro patas en tus recuerdos.</span>
        </div>
      </section>

      {/* Mini Gallery Section */}
      <section>
        <h2 className="text-3xl font-serif font-semibold text-center text-primary mb-8">
          Momentos que Hemos Capturado
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredImages.map((image, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover aspect-[3/2] transform group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={image.dataAiHint}
                />
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link href="/gallery">
              Explorar Galería Completa <Camera className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Custom Services CTA Section */}
      <section className="bg-card p-8 md:p-12 rounded-lg shadow-lg">
        <div className="text-center max-w-3xl mx-auto">
          <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-serif font-semibold text-primary mb-4">
            Servicios Fotográficos a Tu Medida
          </h2>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Entendemos que cada boda es única. Nos especializamos en crear experiencias fotográficas personalizadas que reflejen tu estilo y capturen la esencia de tu día. Contáctanos para conversar sobre tus ideas, y juntos diseñaremos la cobertura perfecta para tu celebración.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">
                Solicitar Información <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> Chatea por WhatsApp
              </Link>
            </Button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-foreground/70">
              O si lo prefieres, llámanos al <Link href={`tel:${contactInfo.fullPhone}`} className="font-medium hover:text-primary underline">{contactInfo.displayPhone}</Link> o envíanos un email a <Link href={`mailto:${contactInfo.email}`} className="font-medium hover:text-primary underline">{contactInfo.email}</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
