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
const heroSlides = [
  { src: '/carrusel16.jpg', alt: '_DMA7836', dataAiHint: 'foto boda' },
  { src: '/carrusel9.jpg', alt: '_DMA6855', dataAiHint: 'foto boda' },
  { src: '/carrusel11.jpg', alt: '_DMA1102', dataAiHint: 'foto boda' },
  { src: '/carrusel5.jpg', alt: 'IMG_2113', dataAiHint: 'foto boda' },
  { src: '/carrusel14.jpg', alt: 'IMG_8737-2', dataAiHint: 'foto boda' },
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
    <div className="space-y-0 pt-0">
      {/* Hero Section with Autoplaying Carousel Background - Full Width */}
      <section className="relative h-screen flex flex-col justify-end text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Carousel
            plugins={[plugin.current]}
            opts={{ loop: true }}
            className="w-full h-full"
          >
            <CarouselContent>
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-screen bg-black">
                    {/* Fondo desenfocado */}
                    <Image
                      src={slide.src}
                      alt=""
                      fill
                      sizes="100vw"
                      quality={10}
                      className="object-cover blur-2xl brightness-50"
                      aria-hidden="true"
                    />
                    {/* Imagen principal */}
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      sizes="100vw"
                      quality={95}
                      className="object-contain"
                      data-ai-hint={slide.dataAiHint}
                      priority={index === 0}
                      style={{objectPosition: 'center'}}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 p-6 pb-24 md:pb-32 space-y-6 text-white max-w-4xl mx-auto w-full">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-white">
            Fotografía de Bodas con Alma
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Contamos vuestra historia a través de imágenes que perduran.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
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
                src="/miguel.jpg"
                alt="Retrato del equipo de fotógrafos de bodas"
                width={1200}
                height={1600}
                className="rounded-lg shadow-xl w-full h-auto"
                data-ai-hint="photographer portrait team"
                quality={95}
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
              {/* Imágenes reales para las historias de boda */}
              {["_DMA1469.jpg", "_DMA1481.jpg"].map((img, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="block w-full overflow-hidden rounded-lg shadow-xl mb-6">
                    <Image
                      src={`/${img}`}
                      alt={`Historia de boda ${index+1}`}
                      width={1600}
                      height={900}
                      className="w-full h-auto rounded-lg shadow-xl"
                      data-ai-hint="wedding story"
                      quality={95}
                    />
                  </div>
                  <h3 className="text-2xl font-serif font-medium text-primary mb-2">
                    Historia de boda {index+1}
                  </h3>
                  <p className="text-foreground/70 mb-4 max-w-md mx-auto">Descripción de la historia de boda {index+1}.</p>
                  <Button asChild variant="link" className="text-primary">
                    <Link href="/gallery">
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
