
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Camera, Menu, X } from 'lucide-react';
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
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // if (!mounted) return null; // Avoid hydration mismatch for Sheet/ThemeToggleButton, ThemeToggleButton handles its own mounting check

  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
          <Camera size={32} />
          <span className="text-3xl font-serif font-bold">Revelio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground hover:text-accent transition-colors font-medium text-sm"
            >
              {item.label}
            </Link>
          ))}
          {mounted && <ThemeToggleButton />} 
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && <ThemeToggleButton />}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-accent" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <div className="flex flex-col gap-6 mt-8">
              <SheetClose asChild>
                 <Link href="/" className="flex items-center gap-2 text-accent mb-6">
                    <Camera size={28} />
                    <span className="text-2xl font-serif font-bold">Revelio</span>
                  </Link>
                </SheetClose>
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors"
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
