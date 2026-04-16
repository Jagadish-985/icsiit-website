import SectionHeading from '@/components/section-heading';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, User, ShieldCheck, Globe, Star, Cpu, Award, Phone, Mail } from 'lucide-react';

export default function CommitteePage() {
  const leadership = [
    { role: "Patron", name: "Dr. M. R. Jayaram", organization: "Hon'ble Chancellor, RUAS" },
    { role: "Patron", name: "Prof. Kuldeep Kumar Raina", organization: "Vice Chancellor, RUAS" },
    { role: "General Chair", name: "Dr. Sarat Kumar Maharana", organization: "Professor & Dean - FET, RUAS" }
  ];

  const coPatrons = [
    { name: "Mr. S. Ashok Rao", role: "Registrar, RUAS" },
    { name: "Prof. Ranganath R. V.", role: "Provost (Engineering & Allied Sciences), RUAS" },
    { name: "Dr. G. S. Venkatesh", role: "Provost (Health and Allied Sciences), RUAS" },
    { name: "Dr. Indira Ramarao", role: "Provost (Social Sciences & Allied Faculties), RUAS" }
  ];

  const organizingCommittee = [
    { name: "Dr. Dayananda. B. S.", role: "Associate Dean - RTC, RUAS" },
    { name: "Dr. Nayana P Patil", role: "Associate Dean, Student Wellbeing - RTC, RUAS" },
    { name: "Dr. Rinki Sharma", role: "Associate Dean, CADAR - RTC, RUAS" },
    { name: "Dr. Suresh R", role: "HOD, MME, RUAS" },
    { name: "Dr. Mahesh K Varpe", role: "HOD, AAE, RUAS" },
    { name: "Dr. T. Christy Bobby", role: "HOD, ECE, RUAS" },
    { name: "Dr. Narendra Babu Chindanur", role: "HOD, CSE, RUAS" },
    { name: "Dr. Harshad Rameshwar Parate", role: "HOD, Civil, RUAS" },
    { name: "Dr. Sulake Nagaraja Rao", role: "HOD, EEE, RUAS" }
  ];

  const conveners = [
    {
      name: "Dr. Jyothi A P",
      role: "Associate Professor and Head, Mathematics and Computing Program, Department of Computer Science and Engineering, RUAS",
      phone: "9686311475",
      email: "Jyothi.cs.et@msruas.ac.in"
    },
    {
      name: "Dr. Ananth S. Iyengar",
      role: "Assistant Professor, Dept. of Mechanical and Manufacturing Engineering, RUAS",
      phone: "9480343844",
      email: "ananth.me.et@msruas.ac.in"
    }
  ];

  const advisoryCommittee = [
    { name: "Dr. Dhanesh G. Mohan", institution: "Programme Leader, Senior Lecturer, University of Sunderland, UK" },
    { name: "Mr. Charles Chow", institution: "Singapore Management University, Singapore" },
    { name: "Dr. Salunkhe Sachin", institution: "Professor, Gazi University, Turkiye" },
    { name: "Prof Dileep A. D.", institution: "Professor, IIT Dharwad" },
    { name: "Prof. Bidyadhar Subudhi", institution: "Member Director, NIT Warangal" },
    { name: "Dr. G. L. Samuel", institution: "Professor, IITM, Chennai" },
    { name: "Dr. Narendra Nath S.", institution: "Professor, NITK - Surathkal" },
    { name: "Dr. Basavarajappa", institution: "Professor, UBDT, Davangere" },
    { name: "Dr. Mallikarjun U. S.", institution: "Professor & Head, SIT - Tumkur" },
    { name: "Dr Vijaykumar S Jatti", institution: "Professor, Bennett University, UP" }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading centered title="Conference Committees" subtitle="Visionary leadership and global experts driving SYNERGY 2026." />
          
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

          {/* Co-Patrons Section */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
              <div className="p-3 bg-secondary/10 rounded-2xl">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-3xl font-headline font-bold">Co-Patrons</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coPatrons.map((member, i) => (
                <div key={i} className="p-6 bg-white rounded-3xl border border-border hover:shadow-lg hover:border-secondary/20 transition-all flex flex-col gap-2">
                  <p className="font-bold text-foreground leading-tight">{member.name}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Conveners Section */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-headline font-bold">Conveners</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {conveners.map((convener, i) => (
                <Card key={i} className="glass-card border-border bg-white shadow-sm rounded-3xl overflow-hidden hover:border-primary/30 transition-all">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-bold mb-2 text-foreground">{convener.name}</h4>
                    <p className="text-sm text-muted-foreground font-medium mb-6 leading-relaxed">
                      {convener.role}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="w-4 h-4 text-primary" />
                        <a href={`tel:${convener.phone}`} className="hover:text-primary transition-colors font-bold">{convener.phone}</a>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="w-4 h-4 text-primary" />
                        <a href={`mailto:${convener.email}`} className="hover:text-primary transition-colors font-bold break-all">{convener.email}</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Organizing Committee */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl font-headline font-bold">Organizing Committee</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {organizingCommittee.map((member, i) => (
                  <div key={i} className="p-6 bg-white rounded-3xl border border-border hover:shadow-lg hover:border-primary/20 transition-all flex flex-col gap-1">
                    <p className="font-bold text-foreground leading-tight">{member.name}</p>
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
                       <p className="font-bold text-lg">Dr. Suresh R</p>
                       <p className="text-sm text-muted-foreground font-semibold">HOD, Dept. of MME, RUAS</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Advisory Committee */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-secondary/10 rounded-2xl">
                  <Globe className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-3xl font-headline font-bold">Advisory Committee</h3>
              </div>
              <div className="space-y-4">
                {advisoryCommittee.map((member, i) => (
                  <Card key={i} className="border-border hover:border-secondary/30 transition-all bg-white shadow-sm rounded-3xl overflow-hidden">
                    <CardContent className="p-6 flex items-center gap-6">
                      <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center shrink-0">
                         <span className="text-primary font-bold text-sm">{i+1}</span>
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-lg leading-tight">{member.name}</p>
                        <p className="text-xs font-semibold text-muted-foreground leading-relaxed mt-1">{member.institution}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="p-10 bg-muted/30 border border-border rounded-[2.5rem] mt-8">
                <h4 className="font-bold text-xl mb-4 flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
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
