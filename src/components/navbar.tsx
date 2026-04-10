"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
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
        // Using deep navy blue #002147 to match the institutional RUAS style
        scrolled ? "bg-[#002147] py-3 shadow-lg" : "bg-[#002147] py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative min-h-[56px]">
        {/* Left: University Logo */}
        <div className="flex items-center">
          <div className="flex items-center h-10 md:h-12">
            <Image 
              src={uniLogo?.imageUrl || ''} 
              alt="Ramaiah University Logo" 
              width={220} 
              height={55} 
              className="h-full w-auto object-contain brightness-0 invert" // Ensures visibility on dark background
              data-ai-hint="university logo"
            />
          </div>
        </div>

        {/* Right: Desktop Navigation & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-xs xl:text-sm font-semibold transition-colors hover:text-primary-foreground whitespace-nowrap",
                  pathname === item.href ? "text-primary-foreground" : "text-white/80"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-2 ml-2">
              <Button asChild variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all h-9 rounded-full px-5 border-none">
                <a href="https://forms.office.com/r/yjydBRn5Nx" target="_blank" rel="noopener noreferrer">
                  Register
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "lg:hidden fixed inset-0 top-[72px] bg-[#002147] z-40 transition-transform duration-300 ease-in-out transform",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col p-6 gap-4 overflow-y-auto h-full">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-bold py-3 border-b border-white/10 text-white",
                pathname === item.href ? "text-primary-foreground" : "text-white/80"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-3 pb-20">
            <Button asChild className="w-full bg-primary text-primary-foreground hover:brightness-110 rounded-full h-12 text-lg">
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
