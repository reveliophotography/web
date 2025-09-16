
import { Suspense } from 'react';
import GalleryClientPage from './gallery-client-page';

export default function GalleryPage() {
  return (
    <Suspense fallback={<div className="w-full h-96 flex items-center justify-center text-muted-foreground">Cargando galería...</div>}>
      <GalleryClientPage />
    </Suspense>
  );
}

