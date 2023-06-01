import Titlebar from '@components/shared/Titlebar';
import AreaChart from '@vendors/ChartJS/AreaChart';
import React from 'react';

function SalesOrderChart() {
  return (
    <div className="bg-theme-base-2 rounded-xl padding-1 max-h-[400px]">
      <Titlebar title="Sales Order by Day" smallTitle="February" />

      <AreaChart />
    </div>
  );
}

export default SalesOrderChart;
