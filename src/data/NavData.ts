import {
  DashboardCardDataTypes,
  NavFilterDataTypes,
  SidebarDataTypes,
} from '@type/Types';
import { BsXDiamondFill } from 'react-icons/bs';
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';
import { BsPiggyBankFill } from 'react-icons/bs';
import { MdSavings } from 'react-icons/md';
import { IoPieChartSharp } from 'react-icons/io5';
import { MdRiceBowl } from 'react-icons/md';
import { FaStore } from 'react-icons/fa';
import { ImUser } from 'react-icons/im';

export const navFilterData: Array<NavFilterDataTypes> = [
  {
    title: 'January',
    value: 'january',
  },
  {
    title: 'February',
    value: 'february',
  },
  {
    title: 'March',
    value: 'march',
  },
  {
    title: 'April',
    value: 'april',
  },
  {
    title: 'May',
    value: 'may',
  },
  {
    title: 'June',
    value: 'june',
  },
  {
    title: 'July',
    value: 'july',
  },
  {
    title: 'August',
    value: 'august',
  },
  {
    title: 'September',
    value: 'september',
  },
  {
    title: 'October',
    value: 'october',
  },
  {
    title: 'November',
    value: 'november',
  },
  {
    title: 'December',
    value: 'december',
  },
];

export const dashboardCardData: Array<DashboardCardDataTypes> = [
  {
    id: 1,
    title: 'Sales Order',
    value: '1649K',
    icon: BsXDiamondFill,
  },
  {
    id: 2,
    title: 'Delivered',
    value: '775K',
    icon: AiOutlineDeliveredProcedure,
  },
  {
    id: 3,
    title: 'Remaining',
    value: '874K',
    icon: BsPiggyBankFill,
  },
  {
    id: 4,
    title: 'Last Month',
    value: '1565K',
    icon: MdSavings,
  },
];

export const sidebarData: Array<SidebarDataTypes> = [
  {
    href: '/',
    icon: IoPieChartSharp,
    title: 'Dashboard',
  },
  {
    href: '/product',
    icon: MdRiceBowl,
    title: 'Product',
  },
  {
    href: '/store',
    icon: FaStore,
    title: 'Store',
  },
  {
    href: '/salesman',
    icon: ImUser,
    title: 'Salesman',
  },
];
