import { MapPin, Maximize2, Sun, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const landDetails = [
  {
    icon: Maximize2,
    label: "Total Land Available",
    value: "50+ Acres",
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
    <div className="min-h-[calc(100vh-7.5rem)] px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Project Scale
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Land <span className="solar-gradient-text">Availability</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Adequate land resources to support a large-scale captive solar installation
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div 
              className="h-80 rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80')`,
              }}
            />
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full solar-gradient flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">CCI Thandur</div>
                  <div className="text-sm text-muted-foreground">Project Location</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Details */}
          <div className="space-y-6">
            {landDetails.map((detail, index) => (
              <Card 
                key={detail.label}
                className="border-border bg-card hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl solar-gradient flex items-center justify-center flex-shrink-0">
                      <detail.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">{detail.label}</div>
                      <div className="text-3xl font-display font-bold text-foreground">{detail.value}</div>
                      <div className="text-sm text-muted-foreground mt-1">{detail.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center p-6 bg-secondary rounded-xl">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Note:</span> Land utilization follows 
            industry-standard 4-5 acres per MW for ground-mounted solar installations with adequate 
            spacing for maintenance access and optimal panel performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide04LandAvailability;
