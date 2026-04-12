import SectionHeading from '@/components/section-heading';
import { MapPin, Plane, Train, Bus } from 'lucide-react';
import Image from 'next/image';

export default function VenuePage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading centered title="Conference Venue" subtitle="Join us at the Peenya Campus of Ramaiah University, Bangalore." />
          
          <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-12 border border-white/10 group">
            <Image 
              src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop" 
              alt="Venue Location" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              data-ai-hint="university campus"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <div className="flex items-center gap-3 text-primary mb-2">
                <MapPin className="w-6 h-6" />
                <span className="font-bold text-xl">MSRUAS, Peenya</span>
              </div>
              <p className="text-muted-foreground">470-P, Peenya 4th Phase, Peenya, Bengaluru, Karnataka 560058</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-headline font-bold mb-6">How to Reach</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 bg-muted rounded-xl h-fit">
                    <Plane className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">By Air</h4>
                    <p className="text-sm text-muted-foreground">Kempegowda International Airport (BLR) is approximately 35km away. Prepaid taxis and Vayu Vajra airport buses are available.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 bg-muted rounded-xl h-fit">
                    <Train className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">By Rail</h4>
                    <p className="text-sm text-muted-foreground">Yeshwantpur Junction is the nearest major railway station (7km). Bangalore City (SBC) station is about 15km away.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 bg-muted rounded-xl h-fit">
                    <Bus className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">By Local Transport</h4>
                    <p className="text-sm text-muted-foreground">BMTC buses ply frequently to Peenya 4th Phase. The campus is near Brindavan Bus Stop.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-8 rounded-[2rem] border border-white/5">
              <h3 className="text-2xl font-headline font-bold mb-4">Accommodation</h3>
              <p className="text-muted-foreground mb-6">
                Several hotels and guest houses are located within a 5km radius of the Peenya campus. 
                Participants are requested to make their own arrangements, however, we can provide a list 
                of recommended hotels upon request.
              </p>
              <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                <p className="text-sm font-medium text-primary">Note for Participants</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Bangalore is known for its pleasant weather in May, with temperatures ranging from 22°C to 33°C.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
