
import SectionHeading from '@/components/section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, User, ShieldCheck, Globe } from 'lucide-react';

export default function CommitteePage() {
  const leadership = [
    { role: "Chief Patron", name: "Hon'ble Vice Chancellor", organization: "RUAS, Bangalore" },
    { role: "Patron", name: "The Registrar", organization: "RUAS, Bangalore" },
    { role: "Patron", name: "Dean - FET", organization: "RUAS, Bangalore" },
    { role: "General Chair", name: "Dr. [Name]", organization: "Head, Dept. of Mechanical Engineering, RUAS" },
    { role: "Conference Chair", name: "Dr. [Name]", organization: "Professor, RUAS" }
  ];

  const advisoryCommittee = [
    { name: "Dr. Robert Smith", institution: "University of Cambridge, UK" },
    { name: "Dr. Sarah Johnson", institution: "MIT, USA" },
    { name: "Prof. Akira Tanaka", institution: "University of Tokyo, Japan" },
    { name: "Dr. Rajesh Kumar", institution: "IISc Bangalore, India" },
    { name: "Prof. Elena Rossi", institution: "Politecnico di Milano, Italy" },
    { name: "Dr. Michael Chen", institution: "National University of Singapore" },
    { name: "Prof. David Williams", institution: "Stanford University, USA" },
    { name: "Dr. Ananya Rao", institution: "IIT Madras, India" }
  ];

  const organizingCommittee = [
    "Dr. [Name] - Organizing Secretary",
    "Prof. [Name] - Joint Secretary",
    "Dr. [Name] - Technical Chair",
    "Prof. [Name] - Finance Chair",
    "Dr. [Name] - Publication Chair",
    "Prof. [Name] - Publicity Chair",
    "Dr. [Name] - Hospitality Chair"
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading centered title="Conference Committees" subtitle="The distinguished experts steering IC-SMART 2026." />
          
          {/* Leadership Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {leadership.map((leader, i) => (
              <Card key={i} className="glass-card text-center">
                <CardHeader className="pb-2">
                  <Badge variant="secondary" className="w-fit mx-auto mb-2">{leader.role}</Badge>
                </CardHeader>
                <CardContent>
                  <User className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-1">{leader.name}</h4>
                  <p className="text-sm text-muted-foreground">{leader.organization}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Advisory Committee */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-headline font-bold">International Advisory Committee</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {advisoryCommittee.map((member, i) => (
                  <div key={i} className="p-4 glass-card rounded-xl border-l-2 border-primary/50">
                    <p className="font-bold text-sm">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Organizing Committee */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-8 h-8 text-secondary" />
                <h3 className="text-2xl font-headline font-bold">Organizing Committee</h3>
              </div>
              <Card className="glass-card">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {organizingCommittee.map((member, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        <span className="text-sm">{member}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="p-8 glass-card rounded-3xl bg-primary/5 border-primary/20 mt-8">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Technical Program Committee
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Consists of eminent researchers and professors from premier institutions across the globe who participate 
                  in the double-blind peer review process to ensure high-quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
