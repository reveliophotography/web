
'use client';

import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onFinished: () => void;
  duration?: number; // Duración en milisegundos
}

export default function SplashScreen({ onFinished, duration = 3000 }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Iniciar el desvanecimiento un poco antes de que termine la duración total
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, Math.max(0, duration - 500)); // Asegurarse que el delay no sea negativo

    // Ocultar completamente y llamar a onFinished cuando la duración se cumpla
    const finishTimer = setTimeout(() => {
      setIsVisible(false); // Esto podría no ser estrictamente necesario si onFinished desmonta el componente
      onFinished();
    }, duration);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinished, duration]);

  // Si el componente padre ya lo ha desmontado debido a onFinished, no renderizar nada.
  // Este chequeo es más bien una salvaguarda.
  if (!isVisible && !isFadingOut) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-center justify-center bg-background transition-opacity duration-500 ease-in-out ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
      // El div permanece en el DOM durante la transición de opacidad
      // y será desmontado por el componente padre cuando onFinished() actualice el estado.
    >
      <Image
        src="https://placehold.co/1920x1080.png" // Imagen de alta resolución para pantalla completa
        alt="Bienvenido a Revelio Weddings"
        layout="fill"
        objectFit="cover"
        priority // Es importante para LCP
        data-ai-hint="wedding elegance welcome" // Hint para la imagen
      />
      {/* Aquí podrías añadir tu logo o un texto breve si lo deseas */}
      {/* Ejemplo:
      <div className="absolute z-10 flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-camera"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
        <h1 className="text-5xl font-serif text-white mt-2">Revelio</h1>
      </div>
      */}
    </div>
  );
}
