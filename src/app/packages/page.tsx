
import Image from 'next/image';
import { photographyPackages } from '@/data/packages';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, PawPrint } from 'lucide-react'; // Removed DollarSign
import Link from 'next/link';

export default function PackagesPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-5xl font-serif font-bold text-primary mb-4">Nuestros Paquetes de Fotografía</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-2">
          Elige el paquete perfecto para capturar los recuerdos del día de tu boda. Cada paquete está cuidadosamente diseñado para proporcionar una cobertura excepcional y fotografías hermosas de alta calidad. También estamos encantados de crear paquetes personalizados que se adapten a tus necesidades únicas.
        </p>
        <p className="text-md text-foreground/70 max-w-3xl mx-auto flex items-center justify-center">
            <PawPrint className="h-5 w-5 mr-2 text-primary" />
            ¡No olvides que tus mascotas también son bienvenidas a ser parte de la sesión!
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
              {/* Price display removed from here */}
              <ul className="space-y-2 mt-4"> {/* Added mt-4 for spacing since price is removed */}
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
                <Link href={`/contact?package=${encodeURIComponent(pkg.name)}`}>Consultar Sobre Este Paquete</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      <section className="text-center mt-12 bg-card p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-serif font-semibold text-primary mb-4">¿Necesitas un Paquete Personalizado?</h2>
        <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
          Tu boda es única, y tu paquete de fotografía también debería serlo. Si nuestros paquetes estándar no se ajustan del todo a tu visión, por favor, contáctanos. Nos encantaría discutir tus necesidades y crear un paquete a medida solo para ti.
        </p>
        <Button asChild size="lg" variant="outline">
          <Link href="/contact">Contáctanos para una Cotización Personalizada</Link>
        </Button>
      </section>
    </div>
  );
}
