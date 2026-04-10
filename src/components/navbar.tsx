"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Call for Papers', href: '/call-for-papers' },
  { name: 'Committee', href: '/committee' },
  { name: 'Dates', href: '/important-dates' },
  { name: 'Registration', href: '/registration' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const uniLogo = PlaceHolderImages.find(img => img.id === 'uni-logo');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-lg border-b border-border py-3 shadow-sm" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative min-h-[48px]">
        {/* Left: University Logo */}
        <div className="flex items-center">
          <div className="flex items-center h-8 md:h-10">
            <Image 
              src={uniLogo?.imageUrl || ''} 
              alt="University Logo" 
              width={140} 
              height={35} 
              className="h-full w-auto object-contain"
              data-ai-hint="university logo"
            />
          </div>
        </div>

        {/* Center: Conference Logo (Absolutely Positioned) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center z-10">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center font-headline font-bold text-lg md:text-xl text-primary-foreground group-hover:scale-105 transition-transform">
              S
            </div>
            <span className="font-headline font-bold text-lg md:text-xl tracking-tight hidden sm:block text-foreground">
              SYNERGY <span className="text-primary">2026</span>
            </span>
          </Link>
        </div>

        {/* Right: Desktop Navigation & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-xs xl:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                  pathname === item.href ? "text-primary" : "text-foreground/80"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-2 ml-2">
              <Button asChild variant="default" size="sm" className="bg-primary text-primary-foreground hover:brightness-90 transition-all h-9 rounded-full px-5">
                <a href="https://forms.office.com/r/yjydBRn5Nx" target="_blank" rel="noopener noreferrer">
                  Register
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "lg:hidden fixed inset-0 top-[64px] bg-background z-40 transition-transform duration-300 ease-in-out transform",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col p-6 gap-4 overflow-y-auto h-full">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-medium py-2 border-b border-border/50 text-foreground",
                pathname === item.href ? "text-primary" : "text-foreground/80"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3 pb-20">
            <Button asChild className="w-full bg-primary text-primary-foreground hover:brightness-90 rounded-full">
              <a href="https://forms.office.com/r/yjydBRn5Nx" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
