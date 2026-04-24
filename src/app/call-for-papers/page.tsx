import SectionHeading from '@/components/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Mail, Download, CheckCircle2, Award, Globe, ShieldCheck, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      color: "text-primary"
    },
    {
      icon: Globe,
      text: "National and International Experts/Resources Persons are from esteemed academic institutions like IISc, IIT, NIT and industries.",
      color: "text-secondary"
    },
    {
      icon: ShieldCheck,
      text: "Authors should make sure the plagiarism, and AI similarity should be less than 10%",
      color: "text-green-600"
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
                <p className="text-muted-foreground text-justify">
                  Papers submitted must be original and not previously published or under consideration elsewhere. 
                  All submissions will undergo a plagiarism check before the peer review process.
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <Button size="sm" className="gap-2" asChild>
                    <a 
                      href="/CRCWordTemplate.docx" 
                      download="CRCWordTemplate.docx"
                    >
                      <Download className="w-4 h-4" /> Download Template
                    </a>
                  </Button>
                  <Button size="sm" className="gap-2" asChild>
                    <a 
                      href="https://docs.google.com/presentation/d/10uCjMEtTYBzwwo_WExHD6Y2xKPDWd6a_/edit?usp=sharing&ouid=103297635095690463938&rtpof=true&sd=true" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-4 h-4" /> Conference Presentation Template
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2" asChild>
                    <a href={submissionLink} target="_blank" rel="noopener noreferrer">
                      Submission Portal
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {keyPoints.map((point, i) => (
              <Card key={i} className="border-border bg-white shadow-sm rounded-2xl overflow-hidden hover:border-primary/20 transition-all flex h-full">
                <CardContent className="p-8 flex flex-col items-center gap-4">
                  <div className="p-3 rounded-xl bg-muted flex-shrink-0">
                    <point.icon className={`w-8 h-8 ${point.color}`} />
                  </div>
                  <p className="text-sm font-semibold text-foreground leading-normal text-justify">{point.text}</p>
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
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-primary flex-shrink-0">1</div>
              <div>
                <h4 className="font-bold mb-2">Prepare Abstract</h4>
                <p className="text-muted-foreground text-justify">Submit a 300-word abstract outlining the scope, methodology, and key results of your research.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-primary flex-shrink-0">2</div>
              <div>
                <h4 className="font-bold mb-2">Full Paper Submission</h4>
                <p className="text-muted-foreground text-justify">Once the abstract is accepted, submit the full-length paper following the conference template.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-primary flex-shrink-0">3</div>
              <div>
                <h4 className="font-bold mb-2">Registration</h4>
                <p className="text-muted-foreground text-justify">Pay the registration fee to confirm your slot for presentation and publication.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 glass-card rounded-3xl text-center">
            <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">Need help with submission?</h4>
            <p className="text-muted-foreground mb-6">Contact our technical committee for any queries regarding templates or topics.</p>
            <Button variant="outline" asChild>
              <a href="mailto:icsiit@msruas.ac.in">icsiit@msruas.ac.in</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
