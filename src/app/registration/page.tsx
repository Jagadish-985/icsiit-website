
import SectionHeading from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { Check, ExternalLink } from 'lucide-react';

export default function RegistrationPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeading centered title="Registration Details" subtitle="Secure your spot at the International Conference on Smart and Integrated Engineering Systems." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-stretch">
            {/* Student Card */}
            <div className="p-10 pt-24 glass-card rounded-[3rem] border-primary/20 relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 right-0 p-6 bg-primary text-primary-foreground font-bold rounded-bl-3xl z-10">
                STUDENT
              </div>
              <div className="mb-4">
                <h3 className="text-3xl font-headline font-bold">₹1500</h3>
                <p className="text-sm text-primary font-medium mt-1">Per Participant</p>
              </div>
              <p className="text-muted-foreground mb-8">
                Special discounted rate for currently enrolled B.Tech, M.Tech, and Ph.D. students.
              </p>
              <ul className="space-y-4 mb-10">
                {["Access to all technical sessions", "Physical Conference kit", "Lunch & Refreshments", "Participation Certificate"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-primary text-primary-foreground py-6 text-lg mt-auto rounded-2xl">
                <a href="https://forms.office.com/r/yjydBRn5Nx" target="_blank" rel="noopener noreferrer">
                  Register as Student <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Professional Card */}
            <div className="p-10 pt-24 glass-card rounded-[3rem] border-secondary/20 relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 right-0 p-6 bg-secondary text-secondary-foreground font-bold rounded-bl-3xl z-10 whitespace-nowrap">
                FACULTY / INDUSTRY
              </div>
              <div className="mb-4">
                <h3 className="text-3xl font-headline font-bold">₹2000</h3>
                <p className="text-sm text-secondary font-medium mt-1">Per Participant</p>
              </div>
              <p className="text-muted-foreground mb-8">
                Professional rate for faculty members, industry experts, and independent researchers.
              </p>
              <ul className="space-y-4 mb-10">
                {["Full conference access", "Premium professional kit", "Networking lunch", "Presentation Certificate", "Journal publication support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground py-6 text-lg mt-auto rounded-2xl">
                <a href="https://forms.office.com/r/yjydBRn5Nx" target="_blank" rel="noopener noreferrer">
                  Register as Professional <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-16 glass-card p-12 rounded-[3rem] border-white/5">
            <h3 className="text-2xl font-headline font-bold mb-6">Payment Instructions</h3>
            <div className="space-y-6 text-muted-foreground">
              <p>1. Payments are to be made online via the link provided in the registration form.</p>
              <p>2. Ensure you have the transaction ID / receipt ready before filling out the form.</p>
              <p>3. A soft copy of the payment receipt must be uploaded in the Microsoft Forms portal.</p>
              <p>4. For group registrations (more than 5 participants), please contact the coordinator for potential discounts.</p>
              <div className="p-6 bg-muted rounded-2xl border border-white/10 mt-8">
                <p className="font-bold text-foreground mb-2">Note on Cancellation:</p>
                <p className="text-sm">Registration fees are non-refundable. However, substitution of participants from the same organization is allowed with prior notice.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
