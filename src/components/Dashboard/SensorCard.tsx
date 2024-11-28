import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface SensorCardProps {
  title: string;
  value: number | string;
  unit: string;
  trend?: 'up' | 'down';
  trendValue?: string;
  icon: React.ReactNode;
  color: string;
}

const SensorCard: React.FC<SensorCardProps> = ({
  title,
  value,
  unit,
  trend,
  trendValue,
  icon,
  color,
}) => {
  return (
    <div className={`bg-navy-800 rounded-lg p-4 ${color}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="text-gray-400 text-sm">{title}</div>
        <div className="text-gray-400">{icon}</div>
      </div>
      
      <div className="flex items-end space-x-2">
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-gray-400 mb-1">{unit}</div>
      </div>
      
      {trend && (
        <div className="flex items-center mt-2">
          {trend === 'up' ? (
            <ArrowUp className="text-green-500 w-4 h-4" />
          ) : (
            <ArrowDown className="text-red-500 w-4 h-4" />
          )}
          <span className={`text-sm ml-1 ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
            {trendValue}
          </span>
        </div>
      )}
    </div>
  );
};

export default SensorCard;