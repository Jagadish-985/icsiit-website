
import SectionHeading from '@/components/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const coordinators = [
    { name: "Coordinator 1", phone: "+91 9480343844" },
    { name: "Coordinator 2", phone: "+91 9611640888" },
    { name: "Coordinator 3", phone: "+91 7975255006" },
    { name: "Coordinator 4", phone: "+91 9535762626" }
  ];

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
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <input type="text" className="w-full bg-muted border-none rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input type="email" className="w-full bg-muted border-none rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none" placeholder="Email address" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <select className="w-full bg-muted border-none rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none">
                    <option>Registration Query</option>
                    <option>Paper Submission</option>
                    <option>Publication Info</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea rows={4} className="w-full bg-muted border-none rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl hover:opacity-90 transition-opacity">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
