import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartCardProps {
  title: string;
  data: any;
  options?: any;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, data, options = {} }) => {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#94a3b8'
        }
      },
      title: {
        display: false
      }
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(148, 163, 184, 0.1)'
        },
        ticks: {
          color: '#94a3b8'
        }
      },
      x: {
        grid: {
          color: 'rgba(148, 163, 184, 0.1)'
        },
        ticks: {
          color: '#94a3b8'
        }
      }
    }
  };

  return (
    <div className="bg-navy-800 rounded-lg p-4 h-[300px]">
      <h3 className="text-gray-400 text-sm mb-4">{title}</h3>
      <div className="h-[calc(100%-2rem)]">
        <Line data={data} options={{ ...defaultOptions, ...options }} />
      </div>
    </div>
  );
};

export default ChartCard;