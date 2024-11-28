import React from 'react';

interface InfoItem {
  value: string;
  color: string;
}

interface BatteryInfoCardProps {
  title: string;
  info: Record<string, InfoItem>;
}

const BatteryInfoCard: React.FC<BatteryInfoCardProps> = ({ title, info }) => {
  return (
    <div className="bg-navy-800 rounded-lg p-4">
      <h2 className="text-gray-400 mb-4">{title}</h2>
      <div className="flex flex-col space-y-4">
        {Object.entries(info).map(([label, { value, color }]) => (
          <div key={label} className="flex justify-between">
            <span className="text-gray-400">{label}</span>
            <span className={color}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BatteryInfoCard;