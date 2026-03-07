
import type { Metadata } from 'next';
import { explora, lato } from '@/lib/fonts';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import FloatingWhatsAppButton from '@/components/layout/FloatingWhatsAppButton';
import CookieConsentBanner from '@/components/layout/CookieConsentBanner';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://reveliophotography.es'),
  title: 'Fotógrafos de Bodas en Sevilla | Revelio Weddings',
  description: 'Fotografía de bodas en Sevilla y Andalucía, natural, sin poses forzadas, para parejas auténticas (¡y sus mascotas!). Capturamos la emoción real, la fiesta y los mejores momentos de vuestro gran día. Vivid vuestra boda, nosotros la contamos en imágenes.',
  keywords: [
    'fotógrafo de bodas Sevilla',
    'fotografía de bodas Sevilla',
    'fotógrafo bodas natural',
    'fotógrafo bodas mascotas',
    'fotografía documental bodas',
    'fotógrafo bodas Andalucía',
    'fotografía boda espontánea',
    'fotógrafo bodas sin poses',
    'fotografía boda divertida',
    'fotógrafo bodas originales',
    'fotografía boda Sevilla',
    'fotógrafo bodas con perros',
    'fotógrafo bodas con gatos',
    'fotografía boda fiesta',
    'fotógrafo bodas naturales Sevilla',
  ],
  openGraph: {
    title: 'Fotógrafos de Bodas en Sevilla | Revelio Weddings',
    description: 'Fotografía de bodas natural y divertida en Sevilla y Andalucía. Sin poses, sin artificios, solo verdad. Capturamos la emoción, la fiesta y a todos (¡mascotas incluidas!).',
    url: 'https://reveliophotography.es',
    type: 'website',
    images: [
      {
        url: '/logoRevelio completo sin fondo.png',
        width: 800,
        height: 600,
        alt: 'Revelio Weddings - Fotógrafos de bodas en Sevilla',
      },
    ],
    locale: 'es_ES',
    siteName: 'Revelio Weddings',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fotógrafos de Bodas en Sevilla | Revelio Weddings',
    description: 'Fotografía de bodas natural y divertida en Sevilla y Andalucía. Sin poses, sin artificios, solo verdad. Capturamos la emoción, la fiesta y a todos (¡mascotas incluidas!).',
    images: ['/logoRevelio completo sin fondo.png'],
  },
  alternates: {
    canonical: 'https://reveliophotography.es',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={`${explora.variable} ${lato.variable} font-sans antialiased flex flex-col min-h-screen bg-background text-foreground`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <CookieConsentBanner />
        <Footer />
        <FloatingWhatsAppButton />
        <Toaster />
        <Analytics />
        <SpeedInsights />
        <Script id="metricool" strategy="afterInteractive">
          {`function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"58cb40d41a2150d43a48feecaf8b1bd2"})});`}
        </Script>
        {/* Local Business Schema Markup */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Revelio Weddings",
              "image": "https://reveliophotography.es/logoRevelio%20completo%20sin%20fondo.png",
              "url": "https://reveliophotography.es",
              "telephone": "+34698480039",
              "email": "info@reveliophotography.es",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sevilla",
                "addressRegion": "Andalucía",
                "addressCountry": "ES"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 37.3890924,
                "longitude": -5.9844589
              },
              "sameAs": [
                "https://instagram.com/revelioweddings"
              ],
              "description": "Fotografía de bodas en Sevilla y Andalucía, natural, sin poses forzadas, para parejas auténticas. Capturamos la emoción real y la fiesta."
            })
          }}
        />
      </body>
    </html>
  );
}
