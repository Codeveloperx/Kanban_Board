import { storage } from '@/shared/storage';

import type { Board } from '../model/Board';
import type { BoardRepository } from './BoardRepository';
import type { KanbanState } from '@/shared/domain/state/KanbanState';

const DEFAULT_STATE: KanbanState = {
  boards: [],
  lists: [],
  tasks: [],
};

export class LocalBoardRepository implements BoardRepository {
  private load(): KanbanState {
    return storage.load<KanbanState>() || DEFAULT_STATE;
  }

  private save(state: KanbanState): void {
    storage.save<KanbanState>(state);
  }

  async getBoards(): Promise<Board[]> {
    const state = this.load();
    return state.boards.filter((b) => !b.isArchived);
  }

  async getBoardById(id: string): Promise<Board | null> {
    const state = this.load();
    return state.boards.find((b) => b.id === id) ?? null;
  }

  async createBoard(board: Board): Promise<Board> {
    const state = this.load();

    const now = new Date().toISOString();

    const newBoard: Board = {
      ...board,
      createdAt: now,
      updatedAt: now,
    };

    state.boards.push(newBoard);
    this.save(state);

    return newBoard;
  }

  async updateBoard(board: Board): Promise<Board> {
    const state = this.load();

    state.boards = state.boards.map((b) =>
      b.id === board.id
        ? {
            ...board,
            updatedAt: new Date().toISOString(),
          }
        : b,
    );

    this.save(state);

    return board;
  }

  async archiveBoard(id: string): Promise<void> {
    const state = this.load();

    state.boards = state.boards.map((b) =>
      b.id === id
        ? {
            ...b,
            isArchived: true,
            updatedAt: new Date().toISOString(),
          }
        : b,
    );

    this.save(state);
  }
}
