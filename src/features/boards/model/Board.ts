import type { Entity } from '@/shared/domain/Entity';

export interface Board extends Entity {
  title: string;
  description?: string;
  position: number;
  isArchived: boolean;
}
