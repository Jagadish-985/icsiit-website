import SectionHeading from '@/components/section-heading';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, User, ShieldCheck, Globe, Star, Cpu } from 'lucide-react';

export default function CommitteePage() {
  const leadership = [
    { role: "Patron", name: "Dr. M. R. Jayaram", organization: "Hon'ble Chancellor, RUAS" },
    { role: "Co-Patron", name: "Prof. Kuldeep Kumar Raina", organization: "Vice Chancellor, RUAS" },
    { role: "Co-Patron", name: "Prof. Ranganath R. V.", organization: "Provost (Engineering & Allied Sciences), RUAS" },
    { role: "Co-Patron", name: "Dean - Academics", organization: "RUAS, Bangalore" },
    { role: "General Chair", name: "Dr. Sarat Kumar Maharana", organization: "Professor & Dean - FET, RUAS" }
  ];

  const coChairs = [
    { name: "Dr. Dayananda B. S.", role: "Associate Dean - FET, RUAS" },
    { name: "Dr. Suresh", role: "HOD, MME Dept, RUAS" },
    { name: "Dr. Jayahar", role: "HOD, AAE Dept, RUAS" },
    { name: "Dr. Christy Bobby", role: "HOD, ECE Dept, RUAS" },
    { name: "Dr. C Narendra Babu", role: "HOD, CSE Dept, RUAS" },
    { name: "Dr. Harshad Parathe", role: "HOD, Civil Dept, RUAS" }
  ];

  const advisoryCommittee = [
    { name: "Dr. G. L. Samuel", institution: "Professor, Dept. of Mechanical Engineering, IITM, Chennai" },
    { name: "Dr. Narendra Nath S.", institution: "Professor, NITK - Surathkal" },
    { name: "Dr. Basavarajappa", institution: "Professor, UBDT, Davangere" },
    { name: "Dr. Mallikarjun U. S.", institution: "Professor & Head, SIT - Tumkur" }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading centered title="Conference Committees" subtitle="Visionary leadership and experts driving SYNERGY 2026." />
          
          {/* Main Leadership Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {leadership.map((leader, i) => (
              <Card key={i} className="glass-card text-center hover:border-primary/50 transition-all group overflow-hidden border-border bg-white shadow-sm rounded-3xl">
                <CardHeader className="pb-2 pt-8">
                  <Badge variant="secondary" className="w-fit mx-auto mb-2 px-4 py-1 bg-primary/10 text-primary border-primary/20">{leader.role}</Badge>
                </CardHeader>
                <CardContent className="pb-8">
                  <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/5 transition-all">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-foreground">{leader.name}</h4>
                  <p className="text-sm text-muted-foreground">{leader.organization}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Conference Co-Chairs */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-secondary/10 rounded-2xl">
                  <Star className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-3xl font-headline font-bold">Conference Co-Chairs</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coChairs.map((member, i) => (
                  <div key={i} className="p-6 bg-white rounded-3xl border border-border hover:shadow-lg hover:border-primary/20 transition-all flex flex-col gap-1">
                    <p className="font-bold text-foreground">{member.name}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{member.role}</p>
                  </div>
                ))}
              </div>

              {/* TPC & Conveners */}
              <Card className="bg-primary/[0.02] border-primary/10 rounded-[2.5rem] mt-8 p-8 overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Cpu className="w-32 h-32 text-primary" />
                </div>
                <div className="relative z-10">
                   <h4 className="font-bold text-2xl mb-6 flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                    Technical Program Chair
                  </h4>
                  <div className="space-y-4">
                    <div className="p-5 bg-white rounded-2xl border border-border shadow-sm">
                       <p className="font-bold">Dr. R. Suresh</p>
                       <p className="text-sm text-muted-foreground">HOD, Dept. of MME, RUAS</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Advisory Committee */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl font-headline font-bold">Advisory Committee</h3>
              </div>
              <div className="space-y-4">
                {advisoryCommittee.map((member, i) => (
                  <Card key={i} className="border-border hover:border-primary/30 transition-all bg-white shadow-sm rounded-3xl overflow-hidden">
                    <CardContent className="p-6 flex items-center gap-6">
                      <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center shrink-0">
                         <span className="text-primary font-bold">{i+1}</span>
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-lg">{member.name}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{member.institution}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="p-10 bg-muted/30 border border-border rounded-[2.5rem] mt-8">
                <h4 className="font-bold text-xl mb-4 flex items-center gap-3">
                  <Users className="w-6 h-6 text-secondary" />
                  Technical Committee
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "The committee consists of eminent researchers from premier institutions who ensure high-quality standards through a rigorous peer review process."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
