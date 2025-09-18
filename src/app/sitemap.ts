import { MetadataRoute } from 'next';
import { galleryPhotos } from '@/data/gallery';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.reveliophotography.com';

  // Rutas estáticas
  const staticRoutes = [
    '/',
    '/about',
    '/contact',
    '/gallery',
    '/cookie-policy',
    '/legal-notice',
    '/privacy-policy',
    '/accessibility-statement',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as 'weekly',
    priority: route === '/' ? 1 : 0.8,
  }));

  // Rutas dinámicas para las categorías de la galería
  const galleryCategories = Array.from(new Set(galleryPhotos.flatMap(p => p.category ?? [])));
  const galleryRoutes = galleryCategories
    .filter(category => category && category !== 'Sin Categoría') // Filtrar categorías no deseadas
    .map((category) => ({
      url: `${siteUrl}/gallery?category=${encodeURIComponent(category)}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as 'weekly',
      priority: 0.6,
    }));

  return [...staticRoutes, ...galleryRoutes];
}
