import React from 'react';
import GaugeComponent from 'react-gauge-component';

interface SensorGaugeProps {
  value: number;
  label: string;
  min?: number;
  max?: number;
}

const SensorGauge: React.FC<SensorGaugeProps> = ({
  value,
  label,
  min = 0,
  max = 100
}) => {
  return (
    <div className="bg-navy-800 rounded-lg p-4">
      <h3 className="text-gray-400 text-sm mb-2">{label}</h3>
      <GaugeComponent
        value={value}
        type="semicircle"
        arc={{
          width: 0.2,
          padding: 0.005,
          cornerRadius: 1,
          colorArray: ['#22c55e', '#eab308', '#ef4444']
        }}
        pointer={{
          type: 'needle',
          width: 5,
          color: '#ffffff'
        }}
        labels={{
          valueLabel: {
            formatTextValue: (value) => value.toFixed(1) + '%',
            style: { fill: '#ffffff' }
          },
          tickLabels: {
            type: 'outer',
            ticks: [
              { value: min },
              { value: (max - min) / 2 },
              { value: max }
            ]
          }
        }}
      />
    </div>
  );
};

export default SensorGauge;