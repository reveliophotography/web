
'use client';
import Image from 'next/image';
import { galleryPhotos } from '@/data/gallery';
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

export default function GalleryPage() {
   const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <div className="space-y-12 container mx-auto px-4 py-8">
      <section className="text-center">
        <h1 className="text-5xl font-serif font-semibold text-primary mb-4">Galería de Historias</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Un viaje visual a través de las emociones, los detalles y la magia de las bodas que he tenido el honor de capturar. Cada imagen es un capítulo de una historia de amor única.
        </p>
      </section>

      <section className="flex justify-center">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl"
        >
          <CarouselContent>
            {galleryPhotos.map((photo) => (
              <CarouselItem key={photo.id}>
                <Card className="overflow-hidden border-0 shadow-none rounded-none">
                  <CardContent className="p-0 aspect-w-16 aspect-h-9">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={1200}
                      height={800}
                      className="w-full h-full object-contain"
                      data-ai-hint={photo.dataAiHint}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </section>
    </div>
  );
}
