import { 
  Building2, Handshake, FileText, Wind, 
  Factory, Home, Wrench, ClipboardCheck 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import cciFactory from "@/assets/cci-factory.png";
import solarFlower from "@/assets/solar-flower.png";

const services = [
  { 
    icon: Building2, 
    name: "Solar Turnkey Solutions", 
    description: "Complete end-to-end solar project delivery from design to commissioning" 
  },
  { 
    icon: Factory, 
    name: "EPC Services", 
    description: "Engineering, Procurement & Construction for industrial solar plants" 
  },
  { 
    icon: FileText, 
    name: "PPA Model", 
    description: "Power Purchase Agreement with zero upfront investment" 
  },
  { 
    icon: Wind, 
    name: "Hybrid Energy Solutions", 
    description: "Solar + Wind integrated renewable energy systems" 
  },
  { 
    icon: Home, 
    name: "Rooftop Solar", 
    description: "Solar lease model for commercial buildings and industries" 
  },
  { 
    icon: Wrench, 
    name: "O&M Services", 
    description: "24/7 Operations & Maintenance support" 
  },
  { 
    icon: ClipboardCheck, 
    name: "Consultation", 
    description: "Expert advisory for renewable energy projects" 
  },
  { 
    icon: Handshake, 
    name: "Bio CNG Plants", 
    description: "Consultation and construction services for Bio CNG plants" 
  },
];

const SlideServices = () => {
  return (
    <div className="min-h-[calc(100vh-7rem)] md:min-h-[calc(100vh-7.5rem)] px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 md:space-y-4 animate-fade-in">
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
            Comprehensive Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Our <span className="solar-gradient-text">Services</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Solar for Industries - Group Captive & Open Access Solutions
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative rounded-xl overflow-hidden h-40 md:h-52">
            <img src={cciFactory} alt="CCI Factory" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
              <span className="text-foreground font-semibold">Industrial Solar Solutions</span>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden h-40 md:h-52">
            <img src={solarFlower} alt="Solar Innovation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
              <span className="text-foreground font-semibold">Innovative Solar Technology</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <Card
              key={service.name}
              className="border-border bg-card hover:shadow-lg hover:border-solar-orange/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-4 md:p-5 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-solar-orange/20 to-primary/20 flex items-center justify-center group-hover:from-solar-orange group-hover:to-solar-orange/70 transition-all">
                  <service.icon className="w-6 h-6 text-solar-orange group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-foreground">{service.name}</h3>
                <p className="text-xs text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideServices;
