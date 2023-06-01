'use client';
import Card from '@components/shared/Card';
import Progressbar from '@components/shared/Progressbar';
import { dashboardCardData } from '@data/data';
import { DashboardCardDataTypes } from '@type/Types';
import React from 'react';

function Cards() {
  return (
    <div className="sm:flex justify-between items-center gap-5">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {dashboardCardData.map(
          (item: DashboardCardDataTypes, index: number) => (
            <Card key={index} data={item} />
          )
        )}
      </div>
      <div className="w-[300px] bg-theme-base-2 px-3 py-2 rounded-xl h-[100px]">
        <h3 className="text-secondary font-normal">Achievement</h3>
        <Progressbar achievementAmount={1649} targetAmount={2731} />
      </div>
    </div>
  );
}

export default Cards;
