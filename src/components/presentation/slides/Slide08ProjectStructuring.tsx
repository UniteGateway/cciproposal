import { Building, FileText, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const models = [
  {
    icon: Building,
    name: "BOOT Model",
    fullName: "Build-Own-Operate-Transfer",
    duration: "6 Years",
    savings: "30 Years",
    investment: "100% by Unite Solar",
    highlights: [
      "Zero upfront investment for CCI",
      "Ownership transfer after 6 years",
      "Complete O&M during contract",
      "Total savings calculated over 30 years",
    ],
    color: "primary",
  },
  {
    icon: FileText,
    name: "PPA Model",
    fullName: "Power Purchase Agreement",
    duration: "30 Years",
    savings: "₹450+ Cr",
    investment: "100% by Unite Solar",
    highlights: [
      "₹5/unit fixed PPA rate",
      "Long-term price stability",
      "Unite Solar owns & operates",
      "Zero maintenance burden",
    ],
    color: "solar-blue",
  },
];

const Slide08ProjectStructuring = () => {
  return (
    <div className="min-h-[calc(100vh-7rem)] md:min-h-[calc(100vh-7.5rem)] px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 md:space-y-4">
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
            Commercial Models
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Project <span className="solar-gradient-text">Structuring Options</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Two flexible commercial models tailored to CCI's strategic priorities
          </p>
        </div>

        {/* Model Cards */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {models.map((model, index) => (
            <Card 
              key={model.name}
              className={`border-2 ${index === 0 ? 'border-primary/30' : 'border-solar-blue/30'} bg-card hover:shadow-xl transition-all duration-300`}
            >
              <CardHeader className="p-4 md:p-6 pb-3 md:pb-4">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${index === 0 ? 'solar-gradient' : 'bg-solar-blue'} flex items-center justify-center mb-3 md:mb-4`}>
                  <model.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl md:text-2xl text-foreground">{model.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{model.fullName}</p>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0 space-y-4 md:space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 md:gap-3">
                  <div className="p-2 md:p-4 bg-secondary rounded-lg text-center">
                    <div className={`text-base md:text-xl font-bold ${index === 0 ? 'text-primary' : 'text-solar-blue'}`}>
                      {model.duration}
                    </div>
                    <div className="text-[10px] md:text-sm text-muted-foreground">Contract</div>
                  </div>
                  <div className="p-2 md:p-4 bg-secondary rounded-lg text-center">
                    <div className={`text-base md:text-xl font-bold ${index === 0 ? 'text-primary' : 'text-solar-blue'}`}>
                      {model.savings}
                    </div>
                    <div className="text-[10px] md:text-sm text-muted-foreground">Savings Period</div>
                  </div>
                  <div className="p-2 md:p-4 bg-secondary rounded-lg text-center">
                    <div className={`text-base md:text-xl font-bold ${index === 0 ? 'text-primary' : 'text-solar-blue'}`}>
                      100%
                    </div>
                    <div className="text-[10px] md:text-sm text-muted-foreground">Investment</div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 md:space-y-3">
                  {model.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 md:gap-3">
                      <ArrowRight className={`w-3.5 h-3.5 md:w-4 md:h-4 ${index === 0 ? 'text-primary' : 'text-solar-blue'} flex-shrink-0`} />
                      <span className="text-sm md:text-base text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center p-4 md:p-6 bg-secondary rounded-xl">
          <p className="text-xs md:text-sm text-muted-foreground">
            Both models ensure <span className="font-semibold text-foreground">zero capital expenditure</span> for 
            CCI while delivering reliable, clean energy and significant cost savings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide08ProjectStructuring;
