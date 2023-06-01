import { DashboardCardDataTypes } from "@type/Types";
import React from "react";

interface Props {
  data: DashboardCardDataTypes;
}
function Card({ data }: Props) {
  return (
    <div className="bg-theme-base-2 px-3 py-2 rounded-xl flex justify-between items-center">
      <div className="w-[44px] h-[44px] bg-theme-base-1 rounded-xl flex justify-center items-center">
        <data.icon className="text-primary" size={24} />
      </div>
      <div>
        <h3 className="text-secondary font-normal">{data.title}</h3>
        <h1>${data.value}</h1>
      </div>
    </div>
  );
}

export default Card;
