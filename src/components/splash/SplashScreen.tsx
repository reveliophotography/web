
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
      <div className="absolute inset-0 bg-black/30 z-10" /> {/* Overlay oscuro */}
      
      <div className="relative z-20 flex flex-col items-center text-center p-6">
        <Button
          onClick={handleEnterClick}
          size="lg"
          variant="outline"
          className="bg-white/10 backdrop-blur-sm border-white/50 text-white hover:bg-white/20 hover:text-white text-lg px-8 py-6 shadow-lg"
          aria-label="Entrar al sitio y crear recuerdos inolvidables"
        >
          Crea Recuerdos Inolvidables
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
