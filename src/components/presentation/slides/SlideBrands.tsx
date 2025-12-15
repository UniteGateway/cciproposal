import { Award, Shield, Star } from "lucide-react";

const brands = [
  { name: "Vikram Solar", category: "Modules" },
  { name: "Adani", category: "Modules" },
  { name: "Tata Power Solar", category: "Modules" },
  { name: "Goldi Solar", category: "Modules" },
  { name: "Waaree", category: "Modules" },
  { name: "Sunplus", category: "Modules" },
  { name: "Sungrow", category: "Inverters" },
  { name: "Polycab", category: "Cables" },
  { name: "Renewsys", category: "Modules" },
  { name: "Siemens", category: "Equipment" },
];

const SlideBrands = () => {
  return (
    <div className="min-h-[calc(100vh-7rem)] md:min-h-[calc(100vh-7.5rem)] px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 md:space-y-4 animate-fade-in">
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-solar-orange/10 text-solar-orange rounded-full text-xs md:text-sm font-medium">
            Quality Assurance
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Brands We <span className="solar-gradient-text">Use</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            We partner with industry-leading manufacturers for reliable and high-performance solar solutions
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group bg-card border border-border rounded-xl p-4 md:p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-solar-blue/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-sm md:text-base">{brand.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{brand.category}</p>
            </div>
          ))}
        </div>

        {/* Quality Assurance Section */}
        <div className="grid md:grid-cols-3 gap-6 pt-4">
          <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Tier-1 Manufacturers</h4>
              <p className="text-sm text-muted-foreground mt-1">
                All components sourced from globally recognized Tier-1 manufacturers
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl">
            <div className="w-12 h-12 rounded-lg bg-solar-blue/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-solar-blue" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">25 Year Warranty</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Comprehensive warranties backed by manufacturer guarantees
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl">
            <div className="w-12 h-12 rounded-lg bg-solar-orange/10 flex items-center justify-center flex-shrink-0">
              <Star className="w-6 h-6 text-solar-orange" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Quality Certified</h4>
              <p className="text-sm text-muted-foreground mt-1">
                IEC, BIS certified components for reliability and performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBrands;
