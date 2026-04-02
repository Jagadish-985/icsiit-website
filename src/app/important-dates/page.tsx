
import SectionHeading from '@/components/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function ImportantDates() {
  const dates = [
    { title: "Abstract Submission Deadline", date: "10th April 2026", status: "Open" },
    { title: "Full Paper Submission Deadline", date: "10th May 2026", status: "Pending" },
    { title: "Registration Deadline", date: "12th May 2026", status: "Pending" },
    { title: "Notification of Acceptance", date: "15th April 2026", status: "Pending" },
    { title: "Conference Dates", date: "14th & 15th May 2026", status: "Event" }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHeading centered title="Important Dates" subtitle="Mark your calendar with these crucial milestones." />
          
          <div className="relative mt-12">
            {/* Timeline Line */}
            <div className="absolute left-[20px] top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-8">
              {dates.map((item, i) => (
                <div key={i} className="relative md:pl-12">
                  <div className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary hidden md:flex items-center justify-center z-10">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <Card className="glass-card hover:border-primary/50 transition-colors">
                    <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-bold">{item.title}</h4>
                        <p className="text-muted-foreground mt-1">Final call for this milestone</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-headline font-bold text-primary">{item.date}</div>
                        <div className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-bold uppercase mt-2">{item.status}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 p-8 bg-primary/5 border border-primary/20 rounded-3xl text-center">
            <p className="text-lg text-muted-foreground">
              Dates are subject to change. Please check this page frequently for the latest updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
