
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
  clientName: z.string().min(1, "Client name is required."),
  weddingDate: z.string().min(1, "Wedding date is required (can be approximate, e.g., 'Spring 2025')."),
  venue: z.string().min(1, "Venue is required (can be approximate, e.g., 'Napa Valley')."),
  packageOfInterest: z.string().min(1, "Package of interest is required."),
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
        specificRequests: values.specificRequests || "None specified.",
    };

    const result = await generateThankYouNoteAction(input);

    setIsLoading(false);

    if ('thankYouNote' in result && result.thankYouNote) {
      setGeneratedNote(result.thankYouNote);
      toast({
        title: "Note Generated!",
        description: "Your personalized thank you note is ready.",
      });
    } else {
      const errorMsg = 'error' in result ? result.error : "An unknown error occurred.";
      toast({
        title: "Error",
        description: errorMsg || "Failed to generate thank you note.",
        variant: "destructive",
      });
    }
  }

  const handleCopyNote = () => {
    if (generatedNote) {
      navigator.clipboard.writeText(generatedNote);
      toast({
        title: "Copied to clipboard!",
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
                <FormLabel>Client&apos;s Name</FormLabel>
                <FormControl>
                  <Input placeholder="E.g., Jane Doe" {...field} />
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
                <FormLabel>Wedding Date</FormLabel>
                <FormControl>
                  <Input placeholder="E.g., October 26, 2024 or Spring 2025" {...field} />
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
                <FormLabel>Venue</FormLabel>
                <FormControl>
                  <Input placeholder="E.g., The Grand Ballroom or Napa Valley" {...field} />
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
                <FormLabel>Package of Interest</FormLabel>
                <FormControl>
                  <Input placeholder="E.g., The Classic Package" {...field} />
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
                <FormLabel>Specific Requests/Details from Inquiry</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="E.g., 'Interested in drone photography', 'Loves candid shots'"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Include any key details mentioned by the client.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isLoading}>
            {isLoading ? "Generating..." : <>Generate Thank You Note <Wand2 className="ml-2 h-5 w-5" /></>}
          </Button>
        </form>
      </Form>

      {generatedNote && (
        <Card className="mt-8 max-w-2xl mx-auto shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-serif text-2xl text-primary">Generated Thank You Note</CardTitle>
            <Button variant="outline" size="sm" onClick={handleCopyNote}>
              <Copy className="mr-2 h-4 w-4" /> Copy
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
