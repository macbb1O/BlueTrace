import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const QuotaCalculator = () => {
  const [currentPop, setCurrentPop] = useState<string>("10000");
  const [growthRate, setGrowthRate] = useState<string>("5");
  const [capacity, setCapacity] = useState<string>("50000");
  const [quota, setQuota] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateQuota = () => {
    const currentPopNum = parseFloat(currentPop) || 10000;
    const growthRateNum = parseFloat(growthRate) || 5;
    const capacityNum = parseFloat(capacity) || 50000;
    
    // Simple MSY calculation: roughly 25% of surplus production
    const surplusProduction = currentPopNum * (growthRateNum / 100) * (1 - currentPopNum / capacityNum);
    const sustainableQuota = Math.max(0, Math.round(surplusProduction * 0.25));
    
    setQuota(sustainableQuota);
    setShowResult(true);
  };

  return (
    <div className="bg-gradient-to-r from-ocean-surface to-ocean-light rounded-2xl p-8 text-white">
      <h3 className="text-2xl font-bold mb-4">Interactive Calculator</h3>
      <p className="mb-6">Calculate sustainable fishing quotas based on population parameters</p>
      
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div>
          <Label className="block text-sm font-medium mb-2">Current Population</Label>
          <Input 
            type="number" 
            className="w-full p-3 rounded-lg text-slate-800" 
            placeholder="10000"
            value={currentPop}
            onChange={(e) => setCurrentPop(e.target.value)}
          />
        </div>
        <div>
          <Label className="block text-sm font-medium mb-2">Growth Rate (%)</Label>
          <Input 
            type="number" 
            className="w-full p-3 rounded-lg text-slate-800" 
            placeholder="5"
            value={growthRate}
            onChange={(e) => setGrowthRate(e.target.value)}
          />
        </div>
        <div>
          <Label className="block text-sm font-medium mb-2">Carrying Capacity</Label>
          <Input 
            type="number" 
            className="w-full p-3 rounded-lg text-slate-800" 
            placeholder="50000"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </div>
      </div>
      
      <Button 
        className="bg-white text-ocean-surface px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors" 
        onClick={calculateQuota}
      >
        Calculate Sustainable Quota
      </Button>
      
      {showResult && (
        <div className="mt-4 p-4 bg-white/20 rounded-lg">
          <strong>Recommended Annual Quota: {quota?.toLocaleString()} fish</strong>
        </div>
      )}
    </div>
  );
};

export default QuotaCalculator;
