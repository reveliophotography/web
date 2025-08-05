
'use client';

import { useState, useEffect } from 'react';

// Hook para obtener el tamaño de la ventana del navegador
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{ width?: number; height?: number }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Solo ejecuta este código en el lado del cliente
    if (typeof window === 'undefined') {
      return;
    }

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Añade el listener
    window.addEventListener('resize', handleResize);
    
    // Llama al handler inmediatamente para que el estado se actualice con el tamaño inicial
    handleResize();
    
    // Limpia el listener cuando el componente se desmonte
    return () => window.removeEventListener('resize', handleResize);
  }, []); // El array vacío asegura que este efecto solo se ejecute al montar y desmontar

  return windowSize;
}
