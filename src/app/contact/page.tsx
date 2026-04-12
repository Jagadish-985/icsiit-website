
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { doc, collection } from 'firebase/firestore';
import { useFirebase } from '@/firebase';
import { setDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { useToast } from '@/hooks/use-toast';
import SectionHeading from '@/components/section-heading';
import { Phone, Mail, MapPin, MessageCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const contactFormSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(1, { message: 'Please select a subject.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { firestore } = useFirebase();
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      subject: 'Registration Query',
      message: '',
    },
  });

  const coordinators = [
    { name: "Coordinator 1", phone: "+91 9480343844" },
    { name: "Coordinator 2", phone: "+91 9611640888" },
    { name: "Coordinator 3", phone: "+91 7975255006" },
    { name: "Coordinator 4", phone: "+91 9535762626" }
  ];

  function onSubmit(values: ContactFormValues) {
    if (!firestore) return;

    const messagesRef = collection(firestore, 'contact_messages');
    const newDocRef = doc(messagesRef);
    
    const messageData = {
      id: newDocRef.id,
      ...values,
      sentAt: new Date().toISOString(),
      toEmail: 'jagadishb.985@gmail.com' // Hint for Trigger Email extension
    };

    setDocumentNonBlocking(newDocRef, messageData, { merge: true });
    
    toast({
      title: "Inquiry Sent",
      description: "Thank you for reaching out. We will get back to you shortly.",
    });
    
    form.reset();
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading centered title="Get In Touch" subtitle="Our team is here to help you with any conference-related inquiries." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-headline font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">Phone Support</p>
                      <p className="text-muted-foreground text-sm">Available Mon - Sat (9 AM - 6 PM)</p>
                      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {coordinators.map((c, i) => (
                          <a key={i} href={`tel:${c.phone.replace(/\s/g, '')}`} className="text-primary hover:underline">{c.phone}</a>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">Email</p>
                      <a href="mailto:icsmart@msruas.ac.in" className="text-primary hover:underline">icsmart@msruas.ac.in</a>
                      <p className="text-muted-foreground text-sm">For papers and publication queries</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">Venue Address</p>
                      <p className="text-muted-foreground">MSRUAS, RTC, Peenya, Bangalore</p>
                      <p className="text-muted-foreground text-sm">Near Brindavan Bus Stop, Peenya 4th Phase</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 glass-card rounded-2xl border-l-4 border-secondary">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-6 h-6 text-secondary" />
                  <h4 className="font-bold">Quick Assistance</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  The fastest way to reach us is via phone calls to any of our coordinators listed above. 
                  Please mention "IC-SMART 2026" in your query.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8 border border-white/5 h-full">
              <h3 className="text-2xl font-headline font-bold mb-6">Send a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input className="bg-muted border-none rounded-xl" placeholder="Enter your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input className="bg-muted border-none rounded-xl" placeholder="Email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-muted border-none rounded-xl">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Registration Query">Registration Query</SelectItem>
                            <SelectItem value="Paper Submission">Paper Submission</SelectItem>
                            <SelectItem value="Publication Info">Publication Info</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
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
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={4} 
                            className="bg-muted border-none rounded-xl" 
                            placeholder="How can we help?" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-primary-foreground font-bold py-6 rounded-xl hover:opacity-90 transition-opacity"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Inquiry'
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
