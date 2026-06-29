import type { Entity } from '@/shared/domain/Entity';
import type { TaskPriority } from './TaskPriority';
import type { TaskStatus } from './TaskStatus';

export interface Task extends Entity {
  listId: string;
  title: string;
  description?: string;
  position: number;
  priority: TaskPriority;
  status: TaskStatus;
  isArchived: boolean;
}
