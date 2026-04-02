
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Globe, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-headline font-bold text-xl text-primary-foreground">
                IC
              </div>
              <span className="font-headline font-bold text-xl tracking-tight">
                SMART <span className="text-primary">2026</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              International Conference on Smart and Integrated Engineering Systems. 
              Paving the way for futuristic engineering and robotics innovations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Conference</Link></li>
              <li><Link href="/call-for-papers" className="hover:text-primary transition-colors">Call for Papers</Link></li>
              <li><Link href="/important-dates" className="hover:text-primary transition-colors">Important Dates</Link></li>
              <li><Link href="/registration" className="hover:text-primary transition-colors">Registration</Link></li>
              <li><Link href="/venue" className="hover:text-primary transition-colors">Venue & Location</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 9480343844 / +91 9611640888</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>icsmart@msruas.ac.in</span>
              </li>
              <li className="flex gap-3">
                <Globe className="w-5 h-5 text-primary shrink-0" />
                <span>www.msruas.ac.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Organizer</h4>
            <div className="p-4 glass-card rounded-xl">
              <p className="text-sm font-bold text-foreground">Department of Mechanical Engineering</p>
              <p className="text-xs text-muted-foreground mt-1">Ramaiah University of Applied Sciences</p>
              <p className="text-xs text-muted-foreground">Peenya, Bangalore</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} IC-SMART 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
