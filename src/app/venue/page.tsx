import SectionHeading from '@/components/section-heading';
import { MapPin, Plane, Train, Bus, Info } from 'lucide-react';

export default function HowToReachPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            centered 
            title="How to Reach" 
            subtitle="Directions and travel information for SYNERGY 2026 participants visiting the Ramaiah University of Applied Sciences, Peenya Campus." 
          />
          
          <div className="rounded-[3rem] overflow-hidden mb-12 border-4 border-primary shadow-2xl h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2642592717752!2d77.5057303754022!3d13.018836513840279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3cfb3dbaee73%3A0xb6777a4ce0b09eb5!2sRamaiah%20University%20Of%20Applied%20Sciences!5e0!3m2!1sen!2sin!4v1775999404278!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="MSRUAS Campus Map"
            ></iframe>
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
                      The nearest bus stop is <span className="font-bold text-foreground">Brundavana Peenya Bus Stop</span>. 
                      Click on the link below to get the 
                      <a href="https://nammabmtcapp.karnataka.gov.in/commuter/dashboard" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold mx-1">
                        BMTC Bus Planner
                      </a> 
                      to find your bus number and access live bus tracking.
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
