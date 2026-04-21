"use client";

import { useState, useEffect } from 'react';

const TARGET_DATE = new Date('2026-05-13T09:00:00');

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = TARGET_DATE.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center p-4 md:p-8 glass-card rounded-3xl min-w-[120px] md:min-w-[140px] border-border bg-white shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all group w-full">
      <span className="text-4xl md:text-6xl font-headline font-bold text-primary tabular-nums group-hover:scale-110 transition-transform">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mt-2">
        {label}
      </span>
    </div>
  );

  return (
    <div className="grid grid-cols-2 md:flex gap-3 md:gap-6 justify-center items-center max-w-[320px] md:max-w-none mx-auto">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <TimeUnit value={timeLeft.seconds} label="Secs" />
    </div>
  );
}
