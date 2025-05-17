import GeneratorForm from '@/components/thank-you-generator/GeneratorForm';

export default function ThankYouGeneratorPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-5xl font-serif font-bold text-primary mb-4">Generador de Notas de Agradecimiento</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Crea rápidamente notas de agradecimiento personalizadas para tus clientes potenciales. Completa los detalles de su consulta y nuestra IA te ayudará a redactar un mensaje cálido y acogedor para fomentar la reserva y obtener más información.
        </p>
      </section>

      <GeneratorForm />
    </div>
  );
}
