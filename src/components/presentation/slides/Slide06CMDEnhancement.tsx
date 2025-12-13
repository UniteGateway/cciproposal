import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { TrendingUp, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const comparisonData = [
  { name: "Current CMD", value: 19, fill: "hsl(210, 100%, 40%)" },
  { name: "Required CMD", value: 25, fill: "hsl(142, 71%, 35%)" },
];

const benefits = [
  "Full solar capacity utilization",
  "No curtailment of generation",
  "Optimal cost savings realization",
  "Future expansion headroom",
];

const Slide06CMDEnhancement = () => {
  return (
    <div className="min-h-[calc(100vh-7.5rem)] px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Infrastructure Upgrade
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            CMD <span className="solar-gradient-text">Enhancement</span> Required
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Approximately 30% increase in Contract Maximum Demand needed
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Chart */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <TrendingUp className="w-5 h-5 text-primary" />
                CMD Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={comparisonData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      type="number" 
                      domain={[0, 30]}
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      width={100}
                      tick={{ fill: 'hsl(var(--foreground))' }}
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
          <div className="space-y-6">
            {/* Enhancement Summary */}
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-solar-blue/10 rounded-lg">
                    <div className="text-3xl font-bold text-solar-blue">19 MW</div>
                    <div className="text-sm text-muted-foreground mt-1">Current</div>
                  </div>
                  <div className="p-4 bg-solar-orange/10 rounded-lg">
                    <div className="text-3xl font-bold text-solar-orange">+6 MW</div>
                    <div className="text-sm text-muted-foreground mt-1">Increase</div>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <div className="text-3xl font-bold text-primary">25 MW</div>
                    <div className="text-sm text-muted-foreground mt-1">Required</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">Enhancement Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-secondary rounded-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Note */}
            <div className="p-4 bg-secondary rounded-lg text-sm text-muted-foreground">
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
