import React from 'react';

interface BatteryStateCardProps {
  percentage: number;
}

const BatteryStateCard: React.FC<BatteryStateCardProps> = ({ percentage }) => {
  return (
    <div className="bg-navy-800 rounded-lg p-4">
      <h2 className="text-gray-400 mb-4">STATE OF CHARGE</h2>
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-48 border-2 border-gray-600 rounded-lg mb-4">
          <div 
            className="absolute bottom-0 w-full bg-green-500 rounded-b-lg transition-all duration-500"
            style={{ height: `${percentage}%` }}
          />
        </div>
        <div className="text-4xl font-bold">{percentage.toFixed(2)} %</div>
      </div>
    </div>
  );
};

export default BatteryStateCard;