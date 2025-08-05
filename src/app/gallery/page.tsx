
'use client';
import Image from 'next/image';
import { galleryPhotos } from '@/data/gallery';
import { useSearchParams } from 'next/navigation';
import { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Masonry } from 'masonic';
import { useWindowSize } from '@/hooks/use-window-size';
import type { Photo } from '@/types';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

const allCategories = ['Todas', ...Array.from(new Set(galleryPhotos.flatMap(p => p.category ?? [])))];

// Componente para una tarjeta de foto individual
const PhotoCard = ({ data: photo }: { data: Photo }) => (
  <div className="relative overflow-hidden rounded-lg shadow-lg group">
    <Image
      src={photo.src}
      alt={photo.alt}
      width={500}
      height={photo.height || 750} // Asignamos una altura por defecto o la que venga en los datos
      className="w-full h-auto"
      data-ai-hint={photo.dataAiHint}
    />
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <p className="absolute bottom-4 left-4 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {photo.alt}
    </p>
  </div>
);

export default function GalleryPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'Todas';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    // Si la URL cambia (ej. por navegación), actualizamos la categoría
    const categoryFromURL = searchParams.get('category') || 'Todas';
    if (categoryFromURL !== selectedCategory) {
      setSelectedCategory(categoryFromURL);
    }
  }, [searchParams, selectedCategory]);

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
            onClick={() => setSelectedCategory(category)}
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
          <Masonry
            items={filteredPhotos}
            columnGutter={16}
            columnCount={columnCount}
            render={PhotoCard}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
