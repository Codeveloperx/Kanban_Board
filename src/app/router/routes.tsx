import { privateRoutes } from './private.routes';
import { publicRoutes } from './public.routes';

import type { RouteObject } from 'react-router';

export const routes: RouteObject[] = [...publicRoutes, ...privateRoutes];
