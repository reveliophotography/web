
export interface Photo {
  id: string;
  src: string;
  alt: string;
  category?: string; // e.g., 'Ceremony', 'Reception', 'Details'
  dataAiHint: string;
}

// PhotographyPackage and PackageFeature interfaces removed as they are no longer needed.
