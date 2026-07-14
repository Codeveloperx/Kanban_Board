import { FolderKanban, Star, SquarePen, type LucideIcon } from 'lucide-react';

import { KEY_ADD_BOARD, KEY_BOARDS, KEY_FAVORITES } from './constants';

interface NavigationItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

export const navItems: NavigationItem[] = [
  { icon: SquarePen, label: KEY_ADD_BOARD, path: '/create' },
  { icon: Star, label: KEY_FAVORITES, path: '/favorite' },
  { icon: FolderKanban, label: KEY_BOARDS, path: '/boards' },
];
