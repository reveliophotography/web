
import { Copyright } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8 mt-auto">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex items-center justify-center gap-2">
          <Copyright size={16} />
          <p className="text-sm">
            {currentYear} Revelio Photography. Todos los derechos reservados.
          </p>
        </div>
        <nav className="text-xs mt-4 flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
          <Link href="/legal-notice" className="hover:text-primary transition-colors">
            Aviso Legal
          </Link>
          <span className="hidden sm:inline" aria-hidden="true">|</span>
          <Link href="/privacy-policy" className="hover:text-primary transition-colors">
            Política de Privacidad
          </Link>
          <span className="hidden sm:inline" aria-hidden="true">|</span>
          <Link href="/cookie-policy" className="hover:text-primary transition-colors">
            Política de Cookies
          </Link>
          <span className="hidden sm:inline" aria-hidden="true">|</span>
          <Link href="/accessibility-statement" className="hover:text-primary transition-colors">
            Declaración de Accesibilidad
          </Link>
        </nav>
      </div>
    </footer>
  );
}
