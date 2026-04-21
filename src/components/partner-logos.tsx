
"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function PartnerLogos() {
  // Filters for IDs starting with 'partner-' which now point to the /public folder assets
  const logos = PlaceHolderImages.filter(img => img.id.startsWith('partner-'));

  return (
    <div className="mt-16 animate-fade-in [animation-delay:1200ms]">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground/60 mb-8 text-center">
        Our Partners & Collaborators
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 max-w-6xl mx-auto px-4">
        {logos.map((logo) => (
          <div key={logo.id} className="relative w-20 h-10 md:w-28 md:h-14 transition-transform hover:scale-110 flex items-center justify-center">
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
