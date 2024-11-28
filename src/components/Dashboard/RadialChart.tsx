import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface RadialChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
    }[];
  };
}

const RadialChart: React.FC<RadialChartProps> = ({ data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          color: 'rgba(148, 163, 184, 0.2)'
        },
        grid: {
          color: 'rgba(148, 163, 184, 0.2)'
        },
        pointLabels: {
          color: '#94a3b8'
        },
        ticks: {
          color: '#94a3b8',
          backdropColor: 'transparent'
        }
      }
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#94a3b8'
        }
      }
    }
  };

  return <Radar data={data} options={options} />;
};

export default RadialChart;