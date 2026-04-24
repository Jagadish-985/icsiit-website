import SectionHeading from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, FileText, Globe, Info, Mail } from 'lucide-react';

export default function BrochurePage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            centered 
            title="Conference Brochure" 
            subtitle="Download the official brochure and technical guidelines for SYNERGY 2026." 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Primary Brochure Download */}
            <Card className="rounded-[2.5rem] border-border shadow-lg overflow-hidden group hover:border-primary/30 transition-all bg-white border-2">
              <CardContent className="p-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 text-foreground">Official Brochure</h3>
                <p className="text-muted-foreground mb-8 flex-grow text-justify leading-relaxed font-medium">
                  Get a comprehensive overview of the conference, including session details, speaker profiles, thrust areas, and venue information.
                </p>
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 w-full rounded-2xl h-14 font-bold shadow-lg shadow-primary/20">
                  <a href="/IC-SIIT-Brochure.pdf" download="IC-SIIT-Brochure.pdf" className="flex items-center gap-2">
                    <Download className="w-5 h-5" /> Download Brochure (PDF)
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Templates Section */}
            <Card className="rounded-[2.5rem] border-border shadow-lg overflow-hidden group hover:border-secondary/30 transition-all bg-white border-2">
              <CardContent className="p-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-all">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 text-foreground">Author Templates</h3>
                <p className="text-muted-foreground mb-8 flex-grow text-justify leading-relaxed font-medium">
                  Download the required templates for paper submission and conference presentation to ensure compliance with our guidelines.
                </p>
                <div className="space-y-4">
                  <Button variant="outline" asChild size="lg" className="w-full rounded-2xl h-14 font-bold border-2 hover:bg-muted">
                    <a href="/CRCWordTemplate.docx" download="CRCWordTemplate.docx" className="flex items-center gap-2">
                      <Download className="w-5 h-5 text-secondary" /> Word Template
                    </a>
                  </Button>
                  <Button variant="outline" asChild size="lg" className="w-full rounded-2xl h-14 font-bold border-2 hover:bg-muted">
                    <a 
                      href="https://docs.google.com/presentation/d/10uCjMEtTYBzwwo_WExHD6Y2xKPDWd6a_/edit?usp=sharing&ouid=103297635095690463938&rtpof=true&sd=true" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Download className="w-5 h-5 text-secondary" /> Presentation PPT
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info Box */}
          <div className="mt-16 p-10 bg-[#f6f6f6] border-2 border-border rounded-[3rem] shadow-inner">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-border">
                <Info className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-3 text-foreground">Publication Integrity</h4>
                <p className="text-muted-foreground leading-relaxed text-justify font-medium">
                  We maintain a strict quality control process. All submitted papers must adhere to the formatting guidelines provided in the templates. 
                  Plagiarism and AI similarity must be less than <span className="text-primary font-bold">10%</span> for the paper to be considered for peer review.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground font-medium mb-4">Questions regarding documentation?</p>
            <div className="flex justify-center items-center gap-2 text-primary font-bold">
              <Mail className="w-5 h-5" />
              <a href="mailto:icsiit@msruas.ac.in" className="hover:underline">icsiit@msruas.ac.in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
