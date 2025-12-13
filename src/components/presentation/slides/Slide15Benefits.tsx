import { IndianRupee, Leaf, Zap, Shield, TrendingUp, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: IndianRupee,
    title: "Significant Cost Savings",
    description: "26% reduction in power costs with protection against future tariff increases",
    metric: "₹50+ Cr",
    metricLabel: "25-Year Savings",
    color: "primary",
  },
  {
    icon: Leaf,
    title: "ESG Compliance",
    description: "Meet sustainability goals with 100% green energy from captive solar plant",
    metric: "30,000+",
    metricLabel: "Tons CO2 Avoided/Year",
    color: "primary",
  },
  {
    icon: Zap,
    title: "Energy Security",
    description: "Reduce dependence on grid power with reliable captive generation",
    metric: "100%",
    metricLabel: "Power Security",
    color: "solar-blue",
  },
  {
    icon: Shield,
    title: "Price Stability",
    description: "Fixed tariff formula provides immunity from DISCOM tariff volatility",
    metric: "25 Years",
    metricLabel: "Price Certainty",
    color: "solar-blue",
  },
  {
    icon: TrendingUp,
    title: "Asset Value Creation",
    description: "BOOT model: Receive a 20+ MW asset worth ₹80+ Cr after 6 years",
    metric: "₹80+ Cr",
    metricLabel: "Asset Value (BOOT)",
    color: "solar-orange",
  },
  {
    icon: Award,
    title: "Brand Enhancement",
    description: "Demonstrate environmental leadership and corporate responsibility",
    metric: "Green",
    metricLabel: "Corporate Image",
    color: "solar-orange",
  },
];

const Slide15Benefits = () => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return { bg: "solar-gradient", text: "text-primary" };
      case "solar-blue":
        return { bg: "bg-solar-blue", text: "text-solar-blue" };
      case "solar-orange":
        return { bg: "bg-solar-orange", text: "text-solar-orange" };
      default:
        return { bg: "solar-gradient", text: "text-primary" };
    }
  };

  return (
    <div className="min-h-[calc(100vh-7.5rem)] px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Value Proposition
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Key Benefits to <span className="solar-gradient-text">CCI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive value creation across cost, sustainability, and operations
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const colors = getColorClasses(benefit.color);
            return (
              <Card 
                key={benefit.title}
                className="border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center`}>
                    <benefit.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{benefit.description}</p>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <div className={`text-2xl font-display font-bold ${colors.text}`}>
                      {benefit.metric}
                    </div>
                    <div className="text-xs text-muted-foreground">{benefit.metricLabel}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Summary */}
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="p-6">
            <div className="text-center">
              <h4 className="font-semibold text-foreground text-lg mb-2">
                Transform Your Energy Future
              </h4>
              <p className="text-muted-foreground">
                Whether you choose BOOT for asset ownership or PPA for hassle-free savings, 
                Unite Solar delivers a comprehensive solution that aligns with CCI's operational 
                and sustainability objectives.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Slide15Benefits;
