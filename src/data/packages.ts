import type { PhotographyPackage } from '@/types';

export const photographyPackages: PhotographyPackage[] = [
  {
    id: '1',
    name: 'La Escapada',
    price: '$1,500',
    description: 'Perfecto para ceremonias íntimas y escapadas, capturando la esencia de tu día especial.',
    imageSrc: 'https://placehold.co/600x400.png',
    dataAiHint: 'couple mountains',
    features: [
      { id: 'f1-1', text: '3 horas de cobertura', available: true },
      { id: 'f1-2', text: 'Galería online de imágenes en alta resolución', available: true },
      { id: 'f1-3', text: '1 fotógrafo', available: true },
      { id: 'f1-4', text: 'Permiso de impresión', available: true },
      { id: 'f1-5', text: 'Sesión de compromiso', available: false },
      { id: 'f1-6', text: 'Álbum de bodas', available: false },
    ],
  },
  {
    id: '2',
    name: 'El Clásico',
    price: '$2,800',
    description: 'Nuestro paquete más popular, que ofrece una cobertura completa para el día de tu boda.',
    imageSrc: 'https://placehold.co/600x400.png',
    dataAiHint: 'wedding photography',
    features: [
      { id: 'f2-1', text: '6 horas de cobertura', available: true },
      { id: 'f2-2', text: 'Galería online de imágenes en alta resolución', available: true },
      { id: 'f2-3', text: '1 fotógrafo principal, 1 segundo fotógrafo', available: true },
      { id: 'f2-4', text: 'Sesión de compromiso', available: true },
      { id: 'f2-5', text: 'Permiso de impresión', available: true },
      { id: 'f2-6', text: 'Álbum de bodas pequeño', available: true },
    ],
  },
  {
    id: '3',
    name: 'El Gran Evento',
    price: '$4,500',
    description: 'Para la experiencia de boda definitiva, cubriendo cada momento de principio a fin.',
    imageSrc: 'https://placehold.co/600x400.png',
    dataAiHint: 'luxury wedding',
    features: [
      { id: 'f3-1', text: 'Cobertura de día completo (hasta 10 horas)', available: true },
      { id: 'f3-2', text: 'Galería online de imágenes en alta resolución', available: true },
      { id: 'f3-3', text: '1 fotógrafo principal, 1 segundo fotógrafo, 1 asistente', available: true },
      { id: 'f3-4', text: 'Sesión de compromiso de lujo', available: true },
      { id: 'f3-5', text: 'Álbum de bodas premium', available: true },
      { id: 'f3-6', text: 'Álbumes para padres (2)', available: true },
      { id: 'f3-7', text: 'Memoria USB personalizada con imágenes', available: true },
    ],
  },
];
