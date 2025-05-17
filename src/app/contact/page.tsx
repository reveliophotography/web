
import BookingForm from '@/components/contact/BookingForm';
import { Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-5xl font-serif font-bold text-primary mb-4">Get in Touch</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          We're excited to hear about your wedding plans! Please fill out the form below to inquire about our availability and services. We typically respond within 24-48 hours.
        </p>
      </section>

      <BookingForm />

      <section className="text-center mt-12">
        <h2 className="text-3xl font-serif font-semibold text-primary mb-6">Alternatively</h2>
        <p className="text-lg text-foreground/80 mb-4">
          You can also reach us directly via email or phone:
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="mailto:hello@revelioweddings.com" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Mail className="h-5 w-5" /> hello@revelioweddings.com
          </a>
          <a href="tel:+1234567890" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Phone className="h-5 w-5" /> (123) 456-7890
          </a>
        </div>
      </section>
    </div>
  );
}
