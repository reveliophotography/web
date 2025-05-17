import Image from 'next/image';
import { galleryPhotos } from '@/data/gallery';
import { Card, CardContent } from '@/components/ui/card';

export default function GalleryPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-5xl font-serif font-bold text-primary mb-4">Our Gallery</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Step into the world of Revelio Weddings. Each photograph is a testament to love, joy, and the unforgettable moments that make your day unique.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryPhotos.map((photo) => (
            <Card key={photo.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
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
                    <p className="text-sm font-medium text-primary">{photo.category}</p>
                    <p className="text-xs text-muted-foreground">{photo.alt}</p>
                 </div>
              )}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
