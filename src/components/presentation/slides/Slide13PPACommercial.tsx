import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingDown, IndianRupee, Percent } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const savingsData = [
  { year: "Year 1", gridCost: 8.5, ppaCost: 6.29, savings: 2.21 },
  { year: "Year 5", gridCost: 10.2, ppaCost: 6.5, savings: 3.7 },
  { year: "Year 10", gridCost: 12.5, ppaCost: 6.8, savings: 5.7 },
  { year: "Year 15", gridCost: 15.0, ppaCost: 7.1, savings: 7.9 },
  { year: "Year 20", gridCost: 18.0, ppaCost: 7.4, savings: 10.6 },
  { year: "Year 25", gridCost: 21.5, ppaCost: 7.7, savings: 13.8 },
];

const Slide13PPACommercial = () => {
  return (
    <div className="min-h-[calc(100vh-7.5rem)] px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-1.5 bg-solar-blue/10 text-solar-blue rounded-full text-sm font-medium">
            PPA Model
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Commercial <span className="solar-gradient-text">Terms & Savings</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            26% discount on prevailing DISCOM tariff with protection against future tariff hikes
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chart */}
          <div className="lg:col-span-2">
            <Card className="border-border bg-card h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <TrendingDown className="w-5 h-5 text-primary" />
                  25-Year Savings Projection (₹/Unit)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={savingsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis 
                        dataKey="year" 
                        tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                      />
                      <YAxis 
                        tick={{ fill: 'hsl(var(--muted-foreground))' }}
                        label={{ 
                          value: '₹/kWh', 
                          angle: -90, 
                          position: 'insideLeft',
                          fill: 'hsl(var(--muted-foreground))'
                        }}
                      />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                        }}
                        formatter={(value: number, name: string) => {
                          const labels: Record<string, string> = {
                            gridCost: 'Grid Tariff',
                            ppaCost: 'PPA Tariff',
                            savings: 'Savings'
                          };
                          return [`₹${value.toFixed(2)}`, labels[name] || name];
                        }}
                      />
                      <Legend />
                      <Bar dataKey="gridCost" name="Grid Tariff" fill="hsl(var(--muted-foreground))" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="ppaCost" name="PPA Tariff" fill="hsl(142, 71%, 35%)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Metrics */}
          <div className="space-y-4">
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-6 text-center">
                <Percent className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-4xl font-display font-bold text-primary">26%</div>
                <div className="text-foreground font-medium mt-1">Discount on Grid Tariff</div>
                <div className="text-sm text-muted-foreground mt-2">
                  Fixed discount throughout contract
                </div>
              </CardContent>
            </Card>

            <Card className="border-solar-blue/30 bg-solar-blue/5">
              <CardContent className="p-6 text-center">
                <IndianRupee className="w-10 h-10 text-solar-blue mx-auto mb-3" />
                <div className="text-4xl font-display font-bold text-solar-blue">₹6.29</div>
                <div className="text-foreground font-medium mt-1">Starting PPA Tariff</div>
                <div className="text-sm text-muted-foreground mt-2">
                  vs ₹8.50 grid tariff (Year 1)
                </div>
              </CardContent>
            </Card>

            <Card className="border-solar-orange/30 bg-solar-orange/5">
              <CardContent className="p-6 text-center">
                <TrendingDown className="w-10 h-10 text-solar-orange mx-auto mb-3" />
                <div className="text-4xl font-display font-bold text-solar-orange">₹50+ Cr</div>
                <div className="text-foreground font-medium mt-1">Estimated 25-Year Savings</div>
                <div className="text-sm text-muted-foreground mt-2">
                  Based on tariff projections
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Note */}
        <div className="text-center p-4 bg-secondary rounded-xl text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Note:</span> Projections assume 5% annual 
          grid tariff escalation. Actual savings may vary based on DISCOM tariff revisions.
          PPA includes modest annual escalation (2-3%) to account for O&M cost increases.
        </div>
      </div>
    </div>
  );
};

export default Slide13PPACommercial;
