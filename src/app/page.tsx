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
  Globe,
  ArrowRight,
  Calendar,
  ZapIcon
} from 'lucide-react';
import CountdownTimer from '@/components/countdown-timer';
import SectionHeading from '@/components/section-heading';
import { cn } from '@/lib/utils';
import HeroBackground from '@/components/hero-background';
import HeroTimeline from '@/components/hero-timeline';
import PartnerLogos from '@/components/partner-logos';

export default function Home() {
  const registrationLink = "https://ruasportal.msruas.ac.in/asd_EventPublicUserMaster.htm?eventID=174";

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-48 overflow-hidden">
        <HeroBackground />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold mb-8 tracking-tighter animate-fade-in text-foreground leading-[1]">
            SYNERGY 2026 <br />
            <span className="text-gradient text-3xl md:text-5xl lg:text-6xl block mt-4 font-bold">
              International Conference on Smart, Intelligent and Innovative Technologies
            </span>
            <span className="text-gradient block mt-4 text-2xl md:text-4xl lg:text-5xl font-bold tracking-[0.4em] uppercase">
              (IC-SIIT)
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-5xl mx-auto animate-fade-in [animation-delay:200ms] leading-relaxed font-medium">
            <span className="text-foreground">across</span> <br />
            <span className="text-secondary font-bold">
              Aerospace Engineering, Automotive Engineering, Civil Engineering, Computer Science Engineering, Electrical and Electronics Engineering, Electronics and Communication Engineering and Mechanical Engineering
            </span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 animate-fade-in [animation-delay:400ms]">
            <div className="flex items-center gap-3 bg-white px-8 py-5 rounded-3xl border border-primary/10 shadow-xl">
              <Zap className="w-6 h-6 text-primary" />
              <span className="font-bold text-foreground text-lg md:text-xl">13th - 15th May 2026</span>
            </div>
          </div>

          <div className="mb-20 animate-fade-in [animation-delay:600ms]">
            <CountdownTimer />
          </div>

          <div className="flex flex-wrap justify-center gap-6 animate-fade-in [animation-delay:800ms] mb-12">
            <Button asChild size="lg" className="bg-[#E34A21] text-white hover:bg-[#ce380e] transition-all rounded-full px-16 h-20 text-xl font-bold shadow-[0_20px_50px_rgba(227,74,33,0.3)] border-none">
              <a href={registrationLink} target="_blank" rel="noopener noreferrer">
                Register Now <ArrowRight className="ml-2 w-6 h-6" />
              </a>
            </Button>
          </div>

          {/* Live Horizontal Timeline */}
          <HeroTimeline />

          {/* Partner Logos */}
          <PartnerLogos />
        </div>
      </section>

      {/* Thrust Areas Section */}
      <section className="py-32 bg-white relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4">
          <SectionHeading 
            centered 
            title="Thrust Areas" 
            subtitle="Explore innovations across integrated engineering domains at the heart of SYNERGY 2026."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Aerospace Engineering', icon: Rocket, color: 'bg-[#E34A21]', desc: 'UAVs, Satellite Systems and Aerodynamics.' },
              { title: 'Automotive Engineering', icon: Truck, color: 'bg-[#992361]', desc: 'EV Technology, Smart Mobility and Autonomous Vehicles.' },
              { title: 'Civil Engineering', icon: Building, color: 'bg-green-600', desc: 'Smart Cities, Sustainable Infrastructure and Monitoring.' },
              { title: 'Computer Science Engineering', icon: Monitor, color: 'bg-blue-500', desc: 'AI, Machine Learning, Data Analytics and Intelligent Systems.' },
              { title: 'Electrical & Electronics Engineering', icon: Zap, color: 'bg-yellow-600', desc: 'Power Systems, Renewable Energy and Smart Grids.' },
              { title: 'Electronics & Communication Engineering', icon: Cpu, color: 'bg-secondary', desc: 'IoT, VLSI, Sensors and Communication Networks.' },
              { title: 'Mechanical Engineering', icon: Settings, color: 'bg-primary', desc: 'Additive Manufacturing, Smart Materials and Robotics.' }
            ].map((area, i) => (
              <Card key={area.title} className="hover:border-primary/50 transition-all duration-500 group border-border shadow-lg rounded-[2.5rem] overflow-hidden bg-white border-2 hover:-translate-y-2">
                <CardContent className="pt-10 pb-10 flex flex-col items-center text-center">
                  <div className={cn("p-6 rounded-3xl mb-8 group-hover:rotate-12 transition-all shadow-lg text-white", area.color)}>
                    <area.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-headline font-bold mb-4 text-foreground">{area.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed px-6">{area.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publication & Indexing */}
      <section className="py-32 bg-[#f6f6f6] overflow-hidden relative">
         <div className="absolute -left-20 bottom-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <SectionHeading 
                title="Publication & Indexing" 
                subtitle="All selected and presented papers will be indexed and published in reputed international journals with full DOI support."
              />
              <div className="space-y-8">
                <div className="flex gap-6 p-10 bg-white rounded-[3rem] shadow-2xl border border-primary/10 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform">
                    <BookOpen className="w-24 h-24 text-primary" />
                  </div>
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <BookOpen className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-3xl mb-3 text-foreground leading-tight">Journal Support</h4>
                    <p className="text-muted-foreground text-lg mb-6 font-medium">Full metadata indexing in international databases.</p>
                    <div className="flex flex-wrap gap-3">
                      <Badge className="bg-secondary text-white border-none px-4 py-1.5 rounded-full font-bold">Peer Reviewed</Badge>
                      <Badge className="bg-accent text-accent-foreground border-none px-4 py-1.5 rounded-full font-bold">Open Access</Badge>
                      <Badge className="bg-primary text-white border-none px-4 py-1.5 rounded-full font-bold">Indexed</Badge>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "Double-blind peer review",
                    "Assistance in DOI generation",
                    "International networking",
                    "Expert technical sessions"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-border shadow-sm">
                      <CheckCircle2 className="w-6 h-6 text-secondary" />
                      <span className="text-base font-bold text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl group">
              <Image 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                alt="Technology Visual" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                data-ai-hint="robotics lab"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="p-16 md:p-32 bg-secondary/5 rounded-[5rem] text-center border-secondary/20 border-2 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-[-100px] right-[-100px] p-8 opacity-5 group-hover:rotate-45 transition-transform duration-1000">
              <Zap className="w-[600px] h={600} text-secondary" />
            </div>
            <h2 className="text-4xl md:text-7xl font-headline font-extrabold mb-10 text-foreground leading-[1.1]">
              Shape the Future at <br /> <span className="text-primary">SYNERGY 2026</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
              Join a global community of innovators, researchers, and industry leaders in Bangalore.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <Button asChild size="lg" className="bg-[#E34A21] text-white hover:bg-[#ce380e] transition-all px-16 h-20 text-2xl font-bold rounded-full shadow-2xl border-none">
                <a href={registrationLink} target="_blank" rel="noopener noreferrer">Register Now</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-foreground h-20 px-16 text-2xl font-bold rounded-full border-secondary/20 bg-white shadow-xl hover:bg-muted">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
