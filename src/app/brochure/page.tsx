import SectionHeading from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, FileText, Info, Mail, ExternalLink } from 'lucide-react';

export default function BrochurePage() {
  // Exact filename as provided by the user
  const brochureFileName = "Brochure SYNERGY 2026 IC-SIIT -Microsoft CMT Paper submission.pdf";
  // We use the raw filename; the browser will handle space encoding.
  const brochureUrl = `/${brochureFileName}`;

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            centered 
            title="Conference Brochure" 
            subtitle="Download the official brochure for SYNERGY 2026." 
          />

          <div className="flex flex-col items-center mt-12 gap-6">
            <Card className="w-full max-w-xl rounded-[2.5rem] border-border shadow-lg overflow-hidden group hover:border-primary/30 transition-all bg-white border-2">
              <CardContent className="p-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                  <FileText className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-headline font-bold mb-4 text-foreground">Official Brochure</h3>
                <p className="text-muted-foreground font-medium mb-8">Kindly download and review the official conference brochure.</p>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-2xl h-14 font-bold shadow-lg shadow-primary/20 flex-1">
                    <a 
                      href={brochureUrl}
                      download={brochureFileName}
                    >
                      <Download className="w-5 h-5 mr-2" /> Download PDF
                    </a>
                  </Button>
                  <Button variant="outline" asChild size="lg" className="rounded-2xl h-14 font-bold border-2 flex-1">
                    <a 
                      href={brochureUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" /> View in Browser
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <p className="text-sm text-muted-foreground italic">
              Note: If the download is blocked, try "View in Browser" and save from there.
            </p>
          </div>

          <div className="mt-16 p-10 bg-[#f6f6f6] border-2 border-border rounded-[3rem] shadow-inner">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-border">
                <Info className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-3 text-foreground">Publication Integrity</h4>
                <p className="text-muted-foreground leading-relaxed text-justify font-medium">
                  We maintain a strict quality control process. All submitted papers must adhere to the formatting guidelines. 
                  Plagiarism and AI similarity must be less than <span className="text-primary font-bold">10%</span> for consideration.
                </p>
              </div>
            </div>
          </div>

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
