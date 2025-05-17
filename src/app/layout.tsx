
import type { Metadata } from 'next';
import { playfairDisplay, montserrat } from '@/lib/fonts';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import TopBanner from '@/components/layout/TopBanner';
import FloatingWhatsAppButton from '@/components/layout/FloatingWhatsAppButton';

export const metadata: Metadata = {
  title: 'Revelio Weddings - Elegancia en Cada Fotograma',
  description: 'Capturando tu día especial con pasión y arte. Revelio Weddings ofrece servicios de fotografía de bodas a medida.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${playfairDisplay.variable} ${montserrat.variable} font-sans antialiased flex flex-col min-h-screen bg-background text-foreground`}>
        <TopBanner />
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <FloatingWhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
