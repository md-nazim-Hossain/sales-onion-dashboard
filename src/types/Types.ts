import { IconType } from 'react-icons';

type BaseDataTypes = {
  id?: number;
  title: string;
  value: string;
};

export type NavFilterDataTypes = BaseDataTypes & object;

export type DashboardCardDataTypes = BaseDataTypes & {
  icon: IconType;
};

export type SidebarDataTypes = {
  icon: IconType;
  href: string;
  title: string;
};
