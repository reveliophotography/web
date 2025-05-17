import { Copyright } from 'lucide-react';

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
        <p className="text-xs mt-2">Elegancia en Cada Fotograma</p>
      </div>
    </footer>
  );
}
