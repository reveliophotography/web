
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

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const isHomePage = pathname === '/';

  React.useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > window.innerHeight * 0.9;
      if (shouldBeScrolled !== isScrolled) {
        setIsScrolled(shouldBeScrolled);
      }
    };
    
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, isHomePage, isScrolled]);

  const Logo = ({ size = 32 }: { size?: number }) => (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="1202.000000pt" height="1202.000000pt" viewBox="0 0 1202.000000 1202.000000"
      preserveAspectRatio="xMidYMid meet"
      style={{width: 'auto', height: `${size}px`}}
    >
      <g transform="translate(0.000000,1202.000000) scale(0.100000,-0.100000)"
      fill="currentColor" stroke="none">
      <path d="M5455 10004 c-22 -2 -114 -8 -205 -14 -529 -35 -964 -151 -1405 -375
      -202 -102 -327 -181 -518 -324 -513 -385 -850 -812 -1105 -1401 -37 -84 -106
      -291 -142 -420 -7 -25 -16 -56 -21 -70 -33 -99 -98 -459 -118 -660 -34 -327
      -39 -864 -11 -1140 33 -326 119 -729 215 -1009 95 -276 265 -648 373 -816 21
      -33 63 -98 92 -145 83 -132 284 -402 355 -476 5 -6 51 -58 102 -115 196 -221
      517 -497 799 -687 559 -376 1302 -657 2018 -762 427 -63 1078 -72 1486 -20 41
      5 116 15 165 21 185 23 561 106 693 153 23 8 50 12 59 9 9 -4 75 -42 147 -86
      159 -96 478 -254 601 -297 416 -146 831 -170 1155 -68 181 57 362 168 501 307
      83 83 96 122 53 159 -38 33 -89 25 -162 -26 -75 -52 -182 -105 -263 -130 -294
      -91 -697 -60 -1043 79 -371 150 -688 378 -989 714 -180 200 -359 454 -641 910
      -217 351 -342 549 -417 665 -42 63 -101 154 -132 202 -96 149 -325 475 -466
      663 -171 228 -276 359 -400 499 -114 129 -111 136 64 152 440 39 738 119 1080
      291 221 111 454 294 612 480 341 402 527 1025 483 1623 -32 440 -166 809 -407
      1125 -74 97 -240 264 -348 351 -413 331 -1002 556 -1630 624 -102 11 -558 21
      -630 14z m440 -355 c403 -40 778 -179 1075 -398 113 -83 282 -253 375 -376
      208 -278 325 -553 386 -905 18 -101 22 -167 23 -345 0 -207 -5 -271 -35 -420
      -88 -436 -306 -804 -629 -1064 -173 -139 -330 -223 -556 -297 -187 -60 -301
      -83 -551 -109 -191 -19 -213 -11 -293 105 -113 165 -170 371 -170 612 0 292
      114 474 306 486 94 6 148 -16 238 -98 89 -81 130 -101 208 -101 96 0 167 51
      211 150 27 62 20 162 -16 224 -73 124 -271 201 -454 176 -220 -30 -403 -149
      -547 -357 -32 -45 -62 -80 -67 -76 -11 6 -12 2773 -1 2791 4 6 25 13 47 15 62
      6 338 -2 450 -13z m-694 -109 c8 -145 11 -3159 3 -3198 l-6 -32 -1479 0
      c-1441 0 -1478 0 -1484 19 -6 20 8 218 26 376 26 227 117 607 194 810 14 39
      35 95 47 125 11 30 50 118 88 195 177 366 368 638 645 919 160 163 314 289
      509 418 409 269 802 407 1351 472 17 2 46 3 65 2 l35 -1 6 -105z m-4 -3412
      c11 -17 11 -3903 0 -3951 -10 -47 2 -49 -230 40 -456 174 -927 454 -1277 757
      -447 388 -795 839 -1041 1351 -231 482 -368 977 -409 1480 -11 138 -13 319 -3
      328 3 4 669 7 1479 7 1167 0 1474 -3 1481 -12z m320 -703 c149 -190 416 -551
      591 -800 310 -439 374 -533 787 -1150 517 -774 791 -1150 1019 -1400 40 -44
      76 -90 80 -101 13 -41 -12 -48 -328 -94 -279 -41 -848 -53 -1161 -24 -374 34
      -814 115 -1018 187 l-92 33 -3 1738 c-2 1617 -1 1737 15 1734 9 -2 59 -57 110
      -123z"/>
      </g>
    </svg>
  );

  const headerIsTransparent = !isScrolled && isHomePage;

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
      headerIsTransparent ? "bg-transparent" : "bg-background/80 backdrop-blur-sm shadow-md"
    )}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <Logo size={28} />
          <span className={cn(
            "text-2xl md:text-3xl font-serif font-bold transition-opacity duration-300",
            headerIsTransparent ? "text-white opacity-50" : "text-primary opacity-100"
          )}>Revelio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={cn(
            "hidden md:flex items-center gap-2 transition-opacity duration-300",
            headerIsTransparent ? "opacity-50" : "opacity-100"
        )}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-medium text-sm transition-all duration-300 rounded-md px-4 py-2",
                pathname === item.href 
                  ? (headerIsTransparent ? "text-white" : "text-primary") 
                  : (headerIsTransparent ? "text-white/90 hover:text-white" : "text-primary hover:text-primary/80"),
                !headerIsTransparent && "hover:scale-105"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className={cn(
            "md:hidden flex items-center gap-2 transition-opacity duration-300",
            headerIsTransparent ? "opacity-50" : "opacity-100"
        )}>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className={cn("h-6 w-6", headerIsTransparent ? 'text-white' : 'text-primary')} />
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
