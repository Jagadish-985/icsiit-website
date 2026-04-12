import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Globe, Mail, Phone, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#f6f6f6] border-t border-border pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-10">
            <Link href="/" className="flex items-center group">
              <div className="h-24 flex items-center">
                <Image 
                  src="/abc.webp" 
                  alt="SYNERGY 2026 Logo"
                  width={280}
                  height={92}
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-base font-medium text-muted-foreground leading-relaxed">
              International Conference on Smart, Intelligent and Innovative Technologies (IC-SIIT). 
              Driving interdisciplinary excellence in modern engineering.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white border border-border rounded-2xl flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-white hover:border-secondary transition-all shadow-md group">
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline font-extrabold text-2xl mb-10 text-foreground">Navigation</h4>
            <ul className="space-y-5 text-base font-bold text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Need for SYNERGY</Link></li>
              <li><Link href="/call-for-papers" className="hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Call for Papers</Link></li>
              <li><Link href="/committee" className="hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Committees</Link></li>
              <li><Link href="/registration" className="hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Registration</Link></li>
              <li><Link href="/venue" className="hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Venue & Location</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-extrabold text-2xl mb-10 text-foreground">Contact</h4>
            <ul className="space-y-6 text-base font-bold text-muted-foreground">
              <li className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-border">
                   <Phone className="w-6 h-6 text-primary" />
                </div>
                <span className="text-foreground">+91 9480343844 <br /> +91 9611640888</span>
              </li>
              <li className="flex gap-5 items-start">
                 <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-border">
                   <Mail className="w-6 h-6 text-primary" />
                </div>
                <span className="break-all text-foreground">icsmart@msruas.ac.in</span>
              </li>
              <li className="flex gap-5 items-start">
                 <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-border">
                   <Globe className="w-6 h-6 text-primary" />
                </div>
                <span className="text-foreground">www.msruas.ac.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-extrabold text-2xl mb-10 text-foreground">Organized By</h4>
            <div className="p-8 bg-white border-2 border-primary/10 rounded-[2.5rem] shadow-xl relative group overflow-hidden">
               <div className="absolute bottom-[-20px] right-[-20px] opacity-10 group-hover:rotate-12 transition-transform">
                  <Zap className="w-32 h-32 text-primary" />
               </div>
              <p className="text-lg font-extrabold text-foreground leading-tight">Faculty of Engineering and Technology</p>
              <p className="text-sm font-bold text-muted-foreground mt-4 leading-relaxed">Ramaiah University of Applied Sciences, RTC, Peenya, Bangalore - 560058</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-12 text-center text-sm font-bold text-muted-foreground/50 tracking-widest uppercase">
          <p>© {new Date().getFullYear()} SYNERGY 2026 - IC-SIIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}