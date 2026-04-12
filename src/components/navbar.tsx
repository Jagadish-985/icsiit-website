
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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
        scrolled ? "bg-[#361C6A] py-3 shadow-lg" : "bg-[#361C6A] py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative min-h-[56px]">
        {/* Left: Branding */}
        <Link href="/" className="flex items-center group">
          <div className="h-12 md:h-16 flex items-center">
            <Image 
              src="/abc.webp" 
              alt="SYNERGY 2026 Logo"
              width={220}
              height={70}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Right: Desktop Navigation & Mobile Toggle */}
        <div className="flex items-center gap-4 w-auto">
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
              <Button asChild variant="default" size="sm" className="bg-[#E34A21] text-primary-foreground hover:bg-[#E34A21]/90 transition-all h-9 rounded-full px-5 border-none">
                <a href="https://forms.office.com/r/yjydBRn5Nx" target="_blank" rel="noopener noreferrer">
                  Register
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button 
              className="p-2 text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "lg:hidden fixed inset-0 top-[72px] bg-[#361C6A] z-40 transition-transform duration-300 ease-in-out transform",
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
            <Button asChild className="w-full bg-[#E34A21] text-primary-foreground hover:bg-[#E34A21]/90 rounded-full h-12 text-lg">
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
