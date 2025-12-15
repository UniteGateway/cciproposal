import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { TrendingUp, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const comparisonData = [
  { name: "Present CMD", value: 19.5, fill: "hsl(210, 100%, 40%)" },
  { name: "Additional CMD Required", value: 6, fill: "hsl(24, 95%, 53%)" },
  { name: "Solar Plant Capacity", value: 20, fill: "hsl(142, 71%, 35%)" },
];

const benefits = [
  "Full solar capacity utilization",
  "No curtailment of generation",
  "Optimal cost savings realization",
  "Future expansion headroom",
];

const Slide06CMDEnhancement = () => {
  return (
    <div className="min-h-[calc(100vh-7rem)] md:min-h-[calc(100vh-7.5rem)] px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 md:space-y-4">
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
            Infrastructure Upgrade
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            CMD <span className="solar-gradient-text">Enhancement</span> Required
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Approximately 30% increase in Contract Maximum Demand needed
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left - Chart */}
          <Card className="border-border bg-card">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="flex items-center gap-2 text-foreground text-base md:text-lg">
                <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                CMD Comparison
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6 pt-0">
              <div className="h-60 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={comparisonData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      type="number" 
                      domain={[0, 30]}
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                    />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      width={80}
                      tick={{ fill: 'hsl(var(--foreground))', fontSize: 11 }}
                    />
                    <Tooltip 
                      formatter={(value: number) => [`${value} MW`, 'Capacity']}
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                    />
                    <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                      {comparisonData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Right - Details */}
          <div className="space-y-4 md:space-y-6">
            {/* Enhancement Summary */}
            <Card className="border-border bg-card">
              <CardContent className="p-4 md:p-6">
                <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
                  <div className="p-3 md:p-4 bg-solar-blue/10 rounded-lg">
                    <div className="text-xl md:text-3xl font-bold text-solar-blue">19.5 MVA</div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-1">Present CMD</div>
                  </div>
                  <div className="p-3 md:p-4 bg-solar-orange/10 rounded-lg">
                    <div className="text-xl md:text-3xl font-bold text-solar-orange">+6 MVA</div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-1">Additional CMD</div>
                  </div>
                  <div className="p-3 md:p-4 bg-primary/10 rounded-lg">
                    <div className="text-xl md:text-3xl font-bold text-primary">20 MW</div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-1">Solar Plant</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="border-border bg-card">
              <CardHeader className="p-4 md:p-6 pb-2 md:pb-3">
                <CardTitle className="text-foreground text-base md:text-lg">Enhancement Benefits</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0 space-y-2 md:space-y-3">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 bg-secondary rounded-lg"
                  >
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    <span className="text-sm md:text-base text-foreground">{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Note */}
            <div className="p-3 md:p-4 bg-secondary rounded-lg text-xs md:text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Note:</span> Unite Solar will 
              assist with the CMD enhancement application and liaison with DISCOM.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide06CMDEnhancement;
