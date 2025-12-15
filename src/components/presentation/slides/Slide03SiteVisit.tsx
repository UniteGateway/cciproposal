import { CheckCircle2, MapPin, Calendar, FileCheck, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import cciFactory from "@/assets/cci-factory.png";

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
    <div className="min-h-[calc(100vh-7rem)] md:min-h-[calc(100vh-7.5rem)] px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 md:space-y-4">
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
            Feasibility Assessment
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Site Visit & <span className="solar-gradient-text">Assessment</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive on-site evaluation conducted to assess project viability
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left - Image & Info Cards */}
          <div className="space-y-4 md:space-y-6">
            <div 
              className="h-48 md:h-64 rounded-xl md:rounded-2xl bg-cover bg-center relative overflow-hidden"
              style={{
                backgroundImage: `url(${cciFactory})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                <div className="flex items-center gap-2 text-primary-foreground">
                  <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm">Site Assessment Completed</span>
                </div>
              </div>
            </div>

            {findings.map((finding) => (
              <Card key={finding.title} className="border-border bg-card">
                <CardContent className="p-3 md:p-4 flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <finding.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm md:text-base">{finding.title}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">{finding.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right - Key Outcomes */}
          <Card className="border-border bg-card h-fit">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="flex items-center gap-2 text-foreground text-base md:text-lg">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                Key Assessment Outcomes
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6 pt-0 space-y-2 md:space-y-4">
              {outcomes.map((outcome, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 bg-secondary rounded-lg"
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-primary-foreground" />
                  </div>
                  <span className="text-sm md:text-base text-foreground">{outcome}</span>
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
