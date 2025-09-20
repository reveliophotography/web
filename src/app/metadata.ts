import { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://reveliophotography.es'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Revelio Photography - Fotografía de Bodas con Alma',
  description: 'Capturamos momentos únicos y especiales en tu boda. Fotografía documental y artística para bodas en Sevilla y toda España.',
  openGraph: {
    title: 'Revelio Photography - Fotografía de Bodas con Alma',
    description: 'Capturamos momentos únicos y especiales en tu boda. Fotografía documental y artística para bodas en Sevilla y toda España.',
    url: baseUrl,
    siteName: 'Revelio Photography',
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
}