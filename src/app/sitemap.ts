import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

type Route = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
};

// Rutas reales de src/app. Si se anade una pagina nueva, va aqui tambien.
const routes: Route[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/galeria', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/contacto', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/sobre-nosotros', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/colaboradores', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/aviso-legal', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/politica-de-privacidad', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/politica-de-cookies', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/accesibilidad', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.siteUrl}${path === '/' ? '/' : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
