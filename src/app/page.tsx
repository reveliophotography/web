import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Camera, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const featuredImages = [
  { src: 'https://placehold.co/600x400.png', alt: 'Joyful wedding couple', dataAiHint: 'wedding couple' },
  { src: 'https://placehold.co/600x400.png', alt: 'Elegant wedding details', dataAiHint: 'wedding details' },
  { src: 'https://placehold.co/600x400.png', alt: 'Scenic wedding ceremony', dataAiHint: 'wedding ceremony' },
];

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center rounded-lg overflow-hidden shadow-xl">
        <Image
          src="https://placehold.co/1600x900.png"
          alt="Beautiful wedding scene"
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
            Capturing the essence of your love story with timeless elegance and artistry.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact">
              Inquire About Your Date <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-serif font-semibold text-primary mb-6">
          Welcome to Revelio Weddings
        </h2>
        <p className="text-lg text-foreground/80 leading-relaxed">
          At Revelio, we believe that every wedding is a unique masterpiece, a symphony of emotions, laughter, and cherished moments. Our passion is to artfully document your special day, creating a visual narrative that you will treasure for a lifetime. With a blend of candid storytelling and fine art portraiture, we strive to capture the authentic beauty and joy of your celebration.
        </p>
      </section>

      {/* Mini Gallery Section */}
      <section>
        <h2 className="text-3xl font-serif font-semibold text-center text-primary mb-8">
          Moments We've Captured
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
              Explore Full Gallery <Camera className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Packages CTA Section */}
      <section className="bg-card p-8 md:p-12 rounded-lg shadow-lg">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif font-semibold text-primary mb-4">
            Our Photography Packages
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Discover our range of photography packages designed to perfectly suit your wedding day needs, from intimate elopements to grand celebrations. Each package is crafted with care to ensure comprehensive coverage and beautiful, lasting memories.
          </p>
          <Button asChild size="lg">
            <Link href="/packages">
              View Packages <Sparkles className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
