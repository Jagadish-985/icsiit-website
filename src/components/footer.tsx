import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Globe, Mail, Phone, Zap } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Linkedin, href: "https://www.linkedin.com/company/ramaiahuniversity/posts/?feedView=all" },
    { Icon: Instagram, href: "https://www.instagram.com/ramaiah.university/" },
  ];

  return (
    <footer className="bg-[#212529] border-t border-white/5 pt-24 pb-12 relative overflow-hidden text-white">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-10">
            <Link href="/" className="flex items-center group">
              <div className="h-28 flex items-center">
                <Image 
                  src="/abc.webp" 
                  alt="SYNERGY 2026 Logo"
                  width={320}
                  height={100}
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-base font-medium text-gray-400 leading-relaxed">
              International Conference on Smart, Intelligent and Innovative Technologies (IC-SIIT). 
              Driving interdisciplinary excellence in modern engineering.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target={social.href !== "#" ? "_blank" : undefined}
                  rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-md group"
                >
                  <social.Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline font-extrabold text-2xl mb-10 text-white">Navigation</h4>
            <ul className="space-y-5 text-base font-bold text-gray-400">
              <li><Link href="/about" className="hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> About</Link></li>
              <li><Link href="/call-for-papers" className="hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Call for Papers</Link></li>
              <li><Link href="/committee" className="hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Committees</Link></li>
              <li><Link href="/registration" className="hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Registration</Link></li>
              <li><Link href="/important-dates" className="hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Dates</Link></li>
              <li><Link href="/venue" className="hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> How to Reach</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-extrabold text-2xl mb-10 text-white">Contact</h4>
            <ul className="space-y-6 text-base font-bold text-gray-300">
              <li className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-white/10">
                   <Phone className="w-6 h-6 text-primary" />
                </div>
                <span className="text-white">+91 9480343844 <br /> +91 9611640888</span>
              </li>
              <li className="flex gap-5 items-start">
                 <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-white/10">
                   <Mail className="w-6 h-6 text-primary" />
                </div>
                <a href="mailto:icsmart@msruas.ac.in" className="break-all text-white hover:text-primary transition-colors">icsmart@msruas.ac.in</a>
              </li>
              <li className="flex gap-5 items-start">
                 <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-white/10">
                   <Globe className="w-6 h-6 text-primary" />
                </div>
                <a href="https://www.msruas.ac.in" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">www.msruas.ac.in</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-extrabold text-2xl mb-10 text-white">Organized By</h4>
            <div className="p-8 bg-white/5 border-2 border-primary/20 rounded-[2.5rem] shadow-xl relative group overflow-hidden">
               <div className="absolute bottom-[-20px] right-[-20px] opacity-10 group-hover:rotate-12 transition-transform">
                  <Zap className="w-32 h-32 text-primary" />
               </div>
              <p className="text-lg font-extrabold text-white leading-tight">Faculty of Engineering and Technology</p>
              <p className="text-sm font-bold text-gray-400 mt-4 leading-relaxed">Ramaiah University of Applied Sciences, RTC, Peenya, Bangalore - 560058</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 text-center text-sm font-bold text-gray-500 tracking-widest uppercase space-y-2">
          <p>© {new Date().getFullYear()} SYNERGY 2026 - IC-SIIT. All rights reserved.</p>
          <p className="text-xs normal-case font-medium opacity-60">
            Website Developed & Maintained by B Jagadish & Sanjeev Janardhan
          </p>
        </div>
      </div>
    </footer>
  );
}
