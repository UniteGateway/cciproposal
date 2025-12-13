import { Building, FileText, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const models = [
  {
    icon: Building,
    name: "BOOT Model",
    fullName: "Build-Own-Operate-Transfer",
    duration: "6 Years",
    investment: "100% by Unite Solar",
    highlights: [
      "Zero upfront investment for CCI",
      "Ownership transfer after 6 years",
      "Complete O&M during contract",
      "Fixed cost structure",
    ],
    color: "primary",
  },
  {
    icon: FileText,
    name: "PPA Model",
    fullName: "Power Purchase Agreement",
    duration: "25 Years",
    investment: "100% by Unite Solar",
    highlights: [
      "26% discount on grid tariff",
      "Long-term price stability",
      "Unite Solar owns & operates",
      "Zero maintenance burden",
    ],
    color: "solar-blue",
  },
];

const Slide08ProjectStructuring = () => {
  return (
    <div className="min-h-[calc(100vh-7.5rem)] px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Commercial Models
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Project <span className="solar-gradient-text">Structuring Options</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two flexible commercial models tailored to CCI's strategic priorities
          </p>
        </div>

        {/* Model Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {models.map((model, index) => (
            <Card 
              key={model.name}
              className={`border-2 ${index === 0 ? 'border-primary/30' : 'border-solar-blue/30'} bg-card hover:shadow-xl transition-all duration-300`}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl ${index === 0 ? 'solar-gradient' : 'bg-solar-blue'} flex items-center justify-center mb-4`}>
                  <model.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-foreground">{model.name}</CardTitle>
                <p className="text-muted-foreground">{model.fullName}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg text-center">
                    <div className={`text-2xl font-bold ${index === 0 ? 'text-primary' : 'text-solar-blue'}`}>
                      {model.duration}
                    </div>
                    <div className="text-sm text-muted-foreground">Contract Period</div>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg text-center">
                    <div className={`text-2xl font-bold ${index === 0 ? 'text-primary' : 'text-solar-blue'}`}>
                      100%
                    </div>
                    <div className="text-sm text-muted-foreground">Investment by Us</div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  {model.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <ArrowRight className={`w-4 h-4 ${index === 0 ? 'text-primary' : 'text-solar-blue'} flex-shrink-0`} />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center p-6 bg-secondary rounded-xl">
          <p className="text-muted-foreground">
            Both models ensure <span className="font-semibold text-foreground">zero capital expenditure</span> for 
            CCI while delivering reliable, clean energy and significant cost savings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide08ProjectStructuring;
