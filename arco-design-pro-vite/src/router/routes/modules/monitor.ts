import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/monitor',
  name: 'monitor',
  component: () => import('@/views/dashboard/monitor/index.vue'),
  meta: {
    locale: 'menu.dashboard.monitor',
    requiresAuth: true,
    roles: ['admin'],
    icon: 'icon-dice',
    order: 0,
  },
};

export default DASHBOARD;
