
"use client";

import Link from 'next/link';
import { Camera, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { ThemeToggleButton } from '@/components/theme-toggle-button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import * as React from 'react';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Sobre Mí' },
  { href: '/gallery', label: 'Galería' },
  { href: '/contact', label: 'Contacto' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <Camera size={32} />
          <span className="text-3xl font-serif font-bold">Revelio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-medium text-sm transition-colors",
                pathname === item.href ? "text-primary" : "text-foreground hover:text-primary",
                !isScrolled && pathname !== "/" && "text-foreground",
                !isScrolled && pathname === "/" && "text-white hover:text-primary-foreground/80"
              )}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggleButton />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggleButton />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className={cn("h-6 w-6", isScrolled || pathname !== '/' ? 'text-primary' : 'text-white')} />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <div className="flex flex-col gap-6 mt-8">
              <SheetClose asChild>
                 <Link href="/" className="flex items-center gap-2 text-primary mb-6">
                    <Camera size={28} />
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
