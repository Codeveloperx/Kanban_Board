import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { RoutePaths } from './RoutePaths';
import MainLayout from '../layouts/MainLayout';

import type { RouteObject } from 'react-router';

export const publicRoutes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: RoutePaths.HOME,
        element: <HomePage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
