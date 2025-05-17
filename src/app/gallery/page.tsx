
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

export default function GalleryPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-5xl font-serif font-semibold text-primary mb-4">Nuestra Galería</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Adéntrate en el mundo de Revelio Weddings. Cada fotografía es un testimonio de amor, alegría y los momentos inolvidables que hacen que tu día sea único.
        </p>
      </section>

      <section className="flex justify-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl" // Ajustado max-w para una sola imagen grande
        >
          <CarouselContent>
            {galleryPhotos.map((photo) => (
              <CarouselItem key={photo.id} className="basis-full"> {/* Carrusel muestra una imagen a la vez */}
                <div className="p-1">
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <CardContent className="p-0 aspect-w-4 aspect-h-3">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={photo.dataAiHint}
                      />
                    </CardContent>
                    {photo.category && (
                       <div className="p-4 bg-card">
                          <p className="text-sm font-normal text-primary">{photo.category}</p> {/* Cambiado font-medium a font-normal */}
                          <p className="text-xs text-muted-foreground truncate">{photo.alt}</p>
                       </div>
                    )}
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
}
