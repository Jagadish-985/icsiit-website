import SectionHeading from '@/components/section-heading';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {
  const coordinators = [
    { name: "Registration", phone: "+91 8281662714" },
    { name: "General Enquiry", phone: "+91 9686311475" },
    { name: "General Enquiry", phone: "+91 9480343844" }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeading 
            centered 
            title="Get In Touch" 
            subtitle="Our team is here to help you with any conference-related inquiries. Reach out to us via any of the channels below." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* Phone Card */}
            <Card className="rounded-[2.5rem] border-border shadow-lg overflow-hidden group hover:border-primary/30 transition-all bg-white">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">Phone Support</h3>
                <p className="text-sm text-muted-foreground mb-6">Available Mon - Sat (9 AM - 6 PM IST)</p>
                <div className="space-y-3">
                  {coordinators.map((c, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{c.name}</span>
                      <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="text-lg font-bold text-primary hover:underline">
                        {c.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="rounded-[2.5rem] border-border shadow-lg overflow-hidden group hover:border-secondary/30 transition-all bg-white">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
                  <Mail className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">Email Inquiry</h3>
                <p className="text-sm text-muted-foreground mb-6">For papers and publication queries</p>
                <a href="mailto:icsiit@msruas.ac.in" className="text-xl font-bold text-secondary hover:underline break-all">
                  icsiit@msruas.ac.in
                </a>
              </CardContent>
            </Card>

            {/* Venue Card */}
            <Card className="rounded-[2.5rem] border-border shadow-lg overflow-hidden group hover:border-primary/30 transition-all bg-white md:col-span-2 lg:col-span-1">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">Venue Address</h3>
                <p className="text-sm text-muted-foreground mb-6">Peenya Campus, Bengaluru</p>
                <div className="text-foreground font-bold leading-relaxed mb-6">
                  Ramaiah University Of Applied Sciences<br />
                  470-P, Peenya 4th Phase, Peenya,<br />
                  Bengaluru, Karnataka 560058
                </div>
                <div className="flex items-center gap-2 text-primary font-bold">
                   <MapPin className="w-4 h-4" />
                   <span className="text-sm">Peenya Campus - RUAS</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Assistance Note */}
          <div className="mt-16 p-8 bg-muted/50 rounded-[3rem] border border-border relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:rotate-12 transition-transform">
              <MessageCircle className="w-24 h-24 text-secondary" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                <MessageCircle className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Quick Assistance</h4>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  The fastest way to reach us is via phone calls to any of our coordinators listed above. 
                  Please mention <span className="text-foreground font-bold">"IC-SIIT 2026"</span> in your query for prioritized support and faster resolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}