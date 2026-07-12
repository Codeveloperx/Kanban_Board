import { BoardsPage } from '@/pages/BoardsPage';
import { RoutePaths } from './RoutePaths';
import AppLyout from '../layouts/appLayout/AppLayout';

import type { RouteObject } from 'react-router';

export const privateRoutes: RouteObject[] = [
  {
    element: <AppLyout />,
    children: [
      {
        path: RoutePaths.BOARDS,
        element: <BoardsPage />,
      },
    ],
  },
];
