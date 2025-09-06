
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface SplashScreenProps {
  onFinished: () => void;
}

export default function SplashScreen({ onFinished }: SplashScreenProps) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Inicia la transición de desvanecimiento después de 2 segundos
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2000); // Tiempo que la imagen es visible antes de empezar a desaparecer

    // Llama a onFinished después de que la animación de desvanecimiento complete
    // Duración total = 2000ms (visible) + 3000ms (fade-out) = 5000ms
    const finishTimer = setTimeout(() => {
      onFinished();
    }, 5000);

    // Limpia los temporizadores si el componente se desmonta
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinished]);

  return (
    <div
      className={`fixed inset-0 z-[1000] bg-background transition-opacity duration-[3000ms] ease-in-out ${
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
    </div>
  );
}
