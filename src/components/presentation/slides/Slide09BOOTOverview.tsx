import { Calendar, DollarSign, Key, Clock, TrendingUp, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Calculate 30-year savings with 3% annual tariff hike
const calculateSavings = () => {
  const annualUnits = 30000000; // 30 million units per year
  const initialTariff = 8; // ₹8 per unit current tariff
  const ppaRate = 5; // ₹5 per unit PPA rate (for BOOT model during contract)
  const annualHike = 0.03; // 3% annual hike
  
  let totalGridCost = 0;
  let totalSolarCost = 0;
  let totalSavings = 0;
  const yearlyData = [];
  
  for (let year = 1; year <= 30; year++) {
    const tariff = initialTariff * Math.pow(1 + annualHike, year - 1);
    const gridCost = annualUnits * tariff;
    // After 6 years, solar is free (only O&M costs ~₹0.50/unit)
    const solarCost = year <= 6 ? annualUnits * ppaRate : annualUnits * 0.5;
    const savings = gridCost - solarCost;
    
    totalGridCost += gridCost;
    totalSolarCost += solarCost;
    totalSavings += savings;
    
    if (year % 5 === 0 || year === 1 || year === 6) {
      yearlyData.push({
        year: `Yr ${year}`,
        gridCost: Math.round(gridCost / 10000000), // in Cr
        solarCost: Math.round(solarCost / 10000000),
        savings: Math.round(savings / 10000000),
        cumulativeSavings: Math.round(totalSavings / 10000000),
      });
    }
  }
  
  return {
    totalGridCost: Math.round(totalGridCost / 10000000), // in Cr
    totalSolarCost: Math.round(totalSolarCost / 10000000),
    totalSavings: Math.round(totalSavings / 10000000),
    totalUnits: 30 * annualUnits / 10000000, // 900 million units in Cr format
    yearlyData,
  };
};

const savingsData = calculateSavings();

const keyTerms = [
  { icon: DollarSign, label: "Investment", value: "100% by Unite Solar" },
  { icon: Calendar, label: "Contract Period", value: "6 Years" },
  { icon: Key, label: "Ownership Transfer", value: "End of Year 6" },
  { icon: Clock, label: "Commissioning", value: "Within 12 Months" },
];

const Slide09BOOTOverview = () => {
  return (
    <div className="min-h-[calc(100vh-7rem)] md:min-h-[calc(100vh-7.5rem)] px-4 md:px-6 py-6 md:py-10">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
        {/* Header */}
        <div className="text-center space-y-2 md:space-y-3">
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
            BOOT Model Commercial Structure
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            30-Year <span className="solar-gradient-text">Savings Analysis</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Build-Own-Operate-Transfer with projected savings based on 3% annual tariff hike
          </p>
        </div>

        {/* Key Terms Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {keyTerms.map((term) => (
            <Card key={term.label} className="border-border bg-card">
              <CardContent className="p-3 md:p-5 text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl solar-gradient flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <term.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">{term.label}</div>
                <div className="text-sm md:text-lg font-semibold text-foreground mt-1">{term.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Savings Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-3 md:p-5 text-center">
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2" />
              <div className="text-xl md:text-3xl font-display font-bold text-primary">900</div>
              <div className="text-[10px] md:text-sm text-muted-foreground">Million Units (30 Yrs)</div>
            </CardContent>
          </Card>
          <Card className="border-destructive/30 bg-destructive/5">
            <CardContent className="p-3 md:p-5 text-center">
              <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-destructive mx-auto mb-2" />
              <div className="text-xl md:text-3xl font-display font-bold text-destructive">₹{savingsData.totalGridCost}</div>
              <div className="text-[10px] md:text-sm text-muted-foreground">Cr Grid Cost (30 Yrs)</div>
            </CardContent>
          </Card>
          <Card className="border-solar-blue/30 bg-solar-blue/5">
            <CardContent className="p-3 md:p-5 text-center">
              <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-solar-blue mx-auto mb-2" />
              <div className="text-xl md:text-3xl font-display font-bold text-solar-blue">₹{savingsData.totalSolarCost}</div>
              <div className="text-[10px] md:text-sm text-muted-foreground">Cr Solar Cost (30 Yrs)</div>
            </CardContent>
          </Card>
          <Card className="border-solar-green/30 bg-solar-green/5">
            <CardContent className="p-3 md:p-5 text-center">
              <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-solar-green mx-auto mb-2" />
              <div className="text-xl md:text-3xl font-display font-bold text-solar-green">₹{savingsData.totalSavings}</div>
              <div className="text-[10px] md:text-sm text-muted-foreground">Cr Total Savings</div>
            </CardContent>
          </Card>
        </div>

        {/* Savings Chart */}
        <Card className="border-border bg-card">
          <CardContent className="p-4 md:p-6">
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-4">
              Cumulative Savings Over 30 Years (₹ Cr)
            </h3>
            <div className="h-48 md:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={savingsData.yearlyData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                  <XAxis dataKey="year" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                  <YAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }} 
                  />
                  <Legend wrapperStyle={{ fontSize: '10px' }} />
                  <Area 
                    type="monotone" 
                    dataKey="gridCost" 
                    stackId="1"
                    stroke="hsl(var(--destructive))" 
                    fill="hsl(var(--destructive)/0.3)" 
                    name="Grid Cost"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="cumulativeSavings" 
                    stackId="2"
                    stroke="hsl(var(--solar-green))" 
                    fill="hsl(var(--solar-green)/0.5)" 
                    name="Cumulative Savings"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Note */}
        <div className="text-center p-3 md:p-4 bg-secondary rounded-xl">
          <p className="text-xs md:text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Assumptions:</span> 30 Million units/year • ₹8/unit current tariff • 3% annual hike • 
            After Year 6, only O&M costs (~₹0.50/unit) • <span className="text-solar-green font-semibold">30+ years plant life</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide09BOOTOverview;
