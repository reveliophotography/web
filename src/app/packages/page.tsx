import Image from 'next/image';
import { photographyPackages } from '@/data/packages';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function PackagesPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-5xl font-serif font-bold text-primary mb-4">Our Photography Packages</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Choose the perfect package to capture your wedding day memories. Each package is thoughtfully designed to provide exceptional coverage and beautiful, high-quality photographs. We are also happy to create custom packages to suit your unique needs.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photographyPackages.map((pkg) => (
          <Card key={pkg.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {pkg.imageSrc && (
              <div className="relative w-full h-56">
                <Image
                  src={pkg.imageSrc}
                  alt={pkg.name}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={pkg.dataAiHint || 'wedding related'}
                />
              </div>
            )}
            <CardHeader>
              <CardTitle className="font-serif text-3xl text-primary">{pkg.name}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground pt-1">{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <div className="flex items-center text-2xl font-semibold text-accent-foreground">
                <DollarSign className="mr-2 h-6 w-6 text-accent" />
                {pkg.price}
              </div>
              <ul className="space-y-2">
                {pkg.features.map((feature) => (
                  <li key={feature.id} className="flex items-start text-sm">
                    {feature.available ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 mr-2 shrink-0 mt-0.5" />
                    )}
                    <span className={feature.available ? 'text-foreground/90' : 'text-muted-foreground line-through'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href={`/contact?package=${encodeURIComponent(pkg.name)}`}>Inquire About This Package</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      <section className="text-center mt-12 bg-card p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-serif font-semibold text-primary mb-4">Need a Custom Package?</h2>
        <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
          Your wedding is unique, and your photography package should be too. If our standard packages don't quite fit your vision, please reach out. We'd love to discuss your needs and create a tailored package just for you.
        </p>
        <Button asChild size="lg" variant="outline">
          <Link href="/contact">Contact Us for a Custom Quote</Link>
        </Button>
      </section>
    </div>
  );
}
