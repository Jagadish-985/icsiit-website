
import SectionHeading from '@/components/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CallForPapers() {
  const themes = [
    {
      title: "Mechanical & Manufacturing",
      topics: ["Smart Materials", "Additive Manufacturing", "Robotics & Automation", "Green Manufacturing", "Mechatronics"]
    },
    {
      title: "Aerospace & Systems",
      topics: ["Aerodynamics", "Avionics", "UAV Technology", "Satellite Systems", "Integrated Engineering"]
    },
    {
      title: "Electronics & AI",
      topics: ["IoT Systems", "Embedded Systems", "Machine Learning", "Smart Sensors", "Control Systems"]
    },
    {
      title: "Sustainable Infrastructure",
      topics: ["Smart Cities", "Sustainable Building Materials", "Geotechnical Engineering", "Structural Health Monitoring"]
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="Call for Papers" 
            subtitle="Submit your original research articles for presentation at IC-SMART 2026."
          />

          <div className="bg-primary/10 p-8 rounded-3xl border border-primary/20 mb-12">
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Originality Guidelines</h3>
                <p className="text-muted-foreground">
                  Papers submitted must be original and not previously published or under consideration elsewhere. 
                  All submissions will undergo a plagiarism check before the peer review process.
                </p>
                <div className="mt-4 flex gap-4">
                  <Button size="sm" className="gap-2">
                    <Download className="w-4 h-4" /> Template.docx
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2">
                    Submission Portal
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-headline font-bold mb-8">Conference Themes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {themes.map((theme, i) => (
              <Card key={i} className="glass-card">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-primary mb-4">{theme.title}</h4>
                  <ul className="space-y-2">
                    {theme.topics.map((topic, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        {topic}
                      </li>
                    ))}
                  </ul>
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
                <p className="text-muted-foreground">Submit a 300-word abstract outlining the scope, methodology, and key results of your research.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-primary flex-shrink-0">2</div>
              <div>
                <h4 className="font-bold mb-2">Full Paper Submission</h4>
                <p className="text-muted-foreground">Once the abstract is accepted, submit the full-length paper following the conference template.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-primary flex-shrink-0">3</div>
              <div>
                <h4 className="font-bold mb-2">Registration</h4>
                <p className="text-muted-foreground">Pay the registration fee to confirm your slot for presentation and publication.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 glass-card rounded-3xl text-center">
            <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">Need help with submission?</h4>
            <p className="text-muted-foreground mb-6">Contact our technical committee for any queries regarding templates or topics.</p>
            <Button variant="outline" asChild>
              <a href="mailto:icsmart@msruas.ac.in">icsmart@msruas.ac.in</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
