
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface SplashScreenProps {
  onFinished: () => void;
}

export default function SplashScreen({ onFinished }: SplashScreenProps) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleEnterClick = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onFinished();
    }, 500); // Duración de la animación de desvanecimiento (0.5s)
  };

  return (
    <div
      className={`fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ease-in-out ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* --- CONFIGURACIÓN DE LA IMAGEN DE BIENVENIDA --- */}
      {/* Para cambiar la imagen, simplemente reemplaza la URL en 'src'. */}
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Bienvenido a Revelio Weddings"
        layout="fill"
        objectFit="cover"
        priority
        data-ai-hint="wedding elegance welcome"
      />
      <div className="relative z-10 flex flex-col items-center text-center p-8 bg-black/30 rounded-lg backdrop-blur-sm">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
          Revelio
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-md">
          Fotografía de Bodas con Alma
        </p>
        <Button onClick={handleEnterClick} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Entrar <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
