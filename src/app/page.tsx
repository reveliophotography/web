
'use client'; 

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { useState, useEffect } from 'react'; 
import SplashScreen from '@/components/splash/SplashScreen';

// --- CONFIGURACIÓN DEL CARRUSEL PRINCIPAL ---
// Para cambiar las imágenes, simplemente reemplaza las URLs en 'src'.
// El carrusel se moverá automáticamente cada 5 segundos (delay: 5000).
const heroSlides = [
  { src: 'https://placehold.co/1920x1080.png', alt: 'Una pareja de novios en un paisaje espectacular', dataAiHint: 'bride groom landscape' },
  { src: 'https://placehold.co/1920x1080.png', alt: 'Un momento íntimo y emotivo durante una boda', dataAiHint: 'wedding intimate moment' },
  { src: 'https://placehold.co/1920x1080.png', alt: 'Una celebración de boda llena de alegría y risas', dataAiHint: 'wedding party joy' },
];

const weddingStories = [
  {
    imageSrc: "https://placehold.co/800x600.png",
    dataAiHint: "wedding ceremony",
    title: "Ana & Javier | Finca La Concepción",
    description: "Una boda mágica bajo las estrellas de Marbella. Capturamos la energía y la alegría de una noche inolvidable, donde cada detalle contaba una parte de su historia de amor.",
    link: "/gallery?category=Boda+de+Ana+y+Javier"
  },
  {
    imageSrc: "https://placehold.co/800x600.png",
    dataAiHint: "wedding couple portrait",
    title: "Lucía & Marcos | Carmen de los Mártires",
    description: "La luz de Granada fue el escenario perfecto. Una celebración íntima y emotiva, donde las miradas y los gestos hablaron más alto que las palabras. Fue un honor ser testigos.",
    link: "/gallery?category=Boda+de+Luc%C3%ADa+y+Marcos"
  }
];

export default function HomePage() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Evita mostrar el splash en entornos de desarrollo para facilitar la edición.
    if (process.env.NODE_ENV === 'development') {
      setShowSplash(false);
      return;
    }
    const splashScreenShown = localStorage.getItem('splashScreenShown');
    if (splashScreenShown === 'true') {
      setShowSplash(false);
    }
  }, []);

  if (showSplash) {
    return <SplashScreen onFinished={() => {
      localStorage.setItem('splashScreenShown', 'true');
      setShowSplash(false);
    }} />;
  }

  return (
    <div className="space-y-0">
      {/* Hero Section with Autoplaying Carousel Background - Full Width */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden -mt-20"> {/* Ajuste de margen superior para compensar header */}
        <Carousel
          plugins={[plugin.current]}
          opts={{ loop: true }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="w-full h-full object-cover"
                  data-ai-hint={slide.dataAiHint}
                  priority={index === 0} 
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <div className="relative z-20 p-6 space-y-6 text-white max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-primary-foreground">
            Fotografía de Bodas con Alma
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90">
            Contamos vuestra historia a través de imágenes que perduran. Nuestro objetivo es capturar la belleza de lo real, lo espontáneo y lo emotivo.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact">
              Hablemos de vuestra boda <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <h2 className="text-4xl font-serif font-semibold text-primary mb-6">
                    Somos Revelio
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                    Más que fotógrafos, somos narradores de historias. Nuestra pasión es descubrir y capturar la esencia única de cada pareja, creando un recuerdo visual que va más allá de la fotografía tradicional.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                    Buscamos la luz perfecta, el gesto inadvertido, la lágrima de alegría. Nuestro enfoque es documental y artístico, permitiendo que vuestro día fluya con naturalidad mientras nos encargamos de inmortalizar cada instante.
                </p>
                <Button asChild variant="outline" size="lg">
                    <Link href="/about">
                        Conoced nuestra filosofía <Heart className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
            <div className="order-1 md:order-2">
                <Image
                src="https://placehold.co/600x800.png"
                alt="Retrato del equipo de fotógrafos de bodas"
                width={600}
                height={800}
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[3/4]"
                data-ai-hint="photographer portrait team"
                />
            </div>
        </div>
      </section>

      {/* Wedding Stories Section */}
      <section className="py-24 sm:py-32 bg-muted">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-serif font-semibold text-primary mb-4">
              Historias de Boda
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-16">
              Cada boda es un mundo, una historia única que tenemos el privilegio de contar. Estos son algunos de los momentos que hemos compartido.
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              {weddingStories.map((story, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <Link href={story.link} className="block w-full overflow-hidden rounded-lg shadow-xl mb-6">
                    <Image
                      src={story.imageSrc}
                      alt={`Fotografía de la boda de ${story.title}`}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover aspect-video transform transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={story.dataAiHint}
                    />
                  </Link>
                  <h3 className="text-2xl font-serif font-medium text-primary mb-2">
                    {story.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 max-w-md mx-auto">{story.description}</p>
                  <Button asChild variant="link" className="text-primary">
                    <Link href={story.link}>
                      Ver la historia completa <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
        </div>
      </section>
      
    </div>
  );
}
