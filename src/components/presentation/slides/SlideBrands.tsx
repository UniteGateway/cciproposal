import { Card, CardContent } from "@/components/ui/card";

const brands = [
  { name: "Vikram Solar", category: "Modules", color: "from-orange-500 to-orange-600" },
  { name: "Adani", category: "Modules", color: "from-blue-600 to-blue-700" },
  { name: "Tata Power Solar", category: "Modules", color: "from-blue-800 to-blue-900" },
  { name: "Goldi Solar", category: "Modules", color: "from-yellow-500 to-yellow-600" },
  { name: "Waaree", category: "Modules", color: "from-red-500 to-red-600" },
  { name: "Sunplus", category: "Modules", color: "from-green-500 to-green-600" },
  { name: "Sungrow", category: "Inverters", color: "from-orange-400 to-orange-500" },
  { name: "Polycab", category: "Cables", color: "from-red-600 to-red-700" },
  { name: "Renewsys", category: "Modules", color: "from-green-600 to-green-700" },
  { name: "Siemens", category: "Equipment", color: "from-teal-500 to-teal-600" },
];

const SlideBrands = () => {
  return (
    <div className="min-h-[calc(100vh-7rem)] md:min-h-[calc(100vh-7.5rem)] px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 md:space-y-4 animate-fade-in">
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
            Quality Partners
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Brands We <span className="solar-gradient-text">Use</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            We partner with industry-leading manufacturers for reliable and high-performance solar solutions
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <Card
              key={brand.name}
              className="border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-4 md:p-6 text-center space-y-3">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                  <span className="text-white font-bold text-xl">{brand.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm md:text-base">{brand.name}</h3>
                  <p className="text-xs text-muted-foreground">{brand.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Assurance */}
        <div className="bg-gradient-to-r from-primary/10 via-solar-blue/10 to-solar-orange/10 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 text-center">Why These Brands?</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Tier 1", desc: "Bankable manufacturers" },
              { title: "Warranty", desc: "25+ years performance guarantee" },
              { title: "Efficiency", desc: "Latest technology modules" },
              { title: "Reliability", desc: "Proven field performance" },
            ].map((item) => (
              <div key={item.title} className="text-center p-4 bg-card rounded-xl">
                <div className="text-lg font-bold text-primary">{item.title}</div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBrands;
