
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
  Building,
  ShieldCheck
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
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg?.imageUrl || ''}
            alt="Hero Background"
            fill
            className="object-cover opacity-20"
            priority
            data-ai-hint="robotics engineering"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-1 text-sm animate-fade-in">
            IC-SMART 2026
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold mb-6 tracking-tight animate-fade-in [animation-delay:200ms]">
            International Conference on <br />
            <span className="text-gradient">Smart & Integrated Engineering Systems</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in [animation-delay:400ms]">
            Organized by Department of Mechanical Engineering <br />
            <span className="text-foreground font-semibold">Ramaiah University of Applied Sciences</span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 animate-fade-in [animation-delay:600ms]">
            <div className="flex items-center gap-3 glass-card px-6 py-3 rounded-full">
              <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="font-medium">14th & 15th May 2026</span>
            </div>
            <div className="flex items-center gap-3 glass-card px-6 py-3 rounded-full">
              <Building className="w-5 h-5 text-primary" />
              <span className="font-medium">Bangalore, India</span>
            </div>
          </div>

          <div className="mb-12 animate-fade-in [animation-delay:800ms]">
            <CountdownTimer />
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in [animation-delay:1000ms]">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-lg">
              <a href="https://forms.office.com/r/yjydBRn5Nx" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-lg border-primary/20 hover:border-primary/50" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Patrons Brief */}
      <section className="py-12 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-12">
            <div className="text-center max-w-[200px]">
              <p className="text-xs uppercase text-primary font-bold mb-2">Chief Patron</p>
              <p className="font-bold text-sm">Hon'ble Vice Chancellor, RUAS</p>
            </div>
            <div className="text-center max-w-[200px]">
              <p className="text-xs uppercase text-secondary font-bold mb-2">Patron</p>
              <p className="font-bold text-sm">Registrar & Dean-FET, RUAS</p>
            </div>
            <div className="text-center max-w-[200px]">
              <p className="text-xs uppercase text-primary font-bold mb-2">General Chair</p>
              <p className="font-bold text-sm">Head, Dept. of Mechanical Engg.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Thrust Areas Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading 
            centered 
            title="Conference Thrust Areas" 
            subtitle="Exploring the frontiers of engineering across diverse and integrated fields."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Mechanical Engineering', icon: Cpu, color: 'text-primary' },
              { title: 'Aerospace Engineering', icon: Rocket, color: 'text-blue-400' },
              { title: 'Electronics Engineering', icon: Lightbulb, color: 'text-yellow-400' },
              { title: 'Civil Engineering', icon: Building, color: 'text-green-400' }
            ].map((area, i) => (
              <Card key={i} className="glass-card hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="pt-8 pb-6 flex flex-col items-center text-center">
                  <div className={cn("p-4 rounded-2xl bg-muted mb-6 group-hover:scale-110 transition-transform", area.color)}>
                    <area.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-headline font-bold mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">Integrating smart systems into modern {area.title.toLowerCase()} practices.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publication Info Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Publication Opportunities" 
                subtitle="High-quality research papers will be indexed and published in reputed journals."
              />
              <div className="space-y-6">
                <div className="flex gap-4 p-6 glass-card rounded-2xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Advanced International Journal for Research</h4>
                    <p className="text-muted-foreground mb-3">E-ISSN: 3048-7641</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Indexed with DOI</Badge>
                      <Badge variant="secondary">Peer Reviewed</Badge>
                      <Badge variant="secondary">Open Access</Badge>
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
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
              <Image 
                src="https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=2070&auto=format&fit=crop" 
                alt="Research" 
                fill 
                className="object-cover"
                data-ai-hint="research study"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* Registration & Dates Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionHeading title="Registration Fees" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-8 glass-card rounded-3xl border-l-4 border-primary">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Students</p>
                  <h4 className="text-4xl font-headline font-bold">₹1500</h4>
                  <p className="text-xs text-muted-foreground mt-2">Includes conference kit and lunch</p>
                </div>
                <div className="p-8 glass-card rounded-3xl border-l-4 border-secondary">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Faculty</p>
                  <h4 className="text-4xl font-headline font-bold">₹2000</h4>
                  <p className="text-xs text-muted-foreground mt-2">Professional networking opportunities</p>
                </div>
              </div>
              <Button asChild className="mt-8 w-full py-6 text-lg" variant="default">
                 <a href="https://forms.office.com/r/yjydBRn5Nx" target="_blank" rel="noopener noreferrer">
                  Go to Registration Form <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
            <div>
              <SectionHeading title="Important Dates" />
              <div className="space-y-4">
                {[
                  { event: 'Abstract Submission', date: '10th April 2026' },
                  { event: 'Full Length Paper Submission', date: '10th May 2026' },
                  { event: 'Notification of Acceptance', date: '15th May 2026' },
                  { event: 'Conference Start Date', date: '14th May 2026' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-5 glass-card rounded-2xl">
                    <span className="font-medium">{item.event}</span>
                    <span className="text-primary font-bold">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Aims */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading centered title="Conference Aims & Objectives" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Network Building',
                desc: 'Build a strong professional network among faculty, Ph.D. scholars, M.Tech and B.Tech students.',
                icon: Users
              },
              {
                title: 'Publication Pathway',
                desc: 'Provide a robust platform for journal publication opportunities in indexed international journals.',
                icon: BookOpen
              },
              {
                title: 'Skill Development',
                desc: 'Help in capacity building, scientific communication, and professional skill enhancement.',
                icon: Lightbulb
              }
            ].map((aim, i) => (
              <div key={i} className="text-center p-8 glass-card rounded-3xl group hover:bg-primary/5 transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <aim.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-headline font-bold mb-4">{aim.title}</h3>
                <p className="text-muted-foreground">{aim.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizer CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="p-12 glass-card rounded-[3rem] text-center border-primary/20 border-2 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Globe className="w-64 h-64 text-primary" />
            </div>
            <h2 className="text-3xl font-headline font-bold mb-6">Ready to present your research?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join us at IC-SMART 2026 and be part of the future of integrated engineering systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground">
                <a href="https://forms.office.com/r/yjydBRn5Nx" target="_blank" rel="noopener noreferrer">Register Now</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/call-for-papers">Download Templates</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
