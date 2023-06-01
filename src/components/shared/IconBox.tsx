'use client';
import React from 'react';
import { IconType } from 'react-icons/lib';

type Props = {
  Icon: IconType;
};
function IconBox({ Icon }: Props) {
  return (
    <div className="w-[44px] h-[44px] bg-theme-base-1 rounded-xl flex justify-center items-center">
      <Icon className="text-primary" size={24} />
    </div>
  );
}

export default IconBox;
