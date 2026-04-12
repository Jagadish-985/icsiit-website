
import SectionHeading from '@/components/section-heading';
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
        <div className="max-w-6xl mx-auto">
          <SectionHeading centered title="Get In Touch" subtitle="Our team is here to help you with any conference-related inquiries." />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
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
                          <a key={i} href={`tel:${c.phone.replace(/\s/g, '')}`} className="text-primary hover:underline font-semibold">{c.phone}</a>
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
                      <a href="mailto:icsmart@msruas.ac.in" className="text-primary hover:underline font-semibold">icsmart@msruas.ac.in</a>
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
                      <p className="text-muted-foreground text-sm font-medium">Near Brindavan Bus Stop, Peenya 4th Phase, Bangalore - 560058</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-muted/50 rounded-2xl border-l-4 border-secondary">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-6 h-6 text-secondary" />
                  <h4 className="font-bold">Quick Assistance</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The fastest way to reach us is via phone calls to any of our coordinators listed above. 
                  Please mention <span className="text-foreground font-bold">"IC-SIIT 2026"</span> in your query for prioritized support.
                </p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="glass-card rounded-[2.5rem] overflow-hidden border border-border shadow-2xl h-[450px] lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2642592717752!2d77.50573037540221!3d13.018836513840283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3cfb3dbaee73%3A0xb6777a4ce0b09eb5!2sRamaiah%20University%20Of%20Applied%20Sciences!5e0!3m2!1sen!2sin!4v1775996670597!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MSRUAS Campus Map"
                className="grayscale-[0.2] contrast-[1.1]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
