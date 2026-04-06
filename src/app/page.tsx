import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Cpu, 
  Rocket, 
  Lightbulb, 
  Users, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight,
  Globe,
  Building
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
            data-ai-hint="robotics engineering"
          />
          <div className="absolute inset-0 bg-white/95" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold mb-6 tracking-tight animate-fade-in text-foreground leading-[1.1]">
            International Conference on <br />
            <span className="text-gradient">Smart & Integrated Engineering Systems</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in [animation-delay:200ms]">
            Organized by Department of Mechanical Engineering <br />
            <span className="text-primary font-bold">Ramaiah University of Applied Sciences</span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 animate-fade-in [animation-delay:400ms]">
            <div className="flex items-center gap-3 glass-card px-6 py-3 rounded-full border-primary/20 bg-white/80 shadow-sm">
              <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="font-medium text-foreground text-sm md:text-base">14th & 15th May 2026</span>
            </div>
            <div className="flex items-center gap-3 glass-card px-6 py-3 rounded-full border-primary/20 bg-white/80 shadow-sm">
              <Building className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground text-sm md:text-base">Bangalore, India</span>
            </div>
          </div>

          <div className="mb-20 animate-fade-in [animation-delay:600ms]">
            <CountdownTimer />
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in [animation-delay:800ms] mb-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:brightness-90 transition-all rounded-full px-10 h-14 text-lg shadow-lg border-none">
              <a href="https://forms.office.com/r/yjydBRn5Nx" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg border-primary/20 hover:border-primary/50 text-foreground bg-white/50 backdrop-blur-sm" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Patrons Section */}
      <section className="py-24 border-y border-border bg-muted/20 relative z-20">
        <div className="container mx-auto px-4">
          <SectionHeading centered title="Our Distinguished Patrons" subtitle="Under the guidance of visionary leadership from RUAS." className="mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <p className="text-xs uppercase text-primary font-bold mb-3 tracking-widest">Chief Patron</p>
              <p className="font-bold text-lg text-foreground">Hon'ble Vice Chancellor</p>
              <p className="text-sm text-muted-foreground">RUAS, Bangalore</p>
            </div>
            <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <p className="text-xs uppercase text-secondary font-bold mb-3 tracking-widest">Patron</p>
              <p className="font-bold text-lg text-foreground">Registrar & Dean-FET</p>
              <p className="text-sm text-muted-foreground">RUAS, Bangalore</p>
            </div>
            <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <p className="text-xs uppercase text-primary font-bold mb-3 tracking-widest">General Chair</p>
              <p className="font-bold text-lg text-foreground">Head, Dept. of Mechanical Engg.</p>
              <p className="text-sm text-muted-foreground">FET, RUAS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Thrust Areas Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            centered 
            title="Conference Thrust Areas" 
            subtitle="Exploring the frontiers of engineering across diverse and integrated fields."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Mechanical Engineering', icon: Cpu, color: 'text-primary' },
              { title: 'Aerospace Engineering', icon: Rocket, color: 'text-blue-500' },
              { title: 'Electronics Engineering', icon: Lightbulb, color: 'text-yellow-600' },
              { title: 'Civil Engineering', icon: Building, color: 'text-green-600' }
            ].map((area, i) => (
              <Card key={area.title} className="hover:border-primary/50 transition-all duration-300 group border-border shadow-sm rounded-2xl overflow-hidden">
                <CardContent className="pt-8 pb-6 flex flex-col items-center text-center">
                  <div className={cn("p-4 rounded-2xl bg-muted mb-6 group-hover:scale-110 transition-transform", area.color)}>
                    <area.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-headline font-bold mb-2 text-foreground">{area.title}</h3>
                  <p className="text-sm text-muted-foreground px-4">Integrating smart systems into modern {area.title.toLowerCase()} practices.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publication Info Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Publication Opportunities" 
                subtitle="High-quality research papers will be indexed and published in reputed journals."
              />
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-border">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-foreground">Advanced International Journal for Research</h4>
                    <p className="text-muted-foreground mb-3">E-ISSN: 3048-7641</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary-foreground border-secondary/20">Indexed with DOI</Badge>
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary-foreground border-secondary/20">Peer Reviewed</Badge>
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary-foreground border-secondary/20">Open Access</Badge>
                    </div>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    "Selected papers will undergo double-blind peer review",
                    "Assistance in DOI generation and metadata indexing",
                    "Opportunity to present to an international audience",
                    "Networking with industry experts and academicians"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=2070&auto=format&fit=crop" 
                alt="Research" 
                fill 
                className="object-cover"
                data-ai-hint="research study"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="p-12 md:p-20 bg-muted/10 rounded-[3rem] text-center border-primary/10 border-2 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Globe className="w-64 h-64 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6 text-foreground">Ready to present your research?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join us at IC-SMART 2026 and be part of the future of integrated engineering systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:brightness-90 transition-all px-10 h-16 text-lg rounded-full shadow-lg border-none">
                <a href="https://forms.office.com/r/yjydBRn5Nx" target="_blank" rel="noopener noreferrer">Register Now</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-foreground h-16 px-10 text-lg rounded-full border-primary/20 bg-white/50">
                <Link href="/call-for-papers">Download Templates</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
