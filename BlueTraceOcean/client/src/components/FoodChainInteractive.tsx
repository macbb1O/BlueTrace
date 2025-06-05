import { useState } from "react";

interface FoodChainLevel {
  id: string;
  name: string;
  role: string;
  icon: string;
  color: string;
  description: string;
}

const foodChainLevels: FoodChainLevel[] = [
  {
    id: "1",
    name: "Phytoplankton",
    role: "Primary Producers",
    icon: "fas fa-seedling",
    color: "coral-green",
    description: "Phytoplankton are microscopic marine plants that form the base of the ocean food chain. They produce oxygen through photosynthesis and support all marine life."
  },
  {
    id: "2",
    name: "Small Fish",
    role: "Primary Consumers",
    icon: "fas fa-fish",
    color: "ocean-light",
    description: "Small fish like anchovies and sardines feed on phytoplankton and zooplankton. They are crucial for transferring energy up the food chain."
  },
  {
    id: "3",
    name: "Large Fish",
    role: "Secondary Consumers",
    icon: "fas fa-fish",
    color: "yellow-400",
    description: "Larger fish such as tuna and cod feed on smaller fish. They play important roles in marine ecosystems and are major targets for commercial fishing."
  },
  {
    id: "4",
    name: "Apex Predators",
    role: "Top Consumers",
    icon: "fas fa-fish",
    color: "red-400",
    description: "Apex predators like sharks and large tuna are at the top of the food chain. They help maintain ecosystem balance by controlling prey populations."
  }
];

const FoodChainInteractive = () => {
  const [selectedLevel, setSelectedLevel] = useState<FoodChainLevel | null>(null);

  const handleLevelClick = (level: FoodChainLevel) => {
    setSelectedLevel(level);
  };

  return (
    <div className="bg-gradient-to-b from-ocean-deep to-ocean-surface rounded-2xl p-8 text-white mb-16">
      <h3 className="text-3xl font-bold text-center mb-8">Marine Food Chain Interactive</h3>
      
      <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
        {foodChainLevels.map((level, index) => (
          <div key={level.id} className="flex items-center">
            <div className="text-center">
              <div 
                className={`bg-${level.color}/20 p-6 rounded-full mb-4 cursor-pointer hover:bg-${level.color}/30 transition-colors transform hover:scale-110`}
                onClick={() => handleLevelClick(level)}
              >
                <i className={`${level.icon} text-4xl text-${level.color}`}></i>
              </div>
              <h4 className="font-semibold">{level.name}</h4>
              <p className="text-sm text-ocean-light">{level.role}</p>
            </div>
            
            {index < foodChainLevels.length - 1 && (
              <i className="fas fa-arrow-right text-ocean-light text-2xl mx-6 hidden md:block"></i>
            )}
          </div>
        ))}
      </div>
      
      {selectedLevel && (
        <div className="mt-8 p-6 bg-white/10 rounded-lg">
          <h5 className="font-semibold mb-2">{selectedLevel.name} - {selectedLevel.role}</h5>
          <p>{selectedLevel.description}</p>
        </div>
      )}
    </div>
  );
};

export default FoodChainInteractive;
