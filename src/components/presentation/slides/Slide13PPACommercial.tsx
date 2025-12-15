import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingDown, IndianRupee, Percent } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// PPA Rate: ₹5/unit, 30 Million units/year, 30 years
// Assume grid tariff starts at ₹8.5 and escalates 5% annually
const savingsData = [
  { year: "Year 1", gridCost: 8.5, ppaCost: 5.0, savings: 3.5 },
  { year: "Year 5", gridCost: 10.3, ppaCost: 5.0, savings: 5.3 },
  { year: "Year 10", gridCost: 13.2, ppaCost: 5.0, savings: 8.2 },
  { year: "Year 15", gridCost: 16.9, ppaCost: 5.0, savings: 11.9 },
  { year: "Year 20", gridCost: 21.5, ppaCost: 5.0, savings: 16.5 },
  { year: "Year 30", gridCost: 35.0, ppaCost: 5.0, savings: 30.0 },
];

// 30 Million units * average savings over 30 years = ~₹450 Cr+ total savings
const Slide13PPACommercial = () => {
  return (
    <div className="min-h-[calc(100vh-7rem)] md:min-h-[calc(100vh-7.5rem)] px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 md:space-y-4">
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-solar-blue/10 text-solar-blue rounded-full text-xs md:text-sm font-medium">
            PPA Model
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Commercial <span className="solar-gradient-text">Terms & Savings</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            ₹5/unit fixed PPA rate with protection against future tariff hikes - 30 years contract
          </p>
        </div>

        {/* Key Metrics - Mobile First */}
        <div className="grid grid-cols-3 gap-2 md:hidden">
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-3 text-center">
              <div className="text-2xl font-display font-bold text-primary">₹5</div>
              <div className="text-xs text-muted-foreground mt-1">PPA Rate</div>
            </CardContent>
          </Card>
          <Card className="border-solar-blue/30 bg-solar-blue/5">
            <CardContent className="p-3 text-center">
              <div className="text-2xl font-display font-bold text-solar-blue">30M</div>
              <div className="text-xs text-muted-foreground mt-1">Units/Year</div>
            </CardContent>
          </Card>
          <Card className="border-solar-orange/30 bg-solar-orange/5">
            <CardContent className="p-3 text-center">
              <div className="text-2xl font-display font-bold text-solar-orange">₹450Cr+</div>
              <div className="text-xs text-muted-foreground mt-1">30Y Savings</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Chart */}
          <div className="lg:col-span-2">
            <Card className="border-border bg-card h-full">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="flex items-center gap-2 text-foreground text-base md:text-lg">
                  <TrendingDown className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  30-Year Savings Projection (₹/Unit)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="h-60 md:h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={savingsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis 
                        dataKey="year" 
                        tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
                      />
                      <YAxis 
                        tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
                        width={35}
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
                      <Legend wrapperStyle={{ fontSize: '12px' }} />
                      <Bar dataKey="gridCost" name="Grid Tariff" fill="hsl(var(--muted-foreground))" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="ppaCost" name="PPA Tariff" fill="hsl(142, 71%, 35%)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Metrics - Desktop */}
          <div className="hidden md:flex flex-col space-y-4">
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-6 text-center">
                <IndianRupee className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-4xl font-display font-bold text-primary">₹5.00</div>
                <div className="text-foreground font-medium mt-1">Fixed PPA Rate</div>
                <div className="text-sm text-muted-foreground mt-2">
                  vs ₹8.50 grid tariff (Year 1)
                </div>
              </CardContent>
            </Card>

            <Card className="border-solar-blue/30 bg-solar-blue/5">
              <CardContent className="p-6 text-center">
                <Percent className="w-10 h-10 text-solar-blue mx-auto mb-3" />
                <div className="text-4xl font-display font-bold text-solar-blue">30M</div>
                <div className="text-foreground font-medium mt-1">Units/Year Consumption</div>
                <div className="text-sm text-muted-foreground mt-2">
                  Average annual consumption
                </div>
              </CardContent>
            </Card>

            <Card className="border-solar-orange/30 bg-solar-orange/5">
              <CardContent className="p-6 text-center">
                <TrendingDown className="w-10 h-10 text-solar-orange mx-auto mb-3" />
                <div className="text-4xl font-display font-bold text-solar-orange">₹450+ Cr</div>
                <div className="text-foreground font-medium mt-1">Estimated 30-Year Savings</div>
                <div className="text-sm text-muted-foreground mt-2">
                  Based on 30M units @ avg ₹15 savings
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Note */}
        <div className="text-center p-3 md:p-4 bg-secondary rounded-xl text-xs md:text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Note:</span> Projections assume 5% annual 
          grid tariff escalation over 30 years. 30 Million units annual consumption at ₹5/unit PPA rate.
        </div>
      </div>
    </div>
  );
};

export default Slide13PPACommercial;
