
import SectionHeading from '@/components/section-heading';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, User, ShieldCheck, Globe, Star, Cpu, Award, Phone, Mail, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function CommitteePage() {
  const leadership = [
    { 
      role: "Chief Patron", 
      name: "Dr. M. R. Jayaram", 
      organization: "Hon'ble Chancellor, RUAS",
      imageId: "leader-jayaram"
    },
    { 
      role: "Patron", 
      name: "Prof. Kuldeep Kumar Raina", 
      organization: "Vice Chancellor, RUAS",
      imageId: "leader-raina"
    },
    { 
      role: "Conference Chair", 
      name: "Dr. Sarat Kumar Maharana", 
      organization: "Professor & Dean - FET, RUAS",
      imageId: "leader-maharana"
    }
  ];

  const coPatrons = [
    { name: "Mr. S. Ashok Rao", role: "Registrar, RUAS" },
    { name: "Prof. Ranganath R. V.", role: "Provost (Engineering & Allied Sciences), RUAS" },
    { name: "Dr. G. S. Venkatesh", role: "Provost (Health and Allied Sciences), RUAS" },
    { name: "Dr. Indira Ramarao", role: "Provost (Social Sciences & Allied Faculties), RUAS" }
  ];

  const advisoryCommittee = [
    { name: "Dr. Dhanesh G. Mohan", role: "Programme Leader & Senior Lecturer, School of Computer Science and Engineering, University of Sunderland, UK" },
    { name: "Prof. Dileep A. D.", role: "Professor, Computer Science and Engineering (CSE), IIT Dharwad" },
    { name: "Mr. Srihari Raghavendra Rao", role: "Senior Data Scientist, Light Horse Therapeutics, San Diego, California, United States" },
    { name: "Prof. Bidyadhar Subudhi", role: "Member Director, NIT Warangal" },
    { name: "Dr. G.L. Samuel", role: "Professor, Dept. of Mechanical Engineering (Manuf. Division), IITM, Chennai, TN" },
    { name: "Mr. Touseef Khan", role: "Senior Staff Engineer, Qualcomm Inc., San Diego, USA" },
    { name: "Dr. Raviraj H M", role: "Associate Professor, Department of Civil Engineering, NITK, Surathkal" },
    { name: "Dr. Bharath Srinivasan", role: "Dean, Faculty of Pharmacy, MSRUAS" },
    { name: "Dr. Sonali Tarachand Jadhav", role: "Dean, MS Ramaiah Institute of Nursing Education and Research" },
    { name: "Dr. Kavitha Prasad", role: "Dean, Faculty of Dental Sciences, MSRUAS" },
    { name: "Dr. Soma Chaki", role: "Dean, Faculty of Life and Allied Health Sciences, MSRUAS" },
    { name: "Dr. Shalini Nooyi", role: "Dean, Ramaiah Medical College, MSRUAS" },
    { name: "Dr. K M Sharath Kumar", role: "Dean, Faculty of Management and Commerce, MSRUAS" },
    { name: "Dr. Hemanth Thapsey", role: "Associate Dean (Administration), Joint Registrar and Director - Admissions (Health Sciences), RUAS" },
    { name: "Dr. Nanda Kumar BS", role: "Head- Research & Intellectual Property Rights, RUAS" },
    { name: "Dr. Tapasi Ghosh", role: "HoD, Data Sciences And Analytics, School of Social Sciences" },
    { name: "Shri. Gurucharan Gollerkeri", role: "Director — School of Social Sciences & School of Law" }
  ];

  const organizingCommittee = [
    { name: "Dr. Dayananda. B. S.", role: "Associate Dean Academics- RTC, RUAS" },
    { name: "Dr. Nayana P Patil", role: "Associate Dean Student Wellbeing - RTC, RUAS" },
    { name: "Dr. Rinki Sharma", role: "Associate Dean CADAR – RTC, RUAS" },
    { name: "Dr. Suresh R", role: "HOD, MME, RUAS" },
    { name: "Dr. C. Narendra Babu", role: "HOD, CSE, RUAS" },
    { name: "Dr. Mahesh K Varpe", role: "HOD, AAE, RUAS" },
    { name: "Dr. T. Christy Bobby", role: "HOD, ECE, RUAS" },
    { name: "Dr. Harshad Rameshwar Parate", role: "HOD, Civil, RUAS" },
    { name: "Dr. Sulake Nagaraja Rao", role: "HOD, EEE, RUAS" }
  ];

  const conveners = [
    {
      name: "Dr. Jyothi A P",
      role: "Associate Professor and Head, Mathematics and Computing Program, Department of Computer Science and Engineering, RUAS",
      phone: "+91 9686311475",
      email: "jyothi.cs.et@msruas.ac.in"
    },
    {
      name: "Dr. Ananth S. Iyengar",
      role: "Assistant Professor, Dept. of Mechanical and Manufacturing Engineering, RUAS",
      phone: "+91 9480343844",
      email: "ananth.me.et@msruas.ac.in"
    }
  ];

  const technicalProgramCommittee = [
    { name: "Dr. Narendra Nath S.", institution: "Professor, NITK - Surathkal" },
    { name: "Dr. Basavarajappa", institution: "Professor, UBDT, Davangere" },
    { name: "Mr. Charles Chow", institution: "Singapore Management University, Singapore" },
    { name: "Dr. Mallikarjun. U. S.", institution: "Professor and Head, Mechanical Engineering Department, SIT – Tumkur" },
    { name: "Dr. Dakshitha Anandakumar", institution: "Applied Scientist, Microsoft, Redmond, Seattle, USA" },
    { name: "Dr. Salunkhe Sachin", institution: "Professor, Mechanical Engineering Department, Gazi University, Turkiye" },
    { name: "Dr Vijaykumar S Jatti", institution: "Professor, Mechanical Engineering Department, Bennett University, UP" },
    { name: "Prof. D. Nagesh Kumar", institution: "Professor, Department of Civil Engineering, IISc, Bengaluru" },
    { name: "Ms. Shweta Shete", institution: "Senior Industrial Controls Engineer at Symbotic LLC, San Diego, California, United States" },
    { name: "Mr. Sajal Mittal", institution: "Associate Director, Samsung Semiconductor, Bengaluru" }
  ];

  const coordinators = [
    { name: "Dr. Suresh R" },
    { name: "Dr. Christy Bobby" },
    { name: "Dr. Narendra Babu C" },
    { name: "Dr. Mahesh Varpe" },
    { name: "Dr. Nagaraj Rao" },
    { name: "Dr. Harshad Rameshwar" }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading centered title="Conference Committees" subtitle="Visionary leadership and global experts driving SYNERGY 2026." />
          
          {/* Patrons & Conference Chair */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {leadership.map((leader, i) => {
              const imageInfo = PlaceHolderImages.find(img => img.id === leader.imageId);
              return (
                <div key={i} className="text-center group p-8 transition-all">
                  <Badge variant="secondary" className="w-fit mx-auto mb-6 px-4 py-1 bg-primary/10 text-primary border-primary/20">{leader.role}</Badge>
                  <div className="relative w-56 h-56 mx-auto mb-6 group-hover:scale-105 transition-transform">
                    <div className="absolute inset-0 bg-primary/5 rounded-[2rem] transform rotate-3 group-hover:rotate-6 transition-transform" />
                    <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl bg-muted/10">
                      {imageInfo ? (
                        <Image 
                          src={imageInfo.imageUrl} 
                          alt={leader.name} 
                          fill 
                          className="object-cover object-top" 
                          data-ai-hint={imageInfo.imageHint}
                        />
                      ) : (
                        <div className="flex items-center justify-center w-full h-full">
                          <User className="w-20 h-20 text-primary/20" />
                        </div>
                      )}
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold mb-2 text-foreground">{leader.name}</h4>
                  <p className="text-sm text-muted-foreground font-medium">{leader.organization}</p>
                </div>
              );
            })}
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
                  <p className="text-xs text-muted-foreground font-semibold">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Advisory Committee */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-indigo-50 rounded-2xl">
                <GraduationCap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-3xl font-headline font-bold">Advisory Committee</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advisoryCommittee.map((member, i) => (
                <Card key={i} className="border-border hover:border-indigo-300 transition-all bg-white shadow-sm rounded-3xl overflow-hidden">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg text-foreground mb-1">{member.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.role}</p>
                  </CardContent>
                </Card>
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

          {/* Organizing Committee */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-headline font-bold">Organizing Committee</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {organizingCommittee.map((member, i) => (
                <div key={i} className="p-6 bg-white rounded-3xl border border-border hover:shadow-lg hover:border-primary/20 transition-all flex flex-col gap-1">
                  <p className="font-bold text-foreground leading-tight">{member.name}</p>
                  <p className="text-xs text-muted-foreground font-semibold">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Program Committee */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-secondary/10 rounded-2xl">
                <Globe className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-3xl font-headline font-bold">Technical Program Committee</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalProgramCommittee.map((member, i) => (
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
          </div>

          {/* Co-ordinators Section */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-headline font-bold">Co-ordinators</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coordinators.map((member, i) => (
                <Card key={i} className="border-border hover:border-primary/30 transition-all bg-white shadow-sm rounded-3xl overflow-hidden">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center shrink-0">
                       <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-lg leading-tight">{member.name}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
