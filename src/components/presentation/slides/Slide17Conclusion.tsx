import { CheckCircle2, ArrowRight, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import cciFactory from "@/assets/cci-factory.png";

const keyTakeaways = [
  "20+ MW captive solar project with proven feasibility",
  "Existing infrastructure enables cost-effective implementation",
  "Two flexible commercial models (BOOT & PPA) to choose from",
  "26% tariff savings with long-term price stability",
  "Zero upfront investment required from CCI",
  "Complete turnkey solution with O&M support",
];

const nextSteps = [
  { step: 1, title: "Model Selection", description: "Choose between BOOT or PPA based on priorities" },
  { step: 2, title: "Commercial Negotiation", description: "Finalize terms, tariff, and contract details" },
  { step: 3, title: "CMD Enhancement", description: "Initiate application for demand enhancement" },
  { step: 4, title: "Project Kickoff", description: "Begin detailed engineering and procurement" },
];

const Slide17Conclusion = () => {
  return (
    <div className="min-h-[calc(100vh-7.5rem)] px-6 py-12 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${cciFactory})` }}
      />
      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Summary
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Conclusion & <span className="solar-gradient-text">Way Forward</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A transformative opportunity for sustainable energy and cost optimization
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Key Takeaways */}
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Key Takeaways</h3>
              <div className="space-y-4">
                {keyTakeaways.map((takeaway, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-3 bg-secondary rounded-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{takeaway}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Proposed Next Steps</h3>
              <div className="space-y-4">
                {nextSteps.map((item) => (
                  <div 
                    key={item.step}
                    className="flex items-start gap-4 p-3"
                  >
                    <div className="w-10 h-10 rounded-full solar-gradient flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold">{item.step}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-solar-blue/10">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Ready to Transform Your Energy Future?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Unite Solar is committed to delivering a world-class solar solution for CCI Thandur. 
              Let's discuss the next steps to make this project a reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 gap-2"
                asChild
              >
                <a href="tel:9667660773">
                  <Phone className="w-5 h-5" />
                  Call: 9667660773
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="gap-2"
                asChild
              >
                <a href="mailto:info@unitesolar.in">
                  <Mail className="w-5 h-5" />
                  Email: info@unitesolar.in
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Slide17Conclusion;
