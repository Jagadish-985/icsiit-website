import SectionHeading from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { Check, ExternalLink, CreditCard, ShieldCheck, Info, Tag, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function RegistrationPage() {
  const registrationLink = "https://ruasportal.msruas.ac.in/asd_EventPublicUserMaster.htm?eventID=174";

  const tiers = [
    {
      name: "STUDENTS",
      price: "1500",
      color: "bg-primary",
      borderColor: "border-primary/10",
      iconColor: "text-primary",
      features: ["Full access to technical sessions", "Physical Conference kit", "Networking Lunch & Refreshments", "Participation Certificate"]
    },
    {
      name: "Faculty",
      price: "2000",
      color: "bg-secondary",
      borderColor: "border-secondary/10",
      iconColor: "text-secondary",
      features: ["Priority session access", "Premium professional kit", "Executive Networking lunch", "Presentation Certificate", "Journal publication support"]
    },
    {
      name: "Industry",
      price: "3000",
      color: "bg-[#1E293B]",
      borderColor: "border-slate-200",
      iconColor: "text-slate-900",
      features: ["VIP Networking access", "Industry-Academic bridge sessions", "Premium kit & Proceedings", "Collaboration opportunities"]
    }
  ];

  return (
    <div className="pt-40 pb-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            centered 
            title="Registration Details" 
            subtitle="Invest in your professional growth and secure your participation at IC-SIIT 2026." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 items-stretch">
            {tiers.map((tier, i) => (
              <div key={i} className={`p-8 pt-20 bg-muted rounded-[3rem] border-2 ${tier.borderColor} relative overflow-hidden group flex flex-col shadow-xl hover:shadow-2xl transition-all`}>
                <div className={`absolute top-0 right-0 p-6 ${tier.color} text-white font-extrabold rounded-bl-[2.5rem] z-10 text-lg tracking-widest uppercase text-right max-w-[80%]`}>
                  {tier.name}
                </div>
                <div className="mb-6 mt-4">
                  <h3 className="text-5xl font-headline font-extrabold text-foreground">₹{tier.price}</h3>
                  <p className={`text-sm ${tier.name === 'Industry' ? 'text-slate-600' : tier.iconColor} font-bold mt-2 uppercase tracking-widest`}>INR Per Participant</p>
                </div>
                <p className="text-sm text-muted-foreground mb-8 font-medium">
                  {tier.name} registration for the International Conference on Smart, Intelligent and Innovative Technologies.
                </p>
                <ul className="space-y-4 mb-10">
                  {tier.features.map((item, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full ${tier.name === 'Industry' ? 'bg-slate-200' : tier.color + '/10'} flex items-center justify-center flex-shrink-0`}>
                        <ConfirmCheckIcon className={`w-3 h-3 ${tier.name === 'Industry' ? 'text-slate-900' : tier.iconColor} font-bold`} />
                      </div>
                      <span className="text-sm font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className={`w-full ${tier.name === 'Industry' ? 'bg-[#1E293B]' : tier.name === 'Faculty' ? 'bg-[#992361]' : 'bg-[#E34A21]'} text-white hover:opacity-90 py-6 text-lg font-bold mt-auto rounded-2xl shadow-lg border-none`}>
                  <a href={registrationLink} target="_blank" rel="noopener noreferrer">
                    Register <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <div className="p-8 bg-primary/5 border-2 border-primary/20 rounded-[3rem] flex items-center gap-6 group hover:bg-primary/10 transition-colors">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-6 transition-transform text-white">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-extrabold text-xl text-foreground">Conference Attendees</h4>
                <p className="text-muted-foreground font-medium">Want to attend technical sessions and keynotes without presenting a paper? Participation is available at <span className="text-primary font-bold">₹200 per person</span>.</p>
              </div>
            </div>
          </div>

          <div className="mt-20 bg-[#f6f6f6] p-12 rounded-[4rem] border-2 border-border shadow-inner">
            <div className="flex items-center gap-4 mb-10">
               <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                  <CreditCard className="w-8 h-8 text-accent-foreground" />
               </div>
               <h3 className="text-4xl font-headline font-extrabold text-foreground">Payment Instructions</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8 text-lg font-medium text-muted-foreground">
                <div className="bg-primary/10 border border-primary/20 p-6 rounded-3xl flex items-start gap-4 mb-4">
                  <Info className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-primary font-bold leading-relaxed">
                    Important Note: Payment has to be done only after the full paper is accepted.
                  </p>
                </div>
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
              <div className="p-10 bg-white rounded-[3rem] border border-border shadow-xl h-fit">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="w-8 h-8 text-secondary" />
                  <h4 className="font-extrabold text-2xl text-foreground">Group Registrations</h4>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  For groups of 5 or more participants from the same organization, attractive institutional discounts are available.
                </p>
                <Badge className="bg-accent/20 text-accent-foreground border-accent font-bold py-2 px-6 rounded-full text-base">
                  Contact: icsiit@msruas.ac.in
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConfirmCheckIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
