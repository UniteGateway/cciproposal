import { Calendar, DollarSign, Key, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const timelinePhases = [
  { year: "Year 0", phase: "Project Development", description: "Design, procurement & construction" },
  { year: "Year 1-6", phase: "Operate & Maintain", description: "Unite Solar manages plant operations" },
  { year: "Year 6", phase: "Asset Transfer", description: "Full ownership transfers to CCI" },
  { year: "Year 6+", phase: "CCI Ownership", description: "Optional AMC support available" },
];

const keyTerms = [
  { icon: DollarSign, label: "Investment", value: "100% by Unite Solar" },
  { icon: Calendar, label: "Contract Period", value: "6 Years" },
  { icon: Key, label: "Ownership Transfer", value: "End of Year 6" },
  { icon: Clock, label: "Commissioning", value: "Within 12 Months" },
];

const Slide09BOOTOverview = () => {
  return (
    <div className="min-h-[calc(100vh-7.5rem)] px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            BOOT Model Details
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            BOOT Model <span className="solar-gradient-text">Overview</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Build-Own-Operate-Transfer: Asset ownership in 6 years with zero upfront investment
          </p>
        </div>

        {/* Key Terms Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {keyTerms.map((term) => (
            <Card key={term.label} className="border-border bg-card">
              <CardContent className="p-5 text-center">
                <div className="w-12 h-12 rounded-xl solar-gradient flex items-center justify-center mx-auto mb-3">
                  <term.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-sm text-muted-foreground">{term.label}</div>
                <div className="text-lg font-semibold text-foreground mt-1">{term.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <Card className="border-border bg-card">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Project Timeline</h3>
            <div className="relative">
              {/* Progress Bar */}
              <div className="absolute top-6 left-0 right-0 h-1 bg-secondary rounded-full">
                <div className="absolute inset-y-0 left-0 w-full solar-gradient rounded-full" />
              </div>
              
              <div className="grid grid-cols-4 gap-4 relative">
                {timelinePhases.map((phase, index) => (
                  <div key={phase.year} className="text-center">
                    <div className="w-12 h-12 rounded-full border-4 border-card bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 relative z-10">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <div className="font-semibold text-primary text-sm">{phase.year}</div>
                    <div className="font-medium text-foreground mt-1">{phase.phase}</div>
                    <div className="text-sm text-muted-foreground mt-1">{phase.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Value Proposition */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-display font-bold text-primary">₹0</div>
              <div className="text-foreground font-medium mt-1">Upfront Investment</div>
              <div className="text-sm text-muted-foreground mt-2">Zero CAPEX for CCI</div>
            </CardContent>
          </Card>
          <Card className="border-solar-blue/30 bg-solar-blue/5">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-display font-bold text-solar-blue">6 Years</div>
              <div className="text-foreground font-medium mt-1">To Full Ownership</div>
              <div className="text-sm text-muted-foreground mt-2">Asset transfer guaranteed</div>
            </CardContent>
          </Card>
          <Card className="border-solar-orange/30 bg-solar-orange/5">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-display font-bold text-solar-orange">30+ Years</div>
              <div className="text-foreground font-medium mt-1">Plant Life</div>
              <div className="text-sm text-muted-foreground mt-2">Long-term value creation</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Slide09BOOTOverview;
