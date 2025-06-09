
import type { Metadata } from 'next';
import { lora, lato } from '@/lib/fonts'; // Updated font imports
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import TopBanner from '@/components/layout/TopBanner';
import FloatingWhatsAppButton from '@/components/layout/FloatingWhatsAppButton';
import CookieConsentBanner from '@/components/layout/CookieConsentBanner';
import { ThemeProvider } from '@/components/theme-provider';

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
      <body className={`${lora.variable} ${lato.variable} font-sans antialiased flex flex-col min-h-screen bg-background text-foreground`}> {/* Updated font variables and ensured font-sans uses Lato */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TopBanner />
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <CookieConsentBanner />
          <Footer />
          <FloatingWhatsAppButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
