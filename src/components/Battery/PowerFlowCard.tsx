import React from 'react';
import { Battery } from 'lucide-react';

interface PowerFlowCardProps {
  batteryPower: number;
  loadPower: number;
  gridPower: number;
}

const PowerFlowCard: React.FC<PowerFlowCardProps> = ({
  batteryPower,
  loadPower,
  gridPower,
}) => {
  return (
    <div className="bg-navy-800 rounded-lg p-4">
      <h2 className="text-gray-400 mb-4">POWER FLOW</h2>
      <div className="flex justify-between items-center h-48">
        <PowerFlowItem
          icon={<Battery className="w-12 h-12 text-blue-500" />}
          value={batteryPower}
          label="BATTERY"
          color="text-blue-500"
        />
        
        <PowerFlowItem
          icon={
            <svg className="w-12 h-12 text-orange-500" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
            </svg>
          }
          value={loadPower}
          label="AC LOAD"
          color="text-orange-500"
        />
        
        <PowerFlowItem
          icon={
            <svg className="w-12 h-12 text-green-500" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
            </svg>
          }
          value={gridPower}
          label="GRID"
          color="text-green-500"
        />
      </div>
    </div>
  );
};

interface PowerFlowItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  color: string;
}

const PowerFlowItem: React.FC<PowerFlowItemProps> = ({
  icon,
  value,
  label,
  color
}) => (
  <div className="text-center">
    <div className="w-24 h-24 rounded-full border-2 border-gray-600 flex items-center justify-center mb-2">
      {icon}
    </div>
    <div className={`${color} text-xl font-bold`}>{value.toFixed(1)} kW</div>
    <div className="text-gray-400">{label}</div>
  </div>
);

export default PowerFlowCard;