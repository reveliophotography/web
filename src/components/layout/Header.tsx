
"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import * as React from 'react';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Sobre Nosotros' },
  { href: '/gallery', label: 'Galería' },
  { href: '/contact', label: 'Contacto' },
];

// ---------------------------------------------------------------------------
// --- PASO 1: LOCALIZA ESTE COMPONENTE 'Logo' ------------------------------
// --- PASO 2: REEMPLAZA EL CONTENIDO DE ESTE SVG CON EL CÓDIGO DE TU PROPIO SVG ---
// ---------------------------------------------------------------------------
const Logo = ({ size = 32 }: { size?: number }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
      <circle cx="12" cy="13" r="3"></circle>
    </svg>
);


export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const isHomePage = pathname === '/';

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20 || !isHomePage);
    };
    
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, isHomePage]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <Logo size={28} />
          <span className="text-2xl md:text-3xl font-serif font-bold">Revelio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-medium text-sm transition-colors",
                pathname === item.href ? "text-primary" : "hover:text-primary",
                !isScrolled && isHomePage ? "text-white" : "text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className={cn("h-6 w-6", !isScrolled && isHomePage ? 'text-white' : 'text-primary')} />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
              <div className="flex flex-col gap-6 mt-8">
              <SheetClose asChild>
                 <Link href="/" className="flex items-center gap-2 text-primary mb-6">
                    <Logo size={28} />
                    <span className="text-2xl font-serif font-bold">Revelio</span>
                  </Link>
                </SheetClose>
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-lg font-medium transition-colors",
                         pathname === item.href ? "text-primary" : "text-foreground hover:text-primary"
                      )}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
