
"use client";

import Link from 'next/link';
// Removed useState and useEffect as they are no longer needed here for 'mounted' state.
import { Camera, Menu } from 'lucide-react'; // Removed X as SheetClose handles its own icon logic if needed
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { ThemeToggleButton } from '@/components/theme-toggle-button';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/gallery', label: 'Galería' },
  { href: '/packages', label: 'Paquetes' },
  { href: '/contact', label: 'Contacto' },
];

export default function Header() {
  // The 'mounted' state and useEffect for it have been removed.
  // ThemeToggleButton handles its own mounting logic to prevent hydration issues.

  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"> {/* Changed text-accent to text-primary for logo */}
          <Camera size={32} />
          <span className="text-3xl font-serif font-bold">Revelio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm" // Changed hover:text-accent to hover:text-primary
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggleButton /> {/* Rendered directly */}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggleButton /> {/* Rendered directly */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" /> {/* Changed text-accent to text-primary */}
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <div className="flex flex-col gap-6 mt-8">
              <SheetClose asChild>
                 <Link href="/" className="flex items-center gap-2 text-primary mb-6"> {/* Changed text-accent to text-primary */}
                    <Camera size={28} />
                    <span className="text-2xl font-serif font-bold">Revelio</span>
                  </Link>
                </SheetClose>
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors" // Changed hover:text-accent to hover:text-primary
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
