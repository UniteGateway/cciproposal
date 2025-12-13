import { Scale, Globe, TrendingUp, Shield, Leaf, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const strategicPoints = [
  {
    icon: Scale,
    title: "Policy Alignment",
    description: "Aligns with government push for renewable energy adoption and net-zero commitments",
  },
  {
    icon: Globe,
    title: "Carbon Neutrality Goals",
    description: "Significant step towards achieving carbon neutrality and sustainability targets",
  },
  {
    icon: TrendingUp,
    title: "Future-Proof Investment",
    description: "Protection against rising conventional energy costs and regulatory changes",
  },
  {
    icon: Shield,
    title: "Energy Independence",
    description: "Reduced vulnerability to grid outages and power quality issues",
  },
  {
    icon: Leaf,
    title: "Green Credentials",
    description: "Enhanced corporate image and stakeholder confidence in sustainability commitment",
  },
  {
    icon: Building,
    title: "Operational Excellence",
    description: "Reliable power supply supporting uninterrupted industrial operations",
  },
];

const Slide16Strategic = () => {
  return (
    <div className="min-h-[calc(100vh-7.5rem)] px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Strategic Value
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Strategic <span className="solar-gradient-text">Advantages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond cost savings - positioning CCI for long-term success
          </p>
        </div>

        {/* Strategic Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategicPoints.map((point, index) => (
            <Card 
              key={point.title}
              className="border-border bg-card group hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl solar-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <point.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{point.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{point.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Policy Context */}
        <Card className="border-border bg-card">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Regulatory & Policy Context
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-secondary rounded-xl">
                <div className="text-2xl font-display font-bold text-primary">500 GW</div>
                <div className="text-foreground font-medium mt-1">Renewable Target</div>
                <div className="text-sm text-muted-foreground mt-2">India's 2030 goal</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-xl">
                <div className="text-2xl font-display font-bold text-solar-blue">Net Zero</div>
                <div className="text-foreground font-medium mt-1">By 2070</div>
                <div className="text-sm text-muted-foreground mt-2">National commitment</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-xl">
                <div className="text-2xl font-display font-bold text-solar-orange">RPO</div>
                <div className="text-foreground font-medium mt-1">Compliance</div>
                <div className="text-sm text-muted-foreground mt-2">Renewable purchase obligation</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Note */}
        <div className="text-center p-6 bg-solar-blue/10 rounded-xl">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Industry Leadership:</span> By adopting 
            solar power, CCI positions itself as an industry leader in sustainable manufacturing, 
            attracting environmentally conscious partners and stakeholders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide16Strategic;
