
import SectionHeading from '@/components/section-heading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Users, BookOpen, Globe } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 border-primary text-primary">About IC-SMART 2026</Badge>
          <SectionHeading 
            title="International Conference on Smart and Integrated Engineering Systems" 
            fullWidthLine={true}
          />
          
          <div className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed mb-16">
            <p>
              IC-SMART 2026 is a flagship international conference aimed at bringing together researchers, 
              scientists, engineers, and scholars to exchange and share their experiences, new ideas, 
              and research results in all aspects of Smart and Integrated Engineering Systems.
            </p>
            <p className="mt-4">
              The conference focuses on bridging the gap between theoretical research and practical applications 
              in futuristic engineering domains including Aerospace, Robotics, Artificial Intelligence, 
              and Advanced Manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="glass-card">
              <CardContent className="p-8">
                <Building className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-headline font-bold mb-4">Organizer</h3>
                <p className="text-muted-foreground">
                  The event is organized by the <span className="text-foreground font-semibold">Department of Mechanical Engineering</span> 
                  at Ramaiah University of Applied Sciences (RUAS), Bangalore. RUAS is known for its academic excellence 
                  and research-driven approach to technical education.
                </p>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-8">
                <Users className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-headline font-bold mb-4">Target Audience</h3>
                <p className="text-muted-foreground">
                  We welcome contributions from Faculty members, Ph.D. scholars, M.Tech and B.Tech students 
                  from engineering colleges across the globe. Industry professionals are also encouraged to participate 
                  and share practical insights.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-16 border border-white/10">
            <Image 
              src="https://images.unsplash.com/photo-1540575861501-7ad05823c9f5?q=80&w=2070&auto=format&fit=crop" 
              alt="Conference Audience" 
              fill 
              className="object-cover"
              data-ai-hint="conference audience"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </div>

          <SectionHeading 
            title="Conference Benefits" 
            fullWidthLine={true}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Global Recognition', icon: Globe, desc: 'Present your work to an international audience and gain global exposure.' },
              { title: 'Networking', icon: Users, desc: 'Interact with leading experts and peer researchers in your field.' },
              { title: 'Publications', icon: BookOpen, desc: 'Chance to publish in indexed international journals with DOI.' },
              { title: 'Certification', icon: Badge, desc: 'All participants and presenters will receive official certificates from RUAS.' }
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4 p-6 glass-card rounded-2xl">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
