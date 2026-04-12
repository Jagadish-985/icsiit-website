import SectionHeading from '@/components/section-heading';
import { MapPin, Plane, Train, Bus, Info } from 'lucide-react';
import Image from 'next/image';

export default function HowToReachPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            centered 
            title="How to Reach" 
            subtitle="Directions and travel information for SYNERGY 2026 participants visiting the Ramaiah University Peenya Campus." 
          />
          
          <div className="relative aspect-video rounded-[3rem] overflow-hidden mb-12 border-4 border-primary shadow-2xl group">
            <Image 
              src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop" 
              alt="Venue Location" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              data-ai-hint="university campus"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-10">
              <div className="flex items-center gap-3 text-primary mb-3">
                <MapPin className="w-8 h-8" />
                <span className="font-headline font-bold text-2xl">MSRUAS, Peenya Campus</span>
              </div>
              <p className="text-muted-foreground text-lg max-w-lg">470-P, Peenya 4th Phase, Peenya, Bengaluru, Karnataka 560058</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-3xl font-headline font-bold flex items-center gap-3">
                <div className="w-2 h-8 bg-primary rounded-full" />
                Transit Options
              </h3>
              <div className="space-y-6">
                <div className="flex gap-5 p-6 bg-white rounded-3xl border border-border hover:shadow-lg transition-shadow">
                  <div className="p-4 bg-primary/10 rounded-2xl h-fit">
                    <Plane className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">By Air</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Kempegowda International Airport (BLR) is approximately 35km away. 
                      Prepaid taxis and Vayu Vajra airport buses (KIAS) are available 24/7.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 p-6 bg-white rounded-3xl border border-border hover:shadow-lg transition-shadow">
                  <div className="p-4 bg-secondary/10 rounded-2xl h-fit">
                    <Train className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">By Rail</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Yeshwantpur Junction is the nearest major railway station (7km). 
                      Bangalore City (SBC) station is about 15km away with easy metro connectivity.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 p-6 bg-white rounded-3xl border border-border hover:shadow-lg transition-shadow">
                  <div className="p-4 bg-accent/20 rounded-2xl h-fit">
                    <Bus className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">By Local Transport</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      BMTC buses (Route 250 series) ply frequently to Peenya 4th Phase. 
                      The campus is located near the Brindavan Bus Stop.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-headline font-bold flex items-center gap-3">
                <div className="w-2 h-8 bg-secondary rounded-full" />
                Useful Tips
              </h3>
              <div className="bg-muted/50 p-8 rounded-[2.5rem] border border-border space-y-6">
                <div>
                  <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                    <Info className="w-5 h-5 text-secondary" />
                    Accommodation
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Several hotels and guest houses are located within a 5km radius of the Peenya campus. 
                    Participants are requested to make their own arrangements. A list of recommended 
                    hotels can be provided by the technical committee upon request.
                  </p>
                </div>
                
                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                  <p className="font-bold text-primary mb-2">Weather Forecast</p>
                  <p className="text-xs text-muted-foreground leading-relaxed italic">
                    Bangalore typically enjoys pleasant weather in May. Expect temperatures 
                    ranging between 22°C (min) and 33°C (max). Light summer wear is recommended.
                  </p>
                </div>

                <div className="p-6 bg-secondary/5 rounded-2xl border border-secondary/20">
                  <p className="font-bold text-secondary mb-2">Google Maps</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Search for "Ramaiah University of Applied Sciences, Peenya Campus" on your mobile device for real-time navigation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
