import SectionHeading from '@/components/section-heading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Users, BookOpen, Globe, Lightbulb, Zap } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-1 font-semibold">SYNERGY 2026 - IC-SIIT</Badge>
          <SectionHeading 
            title="Need for SYNERGY 2026" 
          />
          
          <div className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed mb-16 space-y-6 text-justify">
            <p>
              The rapid convergence of engineering disciplines is reshaping the way we design, build, and sustain the systems that power modern society. In this context, the International Conference on Smart, Intelligent and Innovative Technologies (IC-SIIT) serves as a dynamic platform to explore the transformative potential of interdisciplinary innovation.
            </p>
            <p>
              Bringing together researchers, academicians, industry experts, and practitioners, the conference aims to foster collaboration across the domains of mechanical, aerospace, automotive, electronics, communication, and civil engineering.
            </p>
            <p>
              SYNERGY 2026 is focussed on projects involving intelligent sensing, advanced materials, automation, connectivity, and data-driven decision-making seamlessly interact. From autonomous vehicles and sustainable infrastructure to smart cities and aerospace advancements, the integration of diverse engineering fields is enabling enhanced levels of efficiency, safety, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <Card className="bg-white rounded-[2.5rem] border-border shadow-lg overflow-hidden group hover:border-primary/30 transition-all">
              <CardContent className="p-10">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <Building className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">Organizer</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  The event is organized by the <span className="text-foreground font-semibold">Faculty of Engineering and Technology (FET)</span> at Ramaiah University of Applied Sciences (RUAS), Bangalore. We focus on bridging traditional boundaries to encourage holistic and scalable solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-[2.5rem] border-border shadow-lg overflow-hidden group hover:border-secondary/30 transition-all">
              <CardContent className="p-10">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">Target Audience</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  We welcome contributions from researchers, academicians, and industry practitioners worldwide. 
                  The conference serves as a dynamic platform to share share experiences and Share research results 
                  across futuristic engineering domains.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden mb-20 border border-border shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1540575861501-7ad05823c9f5?q=80&w=2070&auto=format&fit=crop" 
              alt="SYNERGY Conference" 
              fill 
              className="object-cover"
              data-ai-hint="engineering conference"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          <SectionHeading 
            title="Key Benefits" 
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
            {[
              { title: 'Holistic Solutions', icon: Lightbulb, desc: 'Explore the convergence of multiple engineering disciplines for real-world impact.' },
              { title: 'Global Connectivity', icon: Globe, desc: 'Engage with a diverse network of international experts and peer researchers.' },
              { title: 'Indexed Publications', icon: BookOpen, desc: 'Opportunity to publish in reputed indexed journals with DOI support.' },
              { title: 'RUAS Recognition', icon: Zap, desc: 'Official certification and validation from a leading applied sciences university.' }
            ].map((benefit, i) => (
              <div key={i} className="flex gap-6 p-8 bg-white border border-border rounded-[2rem] shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-foreground">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <SectionHeading 
            title="University Highlights" 
          />
          <div className="relative aspect-video rounded-[3rem] overflow-hidden mb-16 border border-border shadow-2xl bg-black group">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/IQiXvmrTNcM?autoplay=1&mute=1&rel=0" 
              title="Ramaiah University Highlights" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
