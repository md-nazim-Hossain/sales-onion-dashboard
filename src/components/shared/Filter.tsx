'use client';
import { navFilterData } from '@data/data';
import { NavFilterDataTypes } from '@type/Types';
import React from 'react';

function Filter() {
  return (
    <select className="bg-theme-base-1 border border-secondary p-.5 outline-none">
      {navFilterData.map((month: NavFilterDataTypes, index: number) => {
        return (
          <option key={index} value={month.value}>
            {month.title}
          </option>
        );
      })}
    </select>
  );
}

export default Filter;
