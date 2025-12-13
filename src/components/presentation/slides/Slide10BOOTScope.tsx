import { Wrench, Shield, Users, ClipboardCheck, Truck, Gauge, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const scopeItems = [
  {
    icon: Wrench,
    title: "Comprehensive AMC",
    description: "Annual maintenance contract covering all equipment and systems",
  },
  {
    icon: Shield,
    title: "Full Insurance Coverage",
    description: "All-risk insurance for the plant during entire contract period",
  },
  {
    icon: Users,
    title: "Dedicated O&M Staff",
    description: "On-site trained personnel for daily operations and maintenance",
  },
  {
    icon: ClipboardCheck,
    title: "Performance Monitoring",
    description: "24/7 remote monitoring with real-time performance analytics",
  },
  {
    icon: Truck,
    title: "Spare Parts Management",
    description: "Inventory of critical spares for minimal downtime",
  },
  {
    icon: Gauge,
    title: "Performance Guarantee",
    description: "Guaranteed plant availability and generation targets",
  },
];

const inclusions = [
  "Module cleaning & maintenance",
  "Inverter servicing",
  "Electrical system upkeep",
  "Civil structure maintenance",
  "Security arrangements",
  "Regulatory compliance",
  "Grid interface management",
  "Generation reporting",
];

const Slide10BOOTScope = () => {
  return (
    <div className="min-h-[calc(100vh-7.5rem)] px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            BOOT Model
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Scope <span className="solar-gradient-text">Included</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete turnkey solution with all services during the 6-year contract period
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Services */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {scopeItems.map((item, index) => (
              <Card 
                key={item.title}
                className="border-border bg-card hover:shadow-md transition-shadow"
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl solar-gradient flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Inclusions */}
          <Card className="border-border bg-card h-fit">
            <CardHeader>
              <CardTitle className="text-foreground">Detailed Inclusions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {inclusions.map((inclusion, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{inclusion}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Bottom Note */}
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground text-lg">Zero Operational Burden</h4>
                <p className="text-muted-foreground mt-1">
                  During the entire 6-year BOOT period, CCI has no responsibility for plant 
                  operations, maintenance, or performance. Unite Solar handles everything 
                  while CCI simply consumes the generated power.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Slide10BOOTScope;
