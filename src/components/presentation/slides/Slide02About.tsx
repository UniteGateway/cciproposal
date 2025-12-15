import { Sun, Zap, Shield, Users, Award, Building2, Globe, Clock, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import founderImg from "@/assets/founder.png";

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
    description: "Successfully commissioned 1000+ MW across India with Solaris",
  },
  {
    icon: Building2,
    title: "Industrial Focus",
    description: "Specialized in large-scale captive solar projects",
  },
];

const groupCompanies = [
  { name: "Unite Group Inc.", location: "USA" },
  { name: "Unite Developers Inc.", location: "USA" },
  { name: "Unite Developers Global Inc.", location: "India" },
];

const Slide02About = () => {
  return (
    <div className="min-h-[calc(100vh-7rem)] md:min-h-[calc(100vh-7.5rem)] px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 md:space-y-4 animate-fade-in">
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
            Company Overview
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            About <span className="solar-gradient-text">Unite Solar</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Unite Solar, established in India in 2023, is powered by <strong className="text-foreground">Unite Developers Inc., USA</strong> and <strong className="text-foreground">Unite Developers Global Inc, India</strong>, 
            promoted by <strong className="text-solar-orange">Dr. Ravi Chandra</strong>, a visionary leader in renewable energy and sustainable infrastructure development.
          </p>
        </div>

        {/* Group Companies Banner */}
        <div className="bg-gradient-to-r from-primary/10 via-solar-blue/10 to-solar-orange/10 rounded-2xl p-4 md:p-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Part of Unite Group</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {groupCompanies.map((company) => (
              <div key={company.name} className="bg-card rounded-xl p-4 text-center border border-border">
                <div className="font-bold text-foreground">{company.name}</div>
                <div className="text-sm text-solar-orange">{company.location}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {capabilities.map((item, index) => (
            <Card 
              key={item.title}
              className="border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl solar-gradient flex items-center justify-center">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <h3 className="text-base md:text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 pt-4 md:pt-6">
          {[
            { value: "1000+", label: "MW Completed with Solaris" },
            { value: "15+", label: "Years Combined Experience" },
            { value: "100+", label: "Projects Delivered" },
            { value: "24/7", label: "O&M Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-3 md:p-4 bg-secondary rounded-xl">
              <div className="text-2xl md:text-3xl font-display font-bold text-primary">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Slide02About;
