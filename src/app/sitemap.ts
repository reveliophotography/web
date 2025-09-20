import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.reveliophotography.com';

  // Rutas estáticas
  return [
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
}
