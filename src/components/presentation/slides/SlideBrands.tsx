import { Card, CardContent } from "@/components/ui/card";
import brandsGrid from "@/assets/brands-grid.png";

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

        {/* Brands Image */}
        <Card className="border-border bg-card overflow-hidden">
          <CardContent className="p-0">
            <img 
              src={brandsGrid} 
              alt="Leading Solar Brands & Products - Vikram Solar, Adani, Tata Power Solar, Waaree, Sunplus, Sungrow, Polycab, Renewsys, Siemens"
              className="w-full h-auto object-contain"
            />
          </CardContent>
        </Card>

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
