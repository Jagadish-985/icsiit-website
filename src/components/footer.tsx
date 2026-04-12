
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Globe, Mail, Phone, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-8">
            <Link href="/" className="flex items-center group">
              <div className="h-16 flex items-center">
                <Image 
                  src="/abc.webp" 
                  alt="SYNERGY 2026 Logo"
                  width={200}
                  height={66}
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              International Conference on Smart, Intelligent and Innovative Technologies (IC-SIIT). 
              Bridging traditional boundaries for holistic engineering excellence.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold text-xl mb-8 text-foreground">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">Need for SYNERGY</Link></li>
              <li><Link href="/call-for-papers" className="hover:text-primary transition-colors">Call for Papers</Link></li>
              <li><Link href="/committee" className="hover:text-primary transition-colors">Committees</Link></li>
              <li><Link href="/registration" className="hover:text-primary transition-colors">Registration</Link></li>
              <li><Link href="/venue" className="hover:text-primary transition-colors">Venue & Location</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-xl mb-8 text-foreground">Reach Us</h4>
            <ul className="space-y-5 text-sm font-medium text-muted-foreground">
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                   <Phone className="w-5 h-5 text-primary" />
                </div>
                <span>+91 9480343844 <br /> +91 9611640888</span>
              </li>
              <li className="flex gap-4 items-start">
                 <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                   <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="break-all">icsmart@msruas.ac.in</span>
              </li>
              <li className="flex gap-4 items-start">
                 <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                   <Globe className="w-5 h-5 text-primary" />
                </div>
                <span>www.msruas.ac.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-xl mb-8 text-foreground">Host</h4>
            <div className="p-6 bg-white border border-border rounded-[2rem] shadow-sm relative group overflow-hidden">
               <div className="absolute bottom-[-10px] right-[-10px] opacity-5 group-hover:scale-110 transition-transform">
                  <Zap className="w-16 h-16 text-primary" />
               </div>
              <p className="text-sm font-bold text-foreground">Faculty of Engineering and Technology</p>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">Ramaiah University of Applied Sciences, RTC, Peenya, Bangalore - 560058</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-10 text-center text-sm font-semibold text-muted-foreground/60">
          <p>© {new Date().getFullYear()} SYNERGY 2026 - IC-SIIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
