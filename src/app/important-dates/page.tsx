import SectionHeading from '@/components/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ImportantDates() {
  const dates = [
    { title: "Abstract Submission Deadline", date: "29th May 2026", status: "Open" },
    { title: "Abstract Acceptance Notification", date: "5th June 2026", status: "Upcoming" },
    { title: "Full Paper Submission Deadline", date: "15th June 2026", status: "Pending" },
    { title: "Full Paper Acceptance Notification", date: "22nd June 2026", status: "Pending" },
    { title: "Camera Ready Paper and Payment Deadline", date: "1st July 2026", status: "Pending" },
    { title: "Conference Dates", date: "15th - 17th July 2026", status: "Event", highlight: true }
  ];

  const renderDate = (dateStr: string) => {
    const parts = dateStr.split(' 2026');
    return (
      <>
        {parts[0]}
        <br />
        2026
      </>
    );
  };

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading centered title="Critical Milestones" subtitle="Mark your calendar for the major SYNERGY 2026 events." />
          
          <div className="relative mt-16">
            <div className="absolute left-[22px] top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary/20 to-primary/10 hidden md:block rounded-full" />
            
            <div className="space-y-10">
              {dates.map((item, i) => (
                <div key={i} className="relative md:pl-20">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-white border-2 border-primary hidden md:flex items-center justify-center z-10 shadow-lg group">
                    <Calendar className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <Card className={cn(
                    "rounded-[2.5rem] border-border shadow-md transition-all hover:shadow-xl",
                    item.highlight ? 'border-primary/50 bg-primary/[0.02]' : 'bg-white'
                  )}>
                    <CardContent className="p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                      <div className="flex items-center gap-4 flex-1">
                        {item.highlight && <Zap className="w-6 h-6 text-primary animate-pulse shrink-0" />}
                        <div>
                          <h4 className="text-2xl font-bold text-foreground">{item.title}</h4>
                          <p className="text-muted-foreground mt-1 text-sm font-medium">SYNERGY 2026 - IC-SIIT milestone</p>
                        </div>
                      </div>
                      <div className="text-left sm:text-right min-w-[150px]">
                        <div className={cn(
                          "text-3xl font-headline font-bold leading-tight",
                          item.highlight ? 'text-primary' : 'text-foreground'
                        )}>
                          {renderDate(item.date)}
                        </div>
                        <div className="inline-block px-4 py-1.5 bg-muted rounded-full text-xs font-bold uppercase mt-3 tracking-widest">{item.status}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 p-10 bg-primary/5 border border-primary/20 rounded-[3rem] text-center shadow-inner">
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto italic font-medium">
              Dates are subject to change based on committee decisions. Please stay tuned to this page for real-time updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
