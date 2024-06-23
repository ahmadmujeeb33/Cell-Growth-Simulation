// src/BarChart.tsx
import React from 'react';


interface BarChartProps {
  data: number[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const maxValue = Math.max(...data);

  return (
    <svg width="500" height="300">
      {data.map((value, index) => {
        const barHeight = (value / maxValue) * 100;
        return (
          <rect
            key={index}
            x={index * 30}
            y={100 - barHeight}
            width="20"
            height={barHeight}
            fill="blue"
          />
        );
      })}
    </svg>
  );
};

export default BarChart;
