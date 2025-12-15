import { 
  Sun, Battery, Thermometer, Droplets, Lightbulb, 
  Gauge, Zap, Car, LayoutGrid 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import solarFlowerImg from "@/assets/solar-flower.png";

const products = [
  { icon: LayoutGrid, name: "Solar Panels", description: "High-efficiency monocrystalline & polycrystalline panels" },
  { icon: Zap, name: "Solar Inverter", description: "String & central inverters for optimal power conversion" },
  { icon: Battery, name: "Solar Battery", description: "Lithium-ion & lead-acid storage solutions" },
  { icon: Thermometer, name: "Solar Water Heater", description: "ETC & FPC water heating systems" },
  { icon: Sun, name: "Solar AC", description: "Energy-efficient solar air conditioning units" },
  { icon: Lightbulb, name: "Solar Street Light", description: "All-in-one & split solar street lights" },
  { icon: Droplets, name: "Solar Pump", description: "Submersible & surface solar water pumps" },
  { icon: Gauge, name: "Smart Meter", description: "IoT-enabled energy monitoring systems" },
  { icon: Car, name: "Solar EV Charger", description: "Solar-powered electric vehicle charging stations" },
];

const SlideProducts = () => {
  return (
    <div className="min-h-[calc(100vh-7rem)] md:min-h-[calc(100vh-7.5rem)] px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 md:space-y-4 animate-fade-in">
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
            Complete Green Energy Range
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Our <span className="solar-gradient-text">Products</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Powering Sustainability with Innovation
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative rounded-2xl overflow-hidden h-48 md:h-64">
          <img 
            src={solarFlowerImg} 
            alt="Innovative Solar Technology" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent flex items-center">
            <div className="p-6 md:p-8 max-w-md">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Innovative Solar Solutions</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Cutting-edge technology for maximum energy efficiency
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {products.map((product, index) => (
            <Card
              key={product.name}
              className="border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-4 md:p-6 text-center space-y-3">
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-2xl bg-gradient-to-br from-solar-orange to-solar-orange/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <product.icon className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <h3 className="text-sm md:text-lg font-bold text-foreground">{product.name}</h3>
                <p className="text-xs md:text-sm text-muted-foreground hidden md:block">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideProducts;
