import { Card, CardContent } from "@/components/ui/card";

const brands = [
  { name: "Vikram Solar", category: "Modules", logo: "https://www.vikramsolar.com/wp-content/uploads/2023/03/vikram-solar-logo.png" },
  { name: "Adani", category: "Modules", logo: "https://www.adanisolar.com/sites/default/files/logo.png" },
  { name: "Tata Power Solar", category: "Modules", logo: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tata_Power_Solar_logo.png" },
  { name: "Goldi Solar", category: "Modules", logo: "https://www.goldisolar.com/wp-content/uploads/2023/01/goldi-solar-logo.png" },
  { name: "Waaree", category: "Modules", logo: "https://www.waaree.com/assets/images/logos/waaree-logo.png" },
  { name: "Sunplus", category: "Modules", logo: null },
  { name: "Sungrow", category: "Inverters", logo: "https://en.sungrowpower.com/image/logo.png" },
  { name: "Polycab", category: "Cables", logo: "https://www.polycab.com/wp-content/uploads/2020/10/polycab-logo.png" },
  { name: "Renewsys", category: "Modules", logo: "https://www.renewsysindia.com/images/logo.png" },
  { name: "Siemens", category: "Equipment", logo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Siemens-logo.svg" },
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
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg p-2">
                  {brand.logo ? (
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <span className={`text-primary font-bold text-xl ${brand.logo ? 'hidden' : ''}`}>{brand.name.charAt(0)}</span>
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
