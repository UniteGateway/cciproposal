import { MapPin, Maximize2, Sun, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import cciIndustry from "@/assets/cci-industry.png";

const landDetails = [
  {
    icon: Maximize2,
    label: "Total Land Available",
    value: "400+ Acres",
    description: "Contiguous land parcel suitable for solar installation",
  },
  {
    icon: Sun,
    label: "Generation Capacity",
    value: "20+ MW",
    description: "Based on land area and optimal panel spacing",
  },
  {
    icon: Zap,
    label: "Annual Generation",
    value: "~30 Million Units",
    description: "Estimated annual energy production",
  },
];

const Slide04LandAvailability = () => {
  return (
    <div className="min-h-[calc(100vh-7rem)] md:min-h-[calc(100vh-7.5rem)] px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 md:space-y-4">
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
            Project Scale
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Land <span className="solar-gradient-text">Availability</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Adequate land resources to support a large-scale captive solar installation
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div 
              className="h-56 md:h-80 rounded-xl md:rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url(${cciIndustry})`,
              }}
            />
            <div className="absolute -bottom-3 -right-2 md:-bottom-4 md:-right-4 bg-card border border-border rounded-lg md:rounded-xl p-3 md:p-4 shadow-lg">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full solar-gradient flex items-center justify-center">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-lg md:text-2xl font-bold text-foreground">CCI Thandur</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Project Location</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Details */}
          <div className="space-y-4 md:space-y-6 mt-4 lg:mt-0">
            {landDetails.map((detail) => (
              <Card 
                key={detail.label}
                className="border-border bg-card hover:shadow-md transition-shadow"
              >
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl solar-gradient flex items-center justify-center flex-shrink-0">
                      <detail.icon className="w-5 h-5 md:w-7 md:h-7 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs md:text-sm text-muted-foreground">{detail.label}</div>
                      <div className="text-xl md:text-3xl font-display font-bold text-foreground">{detail.value}</div>
                      <div className="text-xs md:text-sm text-muted-foreground mt-1">{detail.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center p-4 md:p-6 bg-secondary rounded-xl">
          <p className="text-xs md:text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Note:</span> Land utilization follows 
            industry-standard 4-5 acres per MW for ground-mounted solar installations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide04LandAvailability;
