
import type { Metadata } from 'next';
import { explora, lato } from '@/lib/fonts';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import TopBanner from '@/components/layout/TopBanner';
import FloatingWhatsAppButton from '@/components/layout/FloatingWhatsAppButton';
import CookieConsentBanner from '@/components/layout/CookieConsentBanner';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Revelio Weddings - Fotografía de Bodas Artística',
  description: 'Capturando la esencia de vuestra historia de amor con un enfoque artístico y atemporal. Fotografía de bodas para parejas que buscan algo más que simples fotos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${explora.variable} ${lato.variable} antialiased flex flex-col min-h-screen bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TopBanner />
          <Header />
          <main className="flex-grow">
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
