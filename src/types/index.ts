
export interface Photo {
  id: string;
  src: string;
  alt: string;
  category?: string;
  dataAiHint: string;
  height?: number; // Propiedad opcional para la altura
}
