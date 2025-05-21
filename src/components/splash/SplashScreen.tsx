
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
        {/* Opcional: Logo o nombre de la marca */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-camera mb-4"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
        <h1 className="text-6xl font-serif text-white mb-8 drop-shadow-md">Revelio</h1> */}
        
        <Button
          onClick={handleEnterClick}
          size="lg"
          variant="outline" // Un outline para que resalte sobre la imagen con overlay
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

