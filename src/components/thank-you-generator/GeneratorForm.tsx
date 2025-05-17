
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
import { useToast } from "@/hooks/use-toast";
import { Wand2, Copy } from "lucide-react";
import { useState } from "react";
import { generateThankYouNoteAction } from '@/app/actions';
import type { GenerateThankYouNoteInput } from '@/ai/flows/generate-thank-you-note';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ThankYouGeneratorSchema = z.object({
  clientName: z.string().min(1, "El nombre del cliente es obligatorio."),
  weddingDate: z.string().min(1, "La fecha de la boda es obligatoria (puede ser aproximada, ej: 'Primavera 2025')."),
  venue: z.string().min(1, "El lugar es obligatorio (puede ser aproximado, ej: 'Valle de Napa')."),
  packageOfInterest: z.string().min(1, "El paquete de interés es obligatorio."),
  specificRequests: z.string().optional().default(""),
});

type GeneratorFormValues = z.infer<typeof ThankYouGeneratorSchema>;

export default function GeneratorForm() {
  const { toast } = useToast();
  const [generatedNote, setGeneratedNote] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<GeneratorFormValues>({
    resolver: zodResolver(ThankYouGeneratorSchema),
    defaultValues: {
      clientName: "",
      weddingDate: "",
      venue: "",
      packageOfInterest: "",
      specificRequests: "",
    },
  });

  async function onSubmit(values: GeneratorFormValues) {
    setIsLoading(true);
    setGeneratedNote("");
    
    const input: GenerateThankYouNoteInput = {
        clientName: values.clientName,
        weddingDate: values.weddingDate,
        venue: values.venue,
        packageOfInterest: values.packageOfInterest,
        specificRequests: values.specificRequests || "Ninguna especificada.",
    };

    const result = await generateThankYouNoteAction(input);

    setIsLoading(false);

    if ('thankYouNote' in result && result.thankYouNote) {
      setGeneratedNote(result.thankYouNote);
      toast({
        title: "¡Nota Generada!",
        description: "Tu nota de agradecimiento personalizada está lista.",
      });
    } else {
      const errorMsg = 'error' in result ? result.error : "Ocurrió un error desconocido.";
      toast({
        title: "Error",
        description: errorMsg || "Error al generar la nota de agradecimiento.",
        variant: "destructive",
      });
    }
  }

  const handleCopyNote = () => {
    if (generatedNote) {
      navigator.clipboard.writeText(generatedNote);
      toast({
        title: "¡Copiado al portapapeles!",
      });
    }
  };

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl mx-auto p-6 md:p-8 bg-card rounded-lg shadow-xl">
          <FormField
            control={form.control}
            name="clientName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre del Cliente</FormLabel>
                <FormControl>
                  <Input placeholder="Ej: Ana Pérez" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weddingDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fecha de la Boda</FormLabel>
                <FormControl>
                  <Input placeholder="Ej: 26 de octubre de 2024 o Primavera 2025" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="venue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lugar</FormLabel>
                <FormControl>
                  <Input placeholder="Ej: El Gran Salón o Valle de Napa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="packageOfInterest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Paquete de Interés</FormLabel>
                <FormControl>
                  <Input placeholder="Ej: El Paquete Clásico" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="specificRequests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Solicitudes Específicas/Detalles de la Consulta</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Ej: 'Interesado en fotografía con drones', 'Le encantan las fotos espontáneas'"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Incluye cualquier detalle clave mencionado por el cliente.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isLoading}>
            {isLoading ? "Generando..." : <>Generar Nota de Agradecimiento <Wand2 className="ml-2 h-5 w-5" /></>}
          </Button>
        </form>
      </Form>

      {generatedNote && (
        <Card className="mt-8 max-w-2xl mx-auto shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-serif text-2xl text-primary">Nota de Agradecimiento Generada</CardTitle>
            <Button variant="outline" size="sm" onClick={handleCopyNote}>
              <Copy className="mr-2 h-4 w-4" /> Copiar
            </Button>
          </CardHeader>
          <CardContent>
            <Textarea
              value={generatedNote}
              readOnly
              className="min-h-[200px] bg-background/50"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
