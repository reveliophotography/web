const FALLBACK_SITE_URL = "https://www.reveliophotography.es";

export const siteConfig = {
  name: "Revelio Photography",
  title: "Fotografos de Bodas en Sevilla | Revelio Photography",
  description:
    "Fotografia de bodas en Sevilla y Andalucia, natural y sin poses forzadas. Revelio Photography crea recuerdos con alma, emocion real y luz de vuestro gran dia.",
  locale: "es_ES",
  siteUrl: (process.env.NEXT_PUBLIC_BASE_URL || FALLBACK_SITE_URL).replace(/\/$/, ""),
  // Imagen que sale al compartir cualquier enlace del sitio (WhatsApp,
  // Instagram, Facebook, X). Para cambiarla basta con tocar esta ruta.
  ogImage: {
    url: "/carrusel1.jpg",
    width: 1920,
    height: 1280,
    alt: "Boda en Sevilla fotografiada por Revelio Photography",
  },
};
