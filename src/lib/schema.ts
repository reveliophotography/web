import { siteConfig } from '@/lib/site';

/**
 * Datos NAP (Name, Address, Phone) de Revelio.
 * Fuente unica de verdad para los datos estructurados.
 */
export const businessInfo = {
  legalName: 'Revelio Photography',
  founder: 'Alejandro Montalvo Carrasco',
  email: 'info@reveliophotography.es',
  phone: '+34698480039',
  addressLocality: 'Sevilla',
  addressRegion: 'Andalucia',
  addressCountry: 'ES',
  logo: '/logoRevelio%20completo%20sin%20fondo.png',
  socials: [
    'https://www.instagram.com/reveliophotography_/',
    'https://www.tiktok.com/@reveliophotography',
  ],
} as const;

/**
 * Grafo principal de datos estructurados del sitio:
 * ProfessionalService + LocalBusiness, la Person que lo firma y el WebSite.
 */
export function getBusinessSchema() {
  const url = siteConfig.siteUrl;
  const businessId = `${url}/#business`;
  const personId = `${url}/#alejandro`;
  const websiteId = `${url}/#website`;
  const logoUrl = `${url}${businessInfo.logo}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['ProfessionalService', 'LocalBusiness'],
        '@id': businessId,
        name: businessInfo.legalName,
        legalName: businessInfo.legalName,
        description: siteConfig.description,
        url: `${url}/`,
        image: logoUrl,
        logo: logoUrl,
        telephone: businessInfo.phone,
        email: businessInfo.email,
        inLanguage: 'es-ES',
        currenciesAccepted: 'EUR',
        address: {
          '@type': 'PostalAddress',
          addressLocality: businessInfo.addressLocality,
          addressRegion: businessInfo.addressRegion,
          addressCountry: businessInfo.addressCountry,
        },
        areaServed: [
          { '@type': 'City', name: 'Sevilla' },
          { '@type': 'AdministrativeArea', name: 'Andalucia' },
        ],
        serviceType: 'Fotografia y video de bodas',
        founder: { '@id': personId },
        sameAs: [...businessInfo.socials],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '09:00',
            closes: '21:00',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servicios de boda',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Reportaje de fotografia de boda',
                serviceType: 'Fotografia de bodas',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Video de boda',
                serviceType: 'Video de bodas',
              },
            },
          ],
        },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: businessInfo.founder,
        jobTitle: 'Fotografo de bodas',
        worksFor: { '@id': businessId },
        url: `${url}/about`,
        sameAs: [...businessInfo.socials],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${url}/`,
        name: siteConfig.name,
        inLanguage: 'es-ES',
        publisher: { '@id': businessId },
      },
    ],
  };
}

/**
 * FAQPage. Solo debe usarse en la pagina donde las preguntas
 * se ven de verdad (la home), no en el layout global.
 */
export function getFaqSchema(items: readonly { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${siteConfig.siteUrl}/#faq`,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
