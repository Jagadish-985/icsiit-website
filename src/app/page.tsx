
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Settings, 
  Rocket, 
  Lightbulb, 
  Users, 
  BookOpen, 
  CheckCircle2, 
  Building,
  Monitor,
  Cpu,
  Truck,
  Zap,
  Globe
} from 'lucide-react';
import CountdownTimer from '@/components/countdown-timer';
import SectionHeading from '@/components/section-heading';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg?.imageUrl || ''}
            alt="Hero Background"
            fill
            className="object-cover opacity-5"
            priority
            data-ai-hint="engineering technologies"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] opacity-[0.03]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Conference Logo Image */}
          <div className="mb-8 flex justify-center animate-fade-in">
            <Image 
              src="/abc.webp" 
              alt="SYNERGY 2026 Logo"
              width={200}
              height={200}
              className="h-32 md:h-40 w-auto object-contain"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold mb-6 tracking-tight animate-fade-in text-foreground leading-[1.1]">
            SYNERGY 2026 <br />
            <span className="text-gradient">Smart, Intelligent and Innovative Technologies</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in [animation-delay:200ms] leading-relaxed">
            Three days International Conference in the fields of <br />
            <span className="text-primary font-bold">Computer Science, Aerospace, Automotive, Mechanical, Electronics and Civil Engineering</span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 animate-fade-in [animation-delay:400ms]">
            <div className="flex items-center gap-3 glass-card px-8 py-4 rounded-2xl border-primary/10 bg-white/80 shadow-md">
              <Zap className="w-5 h-5 text-primary animate-pulse" />
              <span className="font-bold text-foreground text-base md:text-lg">13th, 14th & 15th May 2026</span>
            </div>
            <div className="flex items-center gap-3 glass-card px-8 py-4 rounded-2xl border-primary/10 bg-white/80 shadow-md">
              <Globe className="w-5 h-5 text-primary" />
              <span className="font-bold text-foreground text-base md:text-lg">MSRUAS, Bangalore</span>
            </div>
          </div>

          <div className="mb-20 animate-fade-in [animation-delay:600ms]">
            <CountdownTimer />
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in [animation-delay:800ms] mb-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:brightness-90 transition-all rounded-full px-12 h-16 text-lg shadow-xl border-none">
              <a href="https://forms.office.com/r/yjydBRn5Nx" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-12 h-16 text-lg border-primary/20 hover:border-primary/50 text-foreground bg-white/50 backdrop-blur-sm shadow-sm" asChild>
              <Link href="/about">Brochure Details</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Organizer Section */}
      <section className="py-24 border-y border-border bg-muted/20 relative z-20">
        <div className="container mx-auto px-4">
          <SectionHeading centered title="Organized By" subtitle="Faculty of Engineering and Technology, Ramaiah University of Applied Sciences." className="mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 bg-white rounded-3xl shadow-sm border border-border hover:shadow-xl hover:border-primary/30 transition-all text-center">
              <p className="text-xs uppercase text-primary font-bold mb-4 tracking-[0.2em]">Chancellor & Patron</p>
              <h4 className="font-bold text-xl text-foreground mb-1">Dr. M. R. Jayaram</h4>
              <p className="text-sm text-muted-foreground">RUAS, Bangalore</p>
            </div>
            <div className="group p-8 bg-white rounded-3xl shadow-sm border border-border hover:shadow-xl hover:border-primary/30 transition-all text-center">
              <p className="text-xs uppercase text-secondary font-bold mb-4 tracking-[0.2em]">Vice Chancellor</p>
              <h4 className="font-bold text-xl text-foreground mb-1">Prof. Kuldeep Kumar Raina</h4>
              <p className="text-sm text-muted-foreground">RUAS, Bangalore</p>
            </div>
            <div className="group p-8 bg-white rounded-3xl shadow-sm border border-border hover:shadow-xl hover:border-primary/30 transition-all text-center">
              <p className="text-xs uppercase text-primary font-bold mb-4 tracking-[0.2em]">General Chair</p>
              <h4 className="font-bold text-xl text-foreground mb-1">Dr. Sarat Kumar Maharana</h4>
              <p className="text-sm text-muted-foreground">Professor & Dean - FET, RUAS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Thrust Areas Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4">
          <SectionHeading 
            centered 
            title="Thrust Areas" 
            subtitle="Explore innovations across integrated engineering domains."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Computer Science', icon: Monitor, color: 'text-blue-500', desc: 'AI, Machine Learning, Data Analytics and Intelligent Systems.' },
              { title: 'Aerospace Engineering', icon: Rocket, color: 'text-orange-500', desc: 'UAVs, Satellite Systems and Aerodynamics.' },
              { title: 'Automotive Engineering', icon: Truck, color: 'text-red-500', desc: 'EV Technology, Smart Mobility and Autonomous Vehicles.' },
              { title: 'Mechanical & Manufacturing', icon: Settings, color: 'text-primary', desc: 'Additive Manufacturing, Smart Materials and Robotics.' },
              { title: 'Electronics & Communication', icon: Cpu, color: 'text-purple-500', desc: 'IoT, VLSI, Sensors and Integrated Circuits.' },
              { title: 'Civil Engineering', icon: Building, color: 'text-green-600', desc: 'Smart Cities, Sustainable Infrastructure and Monitoring.' }
            ].map((area, i) => (
              <Card key={area.title} className="hover:border-primary/50 transition-all duration-300 group border-border shadow-sm rounded-3xl overflow-hidden bg-white/50 backdrop-blur-sm">
                <CardContent className="pt-8 pb-8 flex flex-col items-center text-center">
                  <div className={cn("p-5 rounded-2xl bg-muted mb-6 group-hover:scale-110 group-hover:bg-primary/5 transition-all", area.color)}>
                    <area.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-headline font-bold mb-3 text-foreground">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed px-4">{area.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publication & Indexing */}
      <section className="py-24 bg-muted/30 overflow-hidden relative">
         <div className="absolute -left-20 bottom-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <SectionHeading 
                title="Publication & Indexing" 
                subtitle="All selected and presented papers will be indexed and published in reputed international journals."
              />
              <div className="space-y-6">
                <div className="flex gap-5 p-8 bg-white rounded-[2.5rem] shadow-xl border border-border relative">
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                    <BookOpen className="w-16 h-16 text-primary" />
                  </div>
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl mb-2 text-foreground leading-tight">SYNERGY Publication Support</h4>
                    <p className="text-muted-foreground mb-4">DOI Generation | Metadata Indexing | Open Access</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary-foreground border-secondary/20">Peer Reviewed</Badge>
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary-foreground border-secondary/20">Indexed</Badge>
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary-foreground border-secondary/20">International Standards</Badge>
                    </div>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Double-blind peer review",
                    "Assistance in DOI generation",
                    "International audience",
                    "Networking opportunities"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 p-4 bg-white/50 rounded-2xl border border-border">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video rounded-[3rem] overflow-hidden border border-border shadow-2xl group">
              <Image 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                alt="AI Technology" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                data-ai-hint="robotics lab"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="p-12 md:p-24 bg-primary/[0.02] rounded-[4rem] text-center border-primary/10 border-2 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-[-50px] right-[-50px] p-8 opacity-5 group-hover:rotate-12 transition-transform duration-700">
              <Globe className="w-96 h-96 text-primary" />
            </div>
            <h2 className="text-3xl md:text-6xl font-headline font-bold mb-8 text-foreground leading-tight">Be part of the SYNERGY 2026</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Join leading experts and researchers from across the globe in exploring the frontiers of intelligent technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:brightness-90 transition-all px-12 h-18 text-xl rounded-full shadow-2xl border-none">
                <a href="https://forms.office.com/r/yjydBRn5Nx" target="_blank" rel="noopener noreferrer">Register Now</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-foreground h-18 px-12 text-xl rounded-full border-primary/20 bg-white shadow-lg">
                <Link href="/contact">Inquiry Help</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
