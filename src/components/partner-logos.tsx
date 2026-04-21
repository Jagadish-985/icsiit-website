
"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function PartnerLogos() {
  const logos = PlaceHolderImages.filter(img => img.id.startsWith('partner-'));

  return (
    <div className="mt-16 animate-fade-in [animation-delay:1200ms]">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground/60 mb-8 text-center">
        Our Partners & Collaborators
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        {logos.map((logo) => (
          <div key={logo.id} className="relative w-24 h-12 md:w-32 md:h-16 transition-transform hover:scale-110">
            <Image
              src={logo.imageUrl}
              alt={logo.description}
              fill
              className="object-contain"
              data-ai-hint={logo.imageHint}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
