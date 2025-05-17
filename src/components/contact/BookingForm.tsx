
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
import { photographyPackages } from "@/data/packages";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSearchParams } from 'next/navigation';
import { useEffect } from "react";


const BookingInquirySchema = z.object({
  clientName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  weddingDate: z.date({ required_error: "Wedding date is required."}),
  venue: z.string().min(2, { message: "Venue must be at least 2 characters." }),
  packageOfInterest: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message cannot exceed 500 characters." }),
});

type BookingFormValues = z.infer<typeof BookingInquirySchema>;

export default function BookingForm() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const preselectedPackage = searchParams.get('package');

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(BookingInquirySchema),
    defaultValues: {
      clientName: "",
      email: "",
      phone: "",
      venue: "",
      packageOfInterest: preselectedPackage || "",
      message: "",
    },
  });

  useEffect(() => {
    if (preselectedPackage) {
      form.setValue('packageOfInterest', preselectedPackage);
    }
  }, [preselectedPackage, form]);


  async function onSubmit(values: BookingFormValues) {
    const dataToSubmit: BookingInquiryData = {
      ...values,
      weddingDate: format(values.weddingDate, "yyyy-MM-dd"),
    };
    
    const result = await handleBookingInquiry(dataToSubmit);

    if (result.success) {
      toast({
        title: "Inquiry Sent!",
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        title: "Error",
        description: "There was a problem submitting your inquiry. Please try again.",
        variant: "destructive",
      });
      // Handle field errors if needed, e.g. result.errors
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
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Your full name" {...field} />
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
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                    <Input type="email" placeholder="your@email.com" {...field} />
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
                <FormLabel>Phone Number (Optional)</FormLabel>
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
              <FormLabel>Prospective Wedding Date</FormLabel>
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
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
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
                    disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
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
              <FormLabel>Wedding Venue (or City/Region)</FormLabel>
              <FormControl>
                <Input placeholder="E.g., The Grand Ballroom, Napa Valley" {...field} />
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
              <FormLabel>Package of Interest (Optional)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a package" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {photographyPackages.map(pkg => (
                    <SelectItem key={pkg.id} value={pkg.name}>{pkg.name} - {pkg.price}</SelectItem>
                  ))}
                  <SelectItem value="Custom">Custom Package Inquiry</SelectItem>
                  <SelectItem value="Unsure">Unsure / Just browsing</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tell Us About Your Wedding</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share some details about your vision, what you're looking for in a photographer, or any specific questions you have."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                The more details you provide, the better we can assist you.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Sending..." : <>Send Inquiry <Send className="ml-2 h-5 w-5" /></>}
        </Button>
      </form>
    </Form>
  );
}
