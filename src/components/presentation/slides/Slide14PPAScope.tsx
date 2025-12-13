import { Sun, Wrench, Shield, Clock, Zap, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const uniteSolarScope = [
  { icon: Sun, text: "Plant ownership for 25 years" },
  { icon: Wrench, text: "Complete O&M responsibility" },
  { icon: Shield, text: "All risk insurance coverage" },
  { icon: Clock, text: "24/7 monitoring & support" },
  { icon: Zap, text: "Performance guarantee" },
];

const cciScope = [
  "Provide land for installation",
  "Facilitate grid connectivity",
  "Pay for consumed power only",
  "No maintenance responsibility",
  "No operational burden",
];

const Slide14PPAScope = () => {
  return (
    <div className="min-h-[calc(100vh-7.5rem)] px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-1.5 bg-solar-blue/10 text-solar-blue rounded-full text-sm font-medium">
            PPA Model
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            PPA Model <span className="solar-gradient-text">Scope</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clear delineation of responsibilities between Unite Solar and CCI
          </p>
        </div>

        {/* Scope Comparison */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Unite Solar Scope */}
          <Card className="border-2 border-primary/30 bg-card">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 rounded-2xl solar-gradient flex items-center justify-center mb-4">
                <Sun className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-foreground">Unite Solar's Scope</CardTitle>
              <p className="text-muted-foreground">What we handle for 25 years</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {uniteSolarScope.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-3 bg-primary/5 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-lg solar-gradient flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* CCI Scope */}
          <Card className="border-2 border-solar-blue/30 bg-card">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 rounded-2xl bg-solar-blue flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-foreground">CCI's Scope</CardTitle>
              <p className="text-muted-foreground">Minimal responsibilities</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {cciScope.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-3 bg-solar-blue/5 rounded-lg"
                >
                  <CheckCircle2 className="w-6 h-6 text-solar-blue flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Benefits Summary */}
        <Card className="border-border bg-card">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Key Benefits of PPA Model</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-primary/5 rounded-xl">
                <div className="text-3xl font-display font-bold text-primary">Zero</div>
                <div className="text-foreground font-medium mt-1">Capital Investment</div>
                <div className="text-sm text-muted-foreground mt-2">No upfront cost</div>
              </div>
              <div className="text-center p-4 bg-solar-blue/5 rounded-xl">
                <div className="text-3xl font-display font-bold text-solar-blue">Zero</div>
                <div className="text-foreground font-medium mt-1">O&M Burden</div>
                <div className="text-sm text-muted-foreground mt-2">We handle everything</div>
              </div>
              <div className="text-center p-4 bg-solar-orange/5 rounded-xl">
                <div className="text-3xl font-display font-bold text-solar-orange">26%</div>
                <div className="text-foreground font-medium mt-1">Cost Savings</div>
                <div className="text-sm text-muted-foreground mt-2">From day one</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Slide14PPAScope;
