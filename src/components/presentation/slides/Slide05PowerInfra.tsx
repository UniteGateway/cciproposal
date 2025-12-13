import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Zap, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cmdData = [
  { name: "Current Utilization", value: 15, color: "hsl(142, 71%, 35%)" },
  { name: "Available Capacity", value: 4, color: "hsl(210, 100%, 40%)" },
];

const Slide05PowerInfra = () => {
  return (
    <div className="min-h-[calc(100vh-7.5rem)] px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Current Infrastructure
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Existing Power <span className="solar-gradient-text">Infrastructure</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Analysis of current sanctioned demand and utilization patterns
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Chart */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Zap className="w-5 h-5 text-primary" />
                CMD Allocation (19 MW Total)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={cmdData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value} MW`}
                      labelLine={false}
                    >
                      {cmdData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: number) => [`${value} MW`, '']}
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Right - Details */}
          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                    <span className="text-muted-foreground">Sanctioned CMD</span>
                    <span className="text-2xl font-bold text-foreground">19 MW</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
                    <span className="text-muted-foreground">Current Utilization</span>
                    <span className="text-2xl font-bold text-primary">15 MW</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-solar-blue/10 rounded-lg">
                    <span className="text-muted-foreground">Available Headroom</span>
                    <span className="text-2xl font-bold text-solar-blue">4 MW</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-solar-orange/30 bg-solar-orange/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-solar-orange/20 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-solar-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Key Observation</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Current CMD of 19 MW is insufficient to accommodate a 20+ MW solar plant 
                      injection without enhancement. CMD increase will be required for full 
                      capacity utilization.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide05PowerInfra;
