import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Camera, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const featuredImages = [
  { src: 'https://placehold.co/600x400.png', alt: 'Pareja de novios feliz', dataAiHint: 'wedding couple' },
  { src: 'https://placehold.co/600x400.png', alt: 'Detalles elegantes de boda', dataAiHint: 'wedding details' },
  { src: 'https://placehold.co/600x400.png', alt: 'Ceremonia de boda pintoresca', dataAiHint: 'wedding ceremony' },
];

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center rounded-lg overflow-hidden shadow-xl">
        <Image
          src="https://placehold.co/1600x900.png"
          alt="Hermosa escena de boda"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="bride groom landscape"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 p-6 space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-foreground leading-tight">
            Revelio Weddings
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Capturando la esencia de tu historia de amor con elegancia y arte atemporales.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact">
              Consulta Sobre Tu Fecha <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-serif font-semibold text-primary mb-6">
          Bienvenidos a Revelio Weddings
        </h2>
        <p className="text-lg text-foreground/80 leading-relaxed">
          En Revelio, creemos que cada boda es una obra maestra única, una sinfonía de emociones, risas y momentos preciados. Nuestra pasión es documentar artísticamente tu día especial, creando una narrativa visual que atesorarás toda la vida. Con una mezcla de narración espontánea y retratos artísticos, nos esforzamos por capturar la auténtica belleza y alegría de tu celebración.
        </p>
      </section>

      {/* Mini Gallery Section */}
      <section>
        <h2 className="text-3xl font-serif font-semibold text-center text-primary mb-8">
          Momentos que Hemos Capturado
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredImages.map((image, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover aspect-[3/2]"
                  data-ai-hint={image.dataAiHint}
                />
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link href="/gallery">
              Explorar Galería Completa <Camera className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Packages CTA Section */}
      <section className="bg-card p-8 md:p-12 rounded-lg shadow-lg">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif font-semibold text-primary mb-4">
            Nuestros Paquetes de Fotografía
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Descubre nuestra gama de paquetes de fotografía diseñados para adaptarse perfectamente a las necesidades de tu día de boda, desde bodas íntimas hasta grandes celebraciones. Cada paquete está elaborado con esmero para garantizar una cobertura completa y recuerdos hermosos y duraderos.
          </p>
          <Button asChild size="lg">
            <Link href="/packages">
              Ver Paquetes <Sparkles className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
