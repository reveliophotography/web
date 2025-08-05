
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Camera, Heart, PawPrint } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24 space-y-20">
      <section className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2">
          <Image
            src="https://placehold.co/600x800.png"
            alt="Retrato del fotógrafo de bodas Revelio"
            width={600}
            height={800}
            className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[3/4]"
            data-ai-hint="photographer portrait"
          />
        </div>
        <div className="md:col-span-3">
          <h1 className="text-5xl font-serif font-bold text-primary mb-6">
            Mi Misión es Contar Vuestra Historia
          </h1>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              ¡Hola! Soy Revelio, un fotógrafo de bodas afincado en algún lugar maravilloso, aunque viajo a donde vuestra historia me lleve. Mi cámara no es solo una herramienta, es mi forma de conectar con las personas y de capturar la belleza efímera de los momentos que de verdad importan.
            </p>
            <p>
              Empecé en la fotografía por mi amor a las historias. Cada pareja tiene una narrativa única, una energía especial, y mi mayor privilegio es ser el encargado de traducirla a imágenes. No busco poses forzadas ni sonrisas artificiales. Busco la verdad: la emoción en una mirada, la complicidad en un gesto, la alegría desbordante de una celebración.
            </p>
            <p>
              Creo en un enfoque cercano y relajado. El día de vuestra boda, seré una presencia discreta, un amigo más, permitiendo que os sintáis cómodos y seáis vosotros mismos. Porque es ahí, en la autenticidad, donde reside la verdadera magia.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center max-w-4xl mx-auto">
        <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-4xl font-serif font-semibold text-primary mb-6">
          Mi Filosofía de Trabajo
        </h2>
        <p className="text-lg text-foreground/80 leading-relaxed">
          Mi estilo es una mezcla de fotografía documental y artística. Documental, porque capturo los hechos tal y como suceden, sin interferir. Artística, porque busco siempre la composición, la luz y el color que conviertan una foto en una pieza de arte. El resultado son imágenes atemporales, elegantes y cargadas de emoción, que os harán revivir vuestro día una y otra vez.
        </p>
        <div className="mt-8 flex items-center justify-center text-lg text-foreground/80 leading-relaxed bg-muted p-4 rounded-lg">
            <PawPrint className="h-6 w-6 mr-3 text-primary shrink-0" />
            <span>Por cierto, vuestros amigos peludos son más que bienvenidos. ¡Me encanta incluir mascotas en las sesiones y que formen parte de vuestro gran día!</span>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-4xl font-serif font-semibold text-primary mb-6">
          ¿Listo para crear algo inolvidable?
        </h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
          Si mi visión de la fotografía de bodas resuena con vosotros, me encantaría escuchar vuestra historia.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">
            Contacta conmigo <Camera className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
