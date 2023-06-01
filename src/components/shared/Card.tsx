'use client';
import { DashboardCardDataTypes } from '@type/Types';
import React from 'react';
import IconBox from './IconBox';

type Props = {
  data: DashboardCardDataTypes;
};
function Card({ data }: Props) {
  return (
    <div className="bg-theme-base-2 px-3 py-2 rounded-xl flex justify-between h-[100px]">
      <div className="my-auto">
        <IconBox Icon={data.icon} />
      </div>
      <div>
        <h3 className="text-secondary font-normal">{data.title}</h3>
        <h1>${data.value}</h1>
      </div>
    </div>
  );
}

export default Card;
