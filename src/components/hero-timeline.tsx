
"use client";

import { useState, useEffect } from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const timelineItems = [
  { title: "Abstract Submission", date: "25th April 2026", target: new Date('2026-04-25T23:59:59') },
  { title: "Acceptance Notification", date: "30th April 2026", target: new Date('2026-04-30T23:59:59') },
  { title: "Full Paper Submission", date: "10th May 2026", target: new Date('2026-05-10T23:59:59') },
  { title: "Registration", date: "12th May 2026", target: new Date('2026-05-12T23:59:59') },
  { title: "Conference", date: "13th-15th May 2026", target: new Date('2026-05-13T09:00:00') }
];

export default function HeroTimeline() {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  if (!currentDate) {
    return <div className="max-w-6xl mx-auto mt-20 h-[180px] hidden lg:block" />;
  }

  const getStatus = (target: Date, index: number) => {
    if (currentDate > target) return 'completed';
    const nextMilestoneIndex = timelineItems.findIndex(item => currentDate <= item.target);
    if (index === nextMilestoneIndex) return 'active';
    return 'upcoming';
  };

  const completedCount = timelineItems.filter(item => currentDate > item.target).length;
  const progressPercent = timelineItems.length > 1 
    ? (Math.min(completedCount, timelineItems.length - 1) / (timelineItems.length - 1)) * 100 
    : 0;

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
    <div className="max-w-6xl mx-auto mt-20 animate-fade-in [animation-delay:1000ms]">
      {/* Desktop Timeline */}
      <div className="hidden lg:block relative pt-12">
        {/* Progress Track Wrapper */}
        <div className="absolute top-[76px] left-[28px] right-[28px] h-1 z-0">
          <div className="absolute inset-0 bg-white/20 rounded-full" />
          <div 
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-secondary to-primary rounded-full transition-all duration-1000 ease-in-out shadow-[0_0_10px_rgba(227,74,33,0.5)]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        
        <div className="flex justify-between relative z-10 items-start">
          {timelineItems.map((item, i) => {
            const status = getStatus(item.target, i);
            return (
              <div key={i} className="flex flex-col items-center group relative px-2 flex-1 max-w-[200px]">
                {/* Milestone Node */}
                <div className={cn(
                  "w-14 h-14 rounded-2xl shadow-2xl flex items-center justify-center mb-6 z-10 transition-all duration-500 transform group-hover:-translate-y-2 border-2",
                  status === 'completed' ? "bg-primary border-primary text-white scale-110 shadow-primary/40" : 
                  status === 'active' ? "bg-white border-secondary text-secondary animate-pulse shadow-secondary/20" : 
                  "bg-white/90 border-muted text-muted-foreground shadow-black/5"
                )}>
                  {status === 'completed' ? <CheckCircle2 className="w-6 h-6" /> : <Calendar className="w-6 h-6" />}
                </div>
                {/* Info Card - Added fixed min-height and centering for consistent shape */}
                <div className={cn(
                  "space-y-1 p-4 rounded-2xl border shadow-xl transition-all duration-300 w-full text-center backdrop-blur-sm min-h-[110px] flex flex-col justify-center",
                  status === 'completed' ? "bg-white border-primary/30" : 
                  status === 'active' ? "bg-white border-secondary shadow-secondary/10" : 
                  "bg-white/90 border-muted"
                )}>
                  <p className={cn(
                    "text-[10px] font-extrabold uppercase tracking-widest mb-1",
                    status === 'active' ? "text-secondary" : "text-muted-foreground"
                  )}>{item.title}</p>
                  <p className={cn(
                    "text-lg font-bold leading-tight",
                    status === 'completed' ? "text-primary" : status === 'active' ? "text-foreground" : "text-muted-foreground"
                  )}>{renderDate(item.date)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Grid Timeline */}
      <div className="lg:hidden grid grid-cols-2 gap-4">
        {timelineItems.map((item, i) => {
          const status = getStatus(item.target, i);
          return (
            <div key={i} className={cn(
              "p-4 rounded-2xl border transition-all backdrop-blur-sm min-h-[80px] flex flex-col justify-center",
              status === 'completed' ? "bg-white border-primary shadow-md" : 
              status === 'active' ? "bg-white border-secondary shadow-lg ring-2 ring-secondary/20" : 
              "bg-white/90 border-muted"
            )}>
              <div className="flex items-center gap-2 mb-1">
                 {status === 'completed' ? <CheckCircle2 className="w-3 h-3 text-primary" /> : <Calendar className="w-3 h-3 text-muted-foreground" />}
                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{item.title}</p>
              </div>
              <p className={cn(
                "text-sm font-bold leading-tight",
                status === 'completed' ? "text-primary" : "text-foreground"
              )}>{renderDate(item.date)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
