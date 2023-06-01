import { IconType } from "react-icons";

interface BaseDataTypes {
  id?: number;
  title: string;
  value: string;
}

export interface NavFilterDataTypes extends BaseDataTypes {}

export interface DashboardCardDataTypes extends BaseDataTypes {
  icon: IconType;
}

export interface SidebarDataTypes {
  icon: IconType;
  href: string;
  title: string;
}
