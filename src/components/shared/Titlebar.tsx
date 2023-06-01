'use client';
import React from 'react';

type Props = {
  title: string;
  smallTitle: string;
};

function Titlebar({ smallTitle, title }: Props) {
  return (
    <div className="flex justify-between items-center gap-x-5 pb-5">
      <h3 className="flex-1">{title}</h3>
      <p className="w-max">{smallTitle}</p>
    </div>
  );
}

export default Titlebar;
