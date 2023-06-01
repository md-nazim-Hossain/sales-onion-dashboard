'use client';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { options, areaChartData } from './config';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,

  Title,
  Tooltip,
  Filler,
  Legend
);

function AreaChart() {
  return (
    <div className="w-full h-[200px]">
      <Line
        options={options}
        data={areaChartData}
        height={250}
        width={'100%'}
      />
    </div>
  );
}

export default AreaChart;
