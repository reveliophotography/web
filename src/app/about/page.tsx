
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Camera, Heart, PawPrint, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24 space-y-20">
      <section className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2">
          <Image
            src="/elia.jpg"
            alt="El equipo de fotógrafos de boda Revelio"
            width={600}
            height={800}
            className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[3/4]"
            data-ai-hint="photography team portrait"
          />
        </div>
        <div className="md:col-span-3">
          <h1 className="text-5xl font-serif font-bold text-primary mb-6">
            Fotografía de bodas natural y divertida en Sevilla
          </h1>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              ¡Hola! Somos Revelio, fotógrafos de bodas en Sevilla y Andalucía. Nos apasiona capturar la alegría, la emoción y la autenticidad de cada pareja (¡y de sus mascotas!). Nuestras cámaras son la excusa perfecta para conectar con las personas y congelar la magia de los momentos reales, sin poses ni artificios.
            </p>
            <p>
              Cada pareja (y cada mascota) tiene una historia única. Nuestro mayor privilegio es traducir esa energía a imágenes que transmitan verdad: la emoción en una mirada, la complicidad en un gesto, la alegría desbordante de una celebración, la locura de la fiesta y la ternura de los peludos.
            </p>
            <p>
              Nuestro enfoque es cercano, relajado y divertido. El día de vuestra boda, seremos una presencia discreta (o los primeros en liarla en la pista si hace falta), amigos con cámaras, para que os sintáis cómodos y seáis vosotros mismos. Porque ahí, en la autenticidad y la fiesta, está la magia.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center max-w-4xl mx-auto">
        <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-4xl font-serif font-semibold text-primary mb-6">
          Nuestra Filosofía de Trabajo
        </h2>
        <p className="text-lg text-foreground/80 leading-relaxed">
          Nuestro estilo es una mezcla de fotografía documental y artística. Documental, porque capturamos los hechos tal y como suceden, sin interferir. Artística, porque buscamos siempre la composición, la luz y el color que conviertan una foto en una pieza de arte. El resultado son imágenes atemporales, elegantes y cargadas de emoción, que os harán revivir vuestro día una y otra vez.
        </p>
        <div className="mt-8 flex items-center justify-center text-lg text-foreground/80 leading-relaxed bg-muted p-4 rounded-lg">
            <PawPrint className="h-6 w-6 mr-3 text-primary shrink-0" />
            <span>Por cierto, vuestros amigos peludos son más que bienvenidos. ¡Nos encanta incluir mascotas en las sesiones y que formen parte de vuestro gran día!</span>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-4xl font-serif font-semibold text-primary mb-6">
          ¿Listos para crear algo inolvidable?
        </h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
          Si nuestra visión de la fotografía de bodas resuena con vosotros, nos encantaría escuchar vuestra historia.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">
            Contactad con nosotros <Users className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
