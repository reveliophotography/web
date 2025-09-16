'use client';
import Image from 'next/image';
import { galleryPhotos } from '@/data/gallery';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useState, useMemo, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Masonry } from 'masonic';
import { useWindowSize } from '@/hooks/use-window-size';
import type { Photo } from '@/types';
import { AnimatePresence, motion } from 'framer-motion';

const allCategories = ['Todas', ...Array.from(new Set(galleryPhotos.flatMap(p => p.category ?? [])))];

// Componente para una tarjeta de foto individual
const PhotoCard = ({ data: photo }: { data: Photo }) => (
  <div className="relative overflow-hidden rounded-lg shadow-lg group">
    <Image
      src={photo.src}
      alt={photo.alt}
      width={350}
      height={photo.height ? Math.round(photo.height * (350/500)) : 525}
      className="w-full h-auto"
      data-ai-hint={photo.dataAiHint}
      loading="lazy"
      placeholder="blur"
      blurDataURL="/favicon.svg"
      quality={90}
    />
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  {/* Removed filename overlay on hover */}
  </div>
);

export default function GalleryClientPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'Todas';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Sincroniza el estado con la URL solo si la URL cambia
  useEffect(() => {
    const categoryFromURL = searchParams.get('category') || 'Todas';
    if (categoryFromURL !== selectedCategory) {
      setSelectedCategory(categoryFromURL);
    }
  }, [searchParams, selectedCategory]);

  const handleFilterClick = useCallback((category: string) => {
    setSelectedCategory(category);
    const newSearchParams = new URLSearchParams(searchParams.toString());
    if (category === 'Todas') {
      newSearchParams.delete('category');
    } else {
      newSearchParams.set('category', category);
    }
    router.push(`${pathname}?${newSearchParams.toString()}`, { scroll: false });
  }, [pathname, router, searchParams]);

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === 'Todas') {
      return galleryPhotos;
    }
    return galleryPhotos.filter(photo => photo.category === selectedCategory);
  }, [selectedCategory]);

  const { width } = useWindowSize();
  const columnCount = width ? (width < 640 ? 2 : width < 1024 ? 3 : 4) : 3;

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-serif font-semibold text-primary mb-4">Galería de Historias</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Un viaje visual a través de las emociones y la magia de las bodas. Filtra por categoría para explorar cada momento.
        </p>
      </section>

      <nav className="flex justify-center flex-wrap gap-2 mb-12">
        {allCategories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => handleFilterClick(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {isClient ? (
            <Masonry
              items={filteredPhotos}
              columnGutter={8}
              columnCount={columnCount}
              render={PhotoCard}
            />
          ) : (
            <div className="w-full h-96 flex items-center justify-center text-muted-foreground">Cargando galería...</div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
