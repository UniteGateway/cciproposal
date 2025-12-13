import { Key, Wrench, IndianRupee, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const amcPackages = [
  {
    name: "Basic AMC",
    price: "₹4 Lakhs/MW/Year",
    features: [
      "Preventive maintenance",
      "Module cleaning",
      "Basic repairs",
      "Quarterly inspections",
    ],
  },
  {
    name: "Comprehensive AMC",
    price: "₹5 Lakhs/MW/Year",
    features: [
      "All Basic AMC services",
      "24/7 monitoring",
      "Performance optimization",
      "Major repairs included",
      "Spare parts coverage",
      "Priority response",
    ],
    recommended: true,
  },
];

const Slide11BOOTPostTransfer = () => {
  return (
    <div className="min-h-[calc(100vh-7.5rem)] px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Post BOOT Period
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Post-Transfer <span className="solar-gradient-text">O&M Support</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Optional annual maintenance support after asset ownership transfers to CCI
          </p>
        </div>

        {/* Transfer Process */}
        <Card className="border-border bg-card">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-full solar-gradient flex items-center justify-center mx-auto">
                  <Key className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">Ownership Transfer</h3>
                <p className="text-muted-foreground text-sm">
                  Complete plant ownership transfers to CCI at end of Year 6
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-full bg-solar-blue flex items-center justify-center mx-auto">
                  <Calendar className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">Remaining Plant Life</h3>
                <p className="text-muted-foreground text-sm">
                  19+ years of productive life remaining with proper maintenance
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-full bg-solar-orange flex items-center justify-center mx-auto">
                  <Wrench className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">Optional AMC</h3>
                <p className="text-muted-foreground text-sm">
                  CCI can opt for Unite Solar AMC or manage operations independently
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AMC Packages */}
        <div className="grid md:grid-cols-2 gap-8">
          {amcPackages.map((pkg) => (
            <Card 
              key={pkg.name}
              className={`border-2 ${pkg.recommended ? 'border-primary' : 'border-border'} bg-card relative`}
            >
              {pkg.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  Recommended
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-foreground">{pkg.name}</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-display font-bold text-primary">{pkg.price}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value Calculation */}
        <Card className="border-solar-orange/30 bg-solar-orange/5">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <IndianRupee className="w-8 h-8 text-solar-orange flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground text-lg">Annual AMC Investment</h4>
                <p className="text-muted-foreground">
                  For a 20 MW plant: Comprehensive AMC = ₹5 Lakhs × 20 MW = <span className="font-bold text-foreground">₹1 Crore/Year</span>
                  <br />
                  <span className="text-sm">Ensures optimal performance and extends plant life beyond 25 years</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Slide11BOOTPostTransfer;
