"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function HeroBackground() {
  const slideshowImages = PlaceHolderImages.filter(img => 
    ['hero-bg', 'aerospace', 'robotics'].includes(img.id)
  );
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slideshowImages.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slideshowImages.length]);

  if (slideshowImages.length === 0) return null;

  return (
    <div className="absolute inset-0 z-0">
      {slideshowImages.map((image, index) => (
        <div
          key={image.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === currentIndex ? "opacity-20" : "opacity-0"
          )}
        >
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            className="object-cover"
            priority={index === 0}
            data-ai-hint={image.imageHint}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--secondary)_0%,_transparent_70%)] opacity-[0.1]" />
    </div>
  );
}
