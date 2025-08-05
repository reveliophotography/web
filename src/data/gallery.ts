
import type { Photo } from '@/types';

// Se añaden alturas para un mejor renderizado en la galería masonry.
export const galleryPhotos: Photo[] = [
  { id: '1', src: 'https://placehold.co/800x1200.png', alt: 'Pareja besándose al atardecer', category: 'Hora Dorada', dataAiHint: 'wedding couple sunset', height: 1200 },
  { id: '2', src: 'https://placehold.co/800x600.png', alt: 'Novia caminando por el pasillo', category: 'Ceremonia', dataAiHint: 'bride aisle', height: 600 },
  { id: '3', src: 'https://placehold.co/800x800.png', alt: 'Anillos de boda sobre una flor', category: 'Detalles', dataAiHint: 'wedding rings', height: 800 },
  { id: '4', src: 'https://placehold.co/800x600.png', alt: 'Momento del primer baile', category: 'Recepción', dataAiHint: 'wedding dance', height: 600 },
  { id: '5', src: 'https://placehold.co/800x1000.png', alt: 'Novio esperando a la novia', category: 'Ceremonia', dataAiHint: 'groom waiting', height: 1000 },
  { id: '6', src: 'https://placehold.co/800x600.png', alt: 'Corte del pastel de bodas', category: 'Recepción', dataAiHint: 'wedding cake', height: 600 },
  { id: '7', src: 'https://placehold.co/800x900.png', alt: 'Ramo de novia', category: 'Detalles', dataAiHint: 'bridal bouquet', height: 900 },
  { id: '8', src: 'https://placehold.co/800x600.png', alt: 'Pareja riendo juntos', category: 'Momentos Espontáneos', dataAiHint: 'wedding couple laughing', height: 600 },
  { id: '9', src: 'https://placehold.co/800x500.png', alt: 'Decoración del lugar', category: 'Detalles', dataAiHint: 'wedding venue', height: 500 },
  { id: '10', src: 'https://placehold.co/800x600.png', alt: 'Invitados celebrando', category: 'Recepción', dataAiHint: 'wedding guests', height: 600 },
  { id: '11', src: 'https://placehold.co/800x1000.png', alt: 'Novia preparándose', category: 'Preparativos', dataAiHint: 'bride makeup', height: 1000 },
  { id: '12', src: 'https://placehold.co/800x1200.png', alt: 'Retrato de boda al aire libre', category: 'Retratos', dataAiHint: 'wedding portrait outdoor', height: 1200 },
  // Fotos para la historia de Ana y Javier
  { id: '13', src: 'https://placehold.co/800x1100.png', alt: 'Sonrisa de Ana', category: 'Boda de Ana y Javier', dataAiHint: 'bride smiling', height: 1100 },
  { id: '14', src: 'https://placehold.co/800x600.png', alt: 'Votos de Javier', category: 'Boda de Ana y Javier', dataAiHint: 'groom vows', height: 600 },
  // Fotos para la historia de Lucía y Marcos
  { id: '15', src: 'https://placehold.co/800x1000.png', alt: 'El beso de Lucía y Marcos', category: 'Boda de Lucía y Marcos', dataAiHint: 'wedding kiss', height: 1000 },
  { id: '16', src: 'https://placehold.co/800x700.png', alt: 'Paseo en Granada', category: 'Boda de Lucía y Marcos', dataAiHint: 'couple walking', height: 700 },
];
