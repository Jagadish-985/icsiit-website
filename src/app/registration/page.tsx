import SectionHeading from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { Check, ExternalLink, CreditCard, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function RegistrationPage() {
  const registrationLink = "https://ruasportal.msruas.ac.in/asd_EventPublicUserMaster.htm?eventID=174";

  return (
    <div className="pt-40 pb-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading centered title="Registration Details" subtitle="Invest in your professional growth and secure your participation at IC-SIIT 2026." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 items-stretch">
            {/* Student Card */}
            <div className="p-12 pt-28 bg-muted rounded-[4rem] border-2 border-primary/10 relative overflow-hidden group flex flex-col shadow-xl hover:shadow-2xl transition-all">
              <div className="absolute top-0 right-0 p-8 bg-primary text-white font-extrabold rounded-bl-[3rem] z-10 text-xl tracking-widest">
                STUDENT
              </div>
              <div className="mb-8">
                <h3 className="text-6xl font-headline font-extrabold text-foreground">₹1500</h3>
                <p className="text-lg text-primary font-bold mt-2 uppercase tracking-widest">Per Participant</p>
              </div>
              <p className="text-lg text-muted-foreground mb-10 font-medium">
                Exclusive rate for B.Tech, M.Tech, and Ph.D. scholars currently enrolled in recognized institutions.
              </p>
              <ul className="space-y-5 mb-12">
                {["Full access to technical sessions", "Physical Conference kit", "Networking Lunch & Refreshments", "Participation Certificate"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary font-bold" />
                    </div>
                    <span className="text-base font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-[#E34A21] text-white hover:bg-[#ce380e] py-8 text-xl font-bold mt-auto rounded-3xl shadow-xl">
                <a href={registrationLink} target="_blank" rel="noopener noreferrer">
                  Register as Student <ExternalLink className="ml-2 w-6 h-6" />
                </a>
              </Button>
            </div>

            {/* Professional Card */}
            <div className="p-12 pt-28 bg-muted rounded-[4rem] border-2 border-secondary/10 relative overflow-hidden group flex flex-col shadow-xl hover:shadow-2xl transition-all">
              <div className="absolute top-0 right-0 p-8 bg-secondary text-white font-extrabold rounded-bl-[3rem] z-10 text-xl tracking-widest">
                PROFESSIONAL
              </div>
              <div className="mb-8">
                <h3 className="text-6xl font-headline font-extrabold text-foreground">₹2000</h3>
                <p className="text-lg text-secondary font-bold mt-2 uppercase tracking-widest">Per Participant</p>
              </div>
              <p className="text-lg text-muted-foreground mb-10 font-medium">
                Professional rate for Faculty members, Industry experts, and independent researchers worldwide.
              </p>
              <ul className="space-y-5 mb-12">
                {["Priority session access", "Premium professional kit", "Executive Networking lunch", "Presentation Certificate", "Journal publication support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-secondary font-bold" />
                    </div>
                    <span className="text-base font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-[#992361] text-white hover:bg-[#811c52] py-8 text-xl font-bold mt-auto rounded-3xl shadow-xl border-none">
                <a href={registrationLink} target="_blank" rel="noopener noreferrer">
                  Register as Professional <ExternalLink className="ml-2 w-6 h-6" />
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-24 bg-[#f6f6f6] p-16 rounded-[4rem] border-2 border-border shadow-inner">
            <div className="flex items-center gap-4 mb-10">
               <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                  <CreditCard className="w-8 h-8 text-accent-foreground" />
               </div>
               <h3 className="text-4xl font-headline font-extrabold text-foreground">Payment Instructions</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8 text-lg font-medium text-muted-foreground">
                <div className="flex gap-6 items-start">
                  <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-primary flex-shrink-0 shadow-md">1</span>
                  <p>Payments must be completed online via the secure gateway linked in the registration form.</p>
                </div>
                <div className="flex gap-6 items-start">
                  <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-primary flex-shrink-0 shadow-md">2</span>
                  <p>Retain your transaction ID and digital receipt before starting the form submission.</p>
                </div>
                <div className="flex gap-6 items-start">
                  <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-primary flex-shrink-0 shadow-md">3</span>
                  <p>Upload a clear soft copy of the payment receipt in the registration portal.</p>
                </div>
              </div>
              <div className="p-10 bg-white rounded-[3rem] border border-border shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="w-8 h-8 text-secondary" />
                  <h4 className="font-extrabold text-2xl text-foreground">Group Registrations</h4>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  For groups of 5 or more participants from the same organization, attractive institutional discounts are available.
                </p>
                <Badge className="bg-accent/20 text-accent-foreground border-accent font-bold py-2 px-6 rounded-full text-base">
                  Contact: icsmart@msruas.ac.in
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
