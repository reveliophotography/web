
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Send } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { handleBookingInquiry, BookingInquiryData } from "@/app/actions";
// PhotographyPackages import removed as it's no longer needed
// Select components import removed as they are no longer needed
// useSearchParams and useEffect for preselectedPackage removed

const BookingInquirySchema = z.object({
  clientName: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce una dirección de correo electrónico válida." }),
  phone: z.string().optional(),
  weddingDate: z.date({ required_error: "La fecha de la boda es obligatoria."}),
  venue: z.string().min(2, { message: "El lugar debe tener al menos 2 caracteres." }),
  // packageOfInterest field removed
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }).max(500, { message: "El mensaje no puede exceder los 500 caracteres." }),
});

type BookingFormValues = z.infer<typeof BookingInquirySchema>;

export default function BookingForm() {
  const { toast } = useToast();
  // searchParams and preselectedPackage logic removed

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(BookingInquirySchema),
    defaultValues: {
      clientName: "",
      email: "",
      phone: "",
      venue: "",
      // packageOfInterest removed from defaultValues
      message: "",
    },
  });

  // useEffect for preselectedPackage removed

  async function onSubmit(values: BookingFormValues) {
    const dataToSubmit: BookingInquiryData = {
      ...values,
      weddingDate: format(values.weddingDate, "yyyy-MM-dd"),
    };
    
    const result = await handleBookingInquiry(dataToSubmit);

    if (result.success) {
      toast({
        title: "¡Consulta Enviada!",
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu consulta. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl mx-auto p-6 md:p-8 bg-card rounded-lg shadow-xl">
        <FormField
          control={form.control}
          name="clientName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre Completo</FormLabel>
              <FormControl>
                <Input placeholder="Tu nombre completo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Dirección de Correo Electrónico</FormLabel>
                <FormControl>
                    <Input type="email" placeholder="tu@email.com" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Número de Teléfono (Opcional)</FormLabel>
                <FormControl>
                    <Input type="tel" placeholder="(123) 456-7890" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>

        <FormField
          control={form.control}
          name="weddingDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Fecha Estimada de la Boda</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP", { timeZone: 'UTC' }) // Added timeZone to avoid potential date shift issues
                      ) : (
                        <span>Elige una fecha</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date(new Date().setHours(0,0,0,0)) || date < new Date("1900-01-01")} // Disable past dates more reliably
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="venue"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lugar de la Boda (o Ciudad/Región)</FormLabel>
              <FormControl>
                <Input placeholder="Ej: El Gran Salón, Valle de Napa" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Package of Interest FormField removed */}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cuéntanos Sobre Tu Boda</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Comparte algunos detalles sobre tu visión, lo que buscas en un fotógrafo o cualquier pregunta específica que tengas."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Cuantos más detalles proporciones, mejor podremos ayudarte.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Enviando..." : <>Enviar Consulta <Send className="ml-2 h-5 w-5" /></>}
        </Button>
      </form>
    </Form>
  );
}
