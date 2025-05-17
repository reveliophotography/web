import GeneratorForm from '@/components/thank-you-generator/GeneratorForm';

export default function ThankYouGeneratorPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-5xl font-serif font-bold text-primary mb-4">Thank You Note Generator</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Quickly create personalized thank you notes for your potential clients. Fill in the details from their inquiry, and our AI will help craft a warm, inviting message to encourage booking and gather more information.
        </p>
      </section>

      <GeneratorForm />
    </div>
  );
}
