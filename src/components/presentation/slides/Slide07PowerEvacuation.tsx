import { Building2, Cable, Gauge, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const advantages = [
  {
    icon: Building2,
    title: "Existing 133 KVA Substation",
    description: "Ready infrastructure for power evacuation with minimal upgrades required",
  },
  {
    icon: Cable,
    title: "Reduced Transmission Costs",
    description: "Lower investment in transmission infrastructure due to proximity",
  },
  {
    icon: Gauge,
    title: "Minimal Line Losses",
    description: "Short distance from generation point to consumption ensures efficiency",
  },
];

const evacuationSteps = [
  "Solar plant generation at 11 KV",
  "Step-up to 33 KV at plant substation",
  "Interconnection with 133 KVA substation",
  "Power injection into CCI grid",
  "Real-time monitoring & metering",
];

const Slide07PowerEvacuation = () => {
  return (
    <div className="min-h-[calc(100vh-7.5rem)] px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Grid Integration
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Power Evacuation <span className="solar-gradient-text">Advantage</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seamless grid integration leveraging existing substation infrastructure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Advantages */}
          <div className="space-y-6">
            {advantages.map((advantage, index) => (
              <Card 
                key={advantage.title}
                className="border-border bg-card hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl solar-gradient flex items-center justify-center flex-shrink-0">
                      <advantage.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{advantage.title}</h3>
                      <p className="text-muted-foreground mt-2">{advantage.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right - Process Flow */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Evacuation Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-solar-blue to-solar-orange" />
                
                <div className="space-y-6">
                  {evacuationSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 relative">
                      <div className="w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center flex-shrink-0 z-10">
                        <span className="text-sm font-bold text-primary">{index + 1}</span>
                      </div>
                      <div className="flex-1 p-4 bg-secondary rounded-lg">
                        <p className="text-foreground">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Highlight */}
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground text-lg">Key Advantage</h4>
                <p className="text-muted-foreground">
                  The existing 133 KVA substation at CCI Thandur significantly reduces 
                  infrastructure investment and enables faster project commissioning with 
                  reliable power evacuation capability.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Slide07PowerEvacuation;
