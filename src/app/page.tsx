
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

const heroSlides = [
  { src: 'https://placehold.co/1920x1080.png', alt: 'Una pareja de novios en un paisaje espectacular', dataAiHint: 'bride groom landscape' },
  { src: 'https://placehold.co/1920x1080.png', alt: 'Un momento íntimo y emotivo durante una boda', dataAiHint: 'wedding intimate moment' },
  { src: 'https://placehold.co/1920x1080.png', alt: 'Una celebración de boda llena de alegría y risas', dataAiHint: 'wedding party joy' },
];

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
    <div className="space-y-0">
      {/* Hero Section with Autoplaying Carousel Background - Full Width */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden -mt-20"> {/* Ajuste de margen superior para compensar header */}
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
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-primary-foreground">
            Fotografía de Bodas con Alma
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90">
            Vuestra historia, contada a través de imágenes que perduran. Mi objetivo es capturar la belleza de lo real, lo espontáneo y lo emotivo.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact">
              Hablemos de vuestra boda <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <h2 className="text-4xl font-serif font-semibold text-primary mb-6">
                    Hola, soy Revelio
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                    Más que un fotógrafo, soy un narrador de historias. Mi pasión es descubrir y capturar la esencia única de cada pareja, creando un recuerdo visual que va más allá de la fotografía tradicional.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                    Busco la luz perfecta, el gesto inadvertido, la lágrima de alegría. Mi enfoque es documental y artístico, permitiendo que vuestro día fluya con naturalidad mientras yo me encargo de inmortalizar cada instante.
                </p>
                <Button asChild variant="outline" size="lg">
                    <Link href="/about">
                        Conoce mi filosofía <Heart className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
            <div className="order-1 md:order-2">
                <Image
                src="https://placehold.co/600x800.png"
                alt="Retrato del fotógrafo de bodas"
                width={600}
                height={800}
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[3/4]"
                data-ai-hint="photographer portrait"
                />
            </div>
        </div>
      </section>
      
    </div>
  );
}
