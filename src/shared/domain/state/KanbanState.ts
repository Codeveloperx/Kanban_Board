import type { Board } from '@/features/boards/model/Board';
import type { List } from '@/features/lists/model/List';
import type { Task } from '@/features/tasks/model/Task';

export interface KanbanState {
  boards: Board[];
  lists: List[];
  tasks: Task[];
}
