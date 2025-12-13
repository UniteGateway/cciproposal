import { CheckCircle2, MapPin, Calendar, FileCheck, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const findings = [
  {
    icon: MapPin,
    title: "Strategic Location",
    description: "Ideal site conditions with excellent solar irradiation potential",
  },
  {
    icon: FileCheck,
    title: "Land Suitability",
    description: "Clear ownership, proper documentation, and regulatory compliance",
  },
  {
    icon: Target,
    title: "Grid Connectivity",
    description: "Existing 133 KVA substation enables seamless power evacuation",
  },
];

const outcomes = [
  "Confirmed 20+ MW capacity potential",
  "Optimal tilt angle and panel orientation identified",
  "Minimal shading obstructions",
  "Good soil conditions for foundation",
  "Access roads available for construction",
  "Water source identified for panel cleaning",
];

const Slide03SiteVisit = () => {
  return (
    <div className="min-h-[calc(100vh-7.5rem)] px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Feasibility Assessment
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Site Visit & <span className="solar-gradient-text">Assessment</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive on-site evaluation conducted to assess project viability
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Image & Info Cards */}
          <div className="space-y-6">
            <div 
              className="h-64 rounded-2xl bg-cover bg-center relative overflow-hidden"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-primary-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Site Assessment Completed</span>
                </div>
              </div>
            </div>

            {findings.map((finding, index) => (
              <Card key={finding.title} className="border-border bg-card">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <finding.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{finding.title}</h4>
                    <p className="text-sm text-muted-foreground">{finding.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right - Key Outcomes */}
          <Card className="border-border bg-card h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Key Assessment Outcomes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {outcomes.map((outcome, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 bg-secondary rounded-lg"
                >
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{outcome}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Slide03SiteVisit;
