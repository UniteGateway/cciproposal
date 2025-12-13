import { FileText, Calendar, Sun, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Slide12PPAOverview = () => {
  return (
    <div className="min-h-[calc(100vh-7.5rem)] px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-1.5 bg-solar-blue/10 text-solar-blue rounded-full text-sm font-medium">
            PPA Model Details
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            PPA Model <span className="solar-gradient-text">Overview</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Power Purchase Agreement: 25-year discounted power supply with zero investment
          </p>
        </div>

        {/* Structure Diagram */}
        <Card className="border-border bg-card">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Unite Solar */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-2xl solar-gradient flex items-center justify-center mx-auto">
                  <Sun className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground text-xl">Unite Solar</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Owns the plant</p>
                  <p>• 100% investment</p>
                  <p>• Complete O&M</p>
                  <p>• Performance guarantee</p>
                </div>
              </div>

              {/* Arrow with Agreement */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-full h-1 bg-gradient-to-r from-primary to-solar-blue rounded-full relative">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-center">
                    <FileText className="w-8 h-8 text-solar-blue mx-auto mb-2" />
                    <span className="text-sm font-medium text-foreground">25-Year PPA</span>
                  </div>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-center">
                    <span className="text-sm text-muted-foreground">Power Supply</span>
                    <div className="text-lg font-bold text-primary">@ 26% Discount</div>
                  </div>
                </div>
              </div>

              {/* CCI */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-2xl bg-solar-blue flex items-center justify-center mx-auto">
                  <Building className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground text-xl">CCI Thandur</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Consumes power</p>
                  <p>• Zero investment</p>
                  <p>• No O&M burden</p>
                  <p>• 26% cost savings</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="border-border bg-card">
            <CardContent className="p-5 text-center">
              <div className="w-12 h-12 rounded-xl bg-solar-blue flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-sm text-muted-foreground">Contract Period</div>
              <div className="text-2xl font-bold text-foreground mt-1">25 Years</div>
            </CardContent>
          </Card>
          <Card className="border-border bg-card">
            <CardContent className="p-5 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-primary-foreground">%</span>
              </div>
              <div className="text-sm text-muted-foreground">Tariff Discount</div>
              <div className="text-2xl font-bold text-foreground mt-1">26%</div>
            </CardContent>
          </Card>
          <Card className="border-border bg-card">
            <CardContent className="p-5 text-center">
              <div className="w-12 h-12 rounded-xl bg-solar-orange flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-primary-foreground">₹</span>
              </div>
              <div className="text-sm text-muted-foreground">CCI Investment</div>
              <div className="text-2xl font-bold text-foreground mt-1">Zero</div>
            </CardContent>
          </Card>
          <Card className="border-border bg-card">
            <CardContent className="p-5 text-center">
              <div className="w-12 h-12 rounded-xl solar-gradient flex items-center justify-center mx-auto mb-3">
                <Sun className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-sm text-muted-foreground">Ownership</div>
              <div className="text-2xl font-bold text-foreground mt-1">Unite Solar</div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Highlight */}
        <div className="text-center p-6 bg-solar-blue/10 rounded-xl">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Simple Model:</span> CCI pays only for the 
            power consumed at a discounted rate. Unite Solar handles everything else for 25 years.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide12PPAOverview;
