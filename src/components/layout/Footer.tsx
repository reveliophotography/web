
import { Copyright } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8 mt-12">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex items-center justify-center gap-2">
          <Copyright size={16} />
          <p className="text-sm">
            {currentYear} Revelio Weddings. Todos los derechos reservados.
          </p>
        </div>
        <nav className="text-xs mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1">
          <Link href="/cookie-policy" className="hover:text-primary transition-colors">
            Política de Cookies
          </Link>
          <span aria-hidden="true">|</span>
          <Link href="/accessibility-statement" className="hover:text-primary transition-colors">
            Declaración de Accesibilidad
          </Link>
        </nav>
        <p className="text-xs mt-3">Elegancia en Cada Fotograma</p>
      </div>
    </footer>
  );
}
