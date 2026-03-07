import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galería de Bodas | Reportajes Reales en Sevilla',
  description: 'Descubre nuestros reportajes de bodas reales en Sevilla y Andalucía. Fotografías llenas de emoción, luz natural y sin poses forzadas. Inspírate para tu gran día.',
  alternates: {
    canonical: 'https://revelioweddings.com/gallery',
  },
};

import GalleryClientPage from './gallery-client-page';

export default function GalleryPage() {
  return (
    <Suspense fallback={<div className="w-full h-96 flex items-center justify-center text-muted-foreground">Cargando galería...</div>}>
      <GalleryClientPage />
    </Suspense>
  );
}

