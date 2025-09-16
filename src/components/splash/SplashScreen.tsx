// components/splash/SplashScreen.js - CORREGIDO

'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface SplashScreenProps {
  onFinished: () => void;
}

export default function SplashScreen({ onFinished }: SplashScreenProps) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2000);

    const finishTimer = setTimeout(() => {
      onFinished();
    }, 5000);

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
      {/* --- IMAGEN DE BIENVENIDA CORREGIDA --- */}
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Bienvenido a Revelio Weddings"
        fill // ✅ Usamos la prop moderna 'fill'
        className="object-cover" // ✅ Usamos clases de Tailwind para el ajuste
        priority
        data-ai-hint="wedding elegance welcome"
      />
    </div>
  );
}