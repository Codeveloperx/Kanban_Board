import type { Entity } from '@/shared/domain/Entity';

export interface List extends Entity {
  boardId: string;
  title: string;
  position: number;
  isCollapsed: boolean;
  isArchived: boolean;
}
