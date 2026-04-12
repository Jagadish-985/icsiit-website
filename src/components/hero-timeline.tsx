
"use client";

import { useState, useEffect } from 'react';
import { Calendar, CheckCircle2, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const timelineItems = [
  { title: "Abstracts", date: "25th April", target: new Date('2026-04-25T23:59:59') },
  { title: "Notification", date: "30th April", target: new Date('2026-04-30T23:59:59') },
  { title: "Full Paper", date: "10th May", target: new Date('2026-05-10T23:59:59') },
  { title: "Registration", date: "12th May", target: new Date('2026-05-12T23:59:59') },
  { title: "Conference", date: "13th-15th May", target: new Date('2026-05-13T09:00:00') }
];

export default function HeroTimeline() {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  if (!currentDate) {
    // Render an empty container with the same height to prevent layout shift during hydration
    return <div className="max-w-6xl mx-auto mt-20 h-[180px] hidden lg:block" />;
  }

  const getStatus = (target: Date, index: number) => {
    if (currentDate > target) return 'completed';
    // Find the first milestone that hasn't passed yet
    const nextMilestoneIndex = timelineItems.findIndex(item => currentDate <= item.target);
    if (index === nextMilestoneIndex) return 'active';
    return 'upcoming';
  };

  const completedCount = timelineItems.filter(item => currentDate > item.target).length;
  // Progress calculation for the color bar
  const progressPercent = timelineItems.length > 1 
    ? (Math.min(completedCount, timelineItems.length - 1) / (timelineItems.length - 1)) * 100 
    : 0;

  return (
    <div className="max-w-6xl mx-auto mt-20 animate-fade-in [animation-delay:1000ms]">
      {/* Desktop Timeline */}
      <div className="hidden lg:block relative pt-12">
        {/* Background Track */}
        <div className="absolute top-[68px] left-8 right-8 h-1 bg-muted rounded-full" />
        
        {/* Dynamic Progress Bar (The Live Color Bar) */}
        <div 
          className="absolute top-[68px] left-8 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full transition-all duration-1000 ease-in-out"
          style={{ width: `calc(${progressPercent}% - ${progressPercent > 0 ? '16px' : '0px'})` }}
        />
        
        <div className="flex justify-between relative">
          {timelineItems.map((item, i) => {
            const status = getStatus(item.target, i);
            return (
              <div key={i} className="flex flex-col items-center group relative px-4">
                {/* Milestone Node */}
                <div className={cn(
                  "w-14 h-14 rounded-2xl shadow-xl flex items-center justify-center mb-6 z-10 transition-all duration-500 transform group-hover:-translate-y-2",
                  status === 'completed' ? "bg-primary text-white scale-110 shadow-primary/20" : 
                  status === 'active' ? "bg-white border-2 border-secondary text-secondary animate-pulse shadow-secondary/10" : 
                  "bg-white border-2 border-muted text-muted-foreground opacity-60"
                )}>
                  {status === 'completed' ? <CheckCircle2 className="w-6 h-6" /> : <Calendar className="w-6 h-6" />}
                </div>
                {/* Info Card */}
                <div className={cn(
                  "space-y-1 p-4 rounded-2xl border shadow-sm transition-all duration-300",
                  status === 'completed' ? "bg-primary/5 border-primary/20" : 
                  status === 'active' ? "bg-white border-secondary/30 shadow-lg" : 
                  "bg-white/40 backdrop-blur-md border-white/10 opacity-50"
                )}>
                  <p className={cn(
                    "text-[10px] font-extrabold uppercase tracking-widest",
                    status === 'active' ? "text-secondary" : "text-muted-foreground"
                  )}>{item.title}</p>
                  <p className={cn(
                    "text-lg font-bold",
                    status === 'completed' ? "text-primary" : status === 'active' ? "text-foreground" : "text-muted-foreground"
                  )}>{item.date}</p>
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
              "p-4 rounded-2xl border transition-all",
              status === 'completed' ? "bg-primary/10 border-primary/20" : 
              status === 'active' ? "bg-white border-secondary shadow-md ring-1 ring-secondary/20" : 
              "bg-white/60 border-white/20 opacity-60"
            )}>
              <div className="flex items-center gap-2 mb-1">
                 {status === 'completed' ? <CheckCircle2 className="w-3 h-3 text-primary" /> : <Calendar className="w-3 h-3 text-muted-foreground" />}
                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{item.title}</p>
              </div>
              <p className={cn(
                "text-sm font-bold",
                status === 'completed' ? "text-primary" : "text-foreground"
              )}>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
