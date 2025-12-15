import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Zap, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cmdData = [
  { name: "Current Utilization", value: 19.5, color: "hsl(142, 71%, 35%)" },
  { name: "Additional CMD Required", value: 6, color: "hsl(24, 95%, 53%)" },
];

const Slide05PowerInfra = () => {
  return (
    <div className="min-h-[calc(100vh-7rem)] md:min-h-[calc(100vh-7.5rem)] px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 md:space-y-4">
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
            Current Infrastructure
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Existing Power <span className="solar-gradient-text">Infrastructure</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Analysis of current sanctioned demand and utilization patterns
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left - Chart */}
          <Card className="border-border bg-card">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="flex items-center gap-2 text-foreground text-base md:text-lg">
                <Zap className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                CMD Allocation (19.5 MVA + 6 MVA Additional)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6 pt-0">
              <div className="h-60 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={cmdData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={70}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, value }) => `${value} ${name.includes('Solar') ? 'KVA' : 'MVA'}`}
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
          <div className="space-y-4 md:space-y-6">
            <Card className="border-border bg-card">
              <CardContent className="p-4 md:p-6">
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center justify-between p-3 md:p-4 bg-secondary rounded-lg">
                    <span className="text-xs md:text-sm text-muted-foreground">Present CMD</span>
                    <span className="text-xl md:text-2xl font-bold text-foreground">19.5 MVA</span>
                  </div>
                  <div className="flex items-center justify-between p-3 md:p-4 bg-solar-orange/10 rounded-lg">
                    <span className="text-xs md:text-sm text-muted-foreground">Additional CMD Required</span>
                    <span className="text-xl md:text-2xl font-bold text-solar-orange">6 MVA</span>
                  </div>
                  <div className="flex items-center justify-between p-3 md:p-4 bg-primary/10 rounded-lg">
                    <span className="text-xs md:text-sm text-muted-foreground">Total Capacity</span>
                    <span className="text-xl md:text-2xl font-bold text-primary">25.5 MVA</span>
                  </div>
                  <div className="flex items-center justify-between p-3 md:p-4 bg-solar-blue/10 rounded-lg">
                    <span className="text-xs md:text-sm text-muted-foreground">Power Termination Point</span>
                    <span className="text-xl md:text-2xl font-bold text-solar-blue">132/6.6 KVA Substation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-solar-orange/30 bg-solar-orange/5">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-solar-orange/20 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-solar-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm md:text-base">Key Observation</h4>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">
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
