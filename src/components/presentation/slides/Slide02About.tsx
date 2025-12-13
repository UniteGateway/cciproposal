import { Sun, Zap, Shield, Users, Award, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const capabilities = [
  {
    icon: Sun,
    title: "Solar EPC Expertise",
    description: "End-to-end solar project execution with proven track record",
  },
  {
    icon: Zap,
    title: "Power Solutions",
    description: "Comprehensive energy solutions for industrial clients",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Premium components and industry-leading warranties",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled engineers and project management professionals",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Successfully commissioned 100+ MW across India",
  },
  {
    icon: Building2,
    title: "Industrial Focus",
    description: "Specialized in large-scale captive solar projects",
  },
];

const Slide02About = () => {
  return (
    <div className="min-h-[calc(100vh-7.5rem)] px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Company Overview
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            About <span className="solar-gradient-text">Unite Solar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leading solar EPC company delivering sustainable energy solutions 
            for industrial and commercial establishments across India.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, index) => (
            <Card 
              key={item.title}
              className="border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl solar-gradient flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
          {[
            { value: "100+", label: "MW Commissioned" },
            { value: "50+", label: "Happy Clients" },
            { value: "10+", label: "Years Experience" },
            { value: "24/7", label: "O&M Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 bg-secondary rounded-xl">
              <div className="text-3xl font-display font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide02About;
