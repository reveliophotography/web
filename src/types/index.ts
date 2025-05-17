export interface Photo {
  id: string;
  src: string;
  alt: string;
  category?: string; // e.g., 'Ceremony', 'Reception', 'Details'
  dataAiHint: string;
}

export interface PackageFeature {
  id: string;
  text: string;
  available: boolean; // To show check or X mark
}

export interface PhotographyPackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: PackageFeature[];
  dataAiHint?: string; // Optional hint for package image
  imageSrc?: string; // Optional image for the package card
}
