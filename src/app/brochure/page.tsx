import SectionHeading from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, FileText, Info, Mail } from 'lucide-react';

export default function BrochurePage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            centered 
            title="Conference Brochure" 
            subtitle="Download the official brochure for SYNERGY 2026." 
          />

          <div className="flex justify-center mt-12">
            {/* Primary Brochure Download */}
            <Card className="w-full max-w-xl rounded-[2.5rem] border-border shadow-lg overflow-hidden group hover:border-primary/30 transition-all bg-white border-2">
              <CardContent className="p-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                  <FileText className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-headline font-bold mb-4 text-foreground">Official Brochure</h3>
                <p className="text-muted-foreground font-medium mb-8">Kindly go through the Official Brochure in detail</p>
                
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 w-full rounded-2xl h-14 font-bold shadow-lg shadow-primary/20 max-w-sm">
                  <a 
                    href="/Brochure SYNERGY 2026 IC-SIIT -Microsoft CMT Paper submission.pdf" 
                    download="Brochure SYNERGY 2026 IC-SIIT.pdf" 
                    className="flex items-center gap-2"
                  >
                    <Download className="w-5 h-5" /> Download Brochure
                  </a>
                </Button>
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
