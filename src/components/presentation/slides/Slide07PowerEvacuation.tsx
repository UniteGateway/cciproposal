import { Building2, Cable, Gauge, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const advantages = [
  {
    icon: Building2,
    title: "Existing 132/6.6 KVA Substation",
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
  "Interconnection with 132/6.6 KVA substation",
  "Power injection into CCI grid",
  "Real-time monitoring & metering",
];

const Slide07PowerEvacuation = () => {
  return (
    <div className="min-h-[calc(100vh-7rem)] md:min-h-[calc(100vh-7.5rem)] px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 md:space-y-4">
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
            Grid Integration
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Power Evacuation <span className="solar-gradient-text">Advantage</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Seamless grid integration leveraging existing substation infrastructure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left - Advantages */}
          <div className="space-y-4 md:space-y-6">
            {advantages.map((advantage) => (
              <Card 
                key={advantage.title}
                className="border-border bg-card hover:shadow-md transition-shadow"
              >
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl solar-gradient flex items-center justify-center flex-shrink-0">
                      <advantage.icon className="w-5 h-5 md:w-7 md:h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-xl font-semibold text-foreground">{advantage.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1 md:mt-2">{advantage.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right - Process Flow */}
          <Card className="border-border bg-card">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="text-foreground text-base md:text-lg">Evacuation Process</CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6 pt-0">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-solar-blue to-solar-orange" />
                
                <div className="space-y-4 md:space-y-6">
                  {evacuationSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3 md:gap-4 relative">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center flex-shrink-0 z-10">
                        <span className="text-xs md:text-sm font-bold text-primary">{index + 1}</span>
                      </div>
                      <div className="flex-1 p-3 md:p-4 bg-secondary rounded-lg">
                        <p className="text-sm md:text-base text-foreground">{step}</p>
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
          <CardContent className="p-4 md:p-6">
            <div className="flex items-start md:items-center gap-3 md:gap-4">
              <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground text-base md:text-lg">Key Advantage</h4>
                <p className="text-sm text-muted-foreground">
                  The existing 132/6.6 KVA substation reduces infrastructure investment and enables faster commissioning.
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
