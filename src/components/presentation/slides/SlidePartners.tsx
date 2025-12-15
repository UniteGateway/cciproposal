import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const partners = [
  {
    name: "SOLARIS",
    description: "Strategic solar development partner with 1000+ MW experience",
    type: "Technology Partner",
    initial: "S",
    color: "from-red-500 to-red-600",
  },
  {
    name: "SAATVIK",
    description: "Premium solar module manufacturing partner",
    type: "Manufacturing Partner",
    initial: "S",
    color: "from-green-500 to-green-600",
  },
  {
    name: "FOUR SOLAR",
    description: "EPC collaboration partner",
    type: "EPC Partner",
    initial: "4",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    name: "UNISCAN",
    description: "Solar monitoring & analytics partner",
    type: "Technology Partner",
    initial: "U",
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "SESOLA",
    description: "Strategic solar development partner",
    type: "Development Partner",
    initial: "S",
    color: "from-blue-500 to-blue-600",
  },
];

const SlidePartners = () => {
  return (
    <div className="min-h-[calc(100vh-7rem)] md:min-h-[calc(100vh-7.5rem)] px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 md:space-y-4 animate-fade-in">
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
            Our Network
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Strategic <span className="solar-gradient-text">Partners</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Collaborating with industry leaders for excellence in solar energy solutions
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <Card
              key={partner.name}
              className="border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-5 md:p-6 space-y-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${partner.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                  <span className="text-white font-bold text-2xl">{partner.initial}</span>
                </div>
                <div>
                  <span className="text-xs text-solar-orange font-medium uppercase tracking-wider">
                    {partner.type}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mt-1">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{partner.description}</p>
                </div>
                <div className="flex items-center gap-2 text-primary text-sm font-medium cursor-pointer hover:gap-3 transition-all">
                  <span>Learn more</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-gradient-to-r from-primary/10 via-solar-blue/10 to-solar-orange/10 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Partnership Benefits</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: "Shared", label: "Expertise & Resources" },
              { value: "Extended", label: "Geographic Reach" },
              { value: "Enhanced", label: "Service Offerings" },
              { value: "Combined", label: "Technical Excellence" },
            ].map((item) => (
              <div key={item.label} className="text-center p-4 bg-card rounded-xl">
                <div className="text-lg font-bold text-primary">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidePartners;
