import SectionHeading from '@/components/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Mail, Download, CheckCircle2, Award, Globe, ShieldCheck, AlertCircle, FileType } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function CallForPapers() {
  const themes = [
    "Artificial Intelligence, Data science, Cybersecurity and its Application",
    "Design, Robotics and Product engineering",
    "Design Automation, IoT & Computational Engineering",
    "Sustainable Infrastructure: Monitoring, Assessment and Smart Construction Materials",
    "Aerospace Automotive and Future Mobility Systems",
    "Energy, Material and Advance Manufacturing",
    "Medical, Dental, Biotechnology, Health care, Life sciences, Pharmacy and Clinical Applications",
    "Innovation, Entrepreneurship and Management"
  ];

  const submissionLink = "https://forms.office.com/pages/responsepage.aspx?id=Cxg44CEAH0CDqaLUWs7g3IGx20TiK4NLhAlTIWTrf9tUNFNGVEVES1JVUjhYR1JWMUZKV1o5WEFQSS4u&route=shorturl";

  const keyPoints = [
    {
      icon: Award,
      text: "Certificate will be provided to all participants",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Globe,
      text: "National and International Experts from IISc, IIT, NIT and industries.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: ShieldCheck,
      text: "Plagiarism and AI similarity must be less than 10%",
      color: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="Call for Papers" 
            subtitle="Submit your original research articles for presentation at IC-SIIT 2026."
          />

          <div className="bg-primary/10 p-8 rounded-3xl border border-primary/20 mb-12">
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Originality Guidelines</h3>
                <p className="text-muted-foreground text-justify leading-relaxed">
                  Papers submitted must be original and not previously published. 
                  All submissions will undergo a plagiarism check before the peer review process.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button size="sm" className="gap-2 rounded-xl h-11 px-6 font-bold" asChild>
                    <a href="/CRCWordTemplate.docx" download>
                      <FileType className="w-4 h-4" /> Word Template
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" className="gap-2 rounded-xl h-11 px-6 font-bold" asChild>
                    <a href="https://docs.google.com/presentation/d/10uCjMEtTYBzwwo_WExHD6Y2xKPDWd6a_/edit?usp=sharing" target="_blank">
                      <Download className="w-4 h-4" /> PPT Template
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2 rounded-xl h-11 px-6 font-bold border-2" asChild>
                    <a href={submissionLink} target="_blank" rel="noopener noreferrer">
                      Submission Portal
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {keyPoints.map((point, i) => (
              <Card key={i} className="border-border bg-white shadow-sm rounded-[2rem] overflow-hidden hover:border-primary/20 transition-all flex flex-col items-center text-center group">
                <CardContent className="p-8 flex flex-col items-center gap-6">
                  <div className={cn("p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform", point.bgColor)}>
                    <point.icon className={cn("w-8 h-8", point.color)} />
                  </div>
                  <p className="text-[15px] font-bold text-foreground leading-relaxed">
                    {point.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="text-2xl font-headline font-bold mb-8">Conference Themes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {themes.map((theme, i) => (
              <Card key={i} className="border-border hover:border-primary/20 transition-all bg-white shadow-sm rounded-2xl overflow-hidden group">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary flex-shrink-0 text-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    {i + 1}
                  </div>
                  <p className="font-bold text-foreground leading-tight">{theme}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <SectionHeading title="Submission Process" />
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-primary flex-shrink-0 shadow-sm border border-border">1</div>
              <div>
                <h4 className="font-bold text-lg mb-2">Prepare Abstract</h4>
                <p className="text-muted-foreground text-justify leading-relaxed">Submit a 300-word abstract outlining the scope, methodology, and key results.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-primary flex-shrink-0 shadow-sm border border-border">2</div>
              <div>
                <h4 className="font-bold text-lg mb-2">Full Paper Submission</h4>
                <p className="text-muted-foreground text-justify leading-relaxed">Once the abstract is accepted, submit the full-length paper following the conference template.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-primary flex-shrink-0 shadow-sm border border-border">3</div>
              <div>
                <h4 className="font-bold text-lg mb-2">Registration</h4>
                <p className="text-muted-foreground text-justify leading-relaxed">Pay the registration fee to confirm your slot for presentation and publication.</p>
              </div>
            </div>
          </div>

          <div className="mt-20 p-10 bg-[#f6f6f6] border-2 border-border rounded-[3rem] text-center">
            <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
            <h4 className="text-2xl font-bold mb-3">Need help with submission?</h4>
            <p className="text-muted-foreground mb-8 text-lg">Contact our technical committee for any queries regarding templates or topics.</p>
            <Button variant="outline" className="rounded-2xl h-14 px-8 font-bold border-2 hover:bg-primary hover:text-white hover:border-primary transition-all" asChild>
              <a href="mailto:icsiit@msruas.ac.in">icsiit@msruas.ac.in</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
