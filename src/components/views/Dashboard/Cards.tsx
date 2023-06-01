import Card from '@components/shared/Card';
import { dashboardCardData } from '@data/NavData';
import { DashboardCardDataTypes } from '@type/Types';
import React from 'react';

function Cards() {
  return (
    <div className="flex justify-between items-center gap-5">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {dashboardCardData.map(
          (item: DashboardCardDataTypes, index: number) => (
            <Card key={index} data={item} />
          )
        )}
      </div>
      <div className="w-[300px] sb"></div>
    </div>
  );
}

export default Cards;
