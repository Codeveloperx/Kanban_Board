import { BoardsPage } from '@/pages/BoardsPage';
import { RoutePaths } from './RoutePaths';
import MainLayout from '../layouts/MainLayout';

import type { RouteObject } from 'react-router';

export const privateRoutes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: RoutePaths.BOARDS,
        element: <BoardsPage />,
      },
    ],
  },
];
