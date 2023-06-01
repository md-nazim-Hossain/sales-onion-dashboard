'use client';
import React from 'react';

type Props = {
  targetAmount: number;
  achievementAmount: number;
  text?: string;
};

function Progressbar({ achievementAmount, targetAmount, text }: Props) {
  const percent: number = Math.floor((achievementAmount / targetAmount) * 100);

  return (
    <div>
      <div className="flex justify-between items-center">
        {text ? <p>{text}</p> : <h4>{percent}%</h4>}
        <div className="flex">
          <p className="text-white">${achievementAmount}K</p>/
          <p>${targetAmount}K</p>
        </div>
      </div>

      <div className="w-full h-4 bg-theme-base-1 relative rounded-sm overflow-hidden">
        <div
          style={{ width: `${percent}%` }}
          className="absolute bg-primary top-0 h-full left-0 rounded-sm"
        ></div>
      </div>
    </div>
  );
}

export default Progressbar;
