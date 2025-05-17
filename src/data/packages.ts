import type { PhotographyPackage } from '@/types';

export const photographyPackages: PhotographyPackage[] = [
  {
    id: '1',
    name: 'The Elopement',
    price: '$1,500',
    description: 'Perfect for intimate ceremonies and elopements, capturing the essence of your special day.',
    imageSrc: 'https://placehold.co/600x400.png',
    dataAiHint: 'couple mountains',
    features: [
      { id: 'f1-1', text: '3 hours of coverage', available: true },
      { id: 'f1-2', text: 'Online gallery of high-resolution images', available: true },
      { id: 'f1-3', text: '1 photographer', available: true },
      { id: 'f1-4', text: 'Print release', available: true },
      { id: 'f1-5', text: 'Engagement session', available: false },
      { id: 'f1-6', text: 'Wedding album', available: false },
    ],
  },
  {
    id: '2',
    name: 'The Classic',
    price: '$2,800',
    description: 'Our most popular package, offering comprehensive coverage for your wedding day.',
    imageSrc: 'https://placehold.co/600x400.png',
    dataAiHint: 'wedding photography',
    features: [
      { id: 'f2-1', text: '6 hours of coverage', available: true },
      { id: 'f2-2', text: 'Online gallery of high-resolution images', available: true },
      { id: 'f2-3', text: '1 lead photographer, 1 second shooter', available: true },
      { id: 'f2-4', text: 'Engagement session', available: true },
      { id: 'f2-5', text: 'Print release', available: true },
      { id: 'f2-6', text: 'Small wedding album', available: true },
    ],
  },
  {
    id: '3',
    name: 'The Grand Affair',
    price: '$4,500',
    description: 'For the ultimate wedding experience, covering every moment from start to finish.',
    imageSrc: 'https://placehold.co/600x400.png',
    dataAiHint: 'luxury wedding',
    features: [
      { id: 'f3-1', text: 'Full day coverage (up to 10 hours)', available: true },
      { id: 'f3-2', text: 'Online gallery of high-resolution images', available: true },
      { id: 'f3-3', text: '1 lead photographer, 1 second shooter, 1 assistant', available: true },
      { id: 'f3-4', text: 'Deluxe engagement session', available: true },
      { id: 'f3-5', text: 'Premium wedding album', available: true },
      { id: 'f3-6', text: 'Parent albums (2)', available: true },
      { id: 'f3-7', text: 'Custom USB drive with images', available: true },
    ],
  },
];
