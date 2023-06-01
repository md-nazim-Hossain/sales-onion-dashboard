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

export type CategoryAchievementDataTypes = {
  Icon: IconType;
  productName: string;
  targetAmount: number;
  achievementAmount: number;
};

export type TopSellingProductsDataTypes = {
  productName: string;
  quantity: number;
  salesOrder: number;
};
