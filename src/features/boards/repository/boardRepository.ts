import { storage } from '@/shared/storage';

import type { Board } from '../model/Board';
import type { KanbanState } from '@/shared/domain/state/KanbanState';
import type { IBoardRepository } from './IBoardRepository';

export class BoardRepository implements IBoardRepository {
  private async load(): Promise<KanbanState> {
    const state = await storage.load<KanbanState>();
    return state ?? { boards: [], lists: [], tasks: [] };
  }

  private async save(state: KanbanState): Promise<void> {
    return storage.save<KanbanState>(state);
  }

  async getBoards(): Promise<Board[]> {
    const state = await this.load();
    return state.boards.filter((b) => !b.isArchived);
  }

  async getBoardById(id: string): Promise<Board | null> {
    const state = await this.load();
    return state.boards.find((b) => b.id === id) ?? null;
  }

  async createBoard(board: Board): Promise<Board> {
    const state = await this.load();

    const now = new Date().toISOString();
    const newBoard: Board = {
      ...board,
      createdAt: now,
      updatedAt: now,
    };

    const newState: KanbanState = { ...state, boards: [...state.boards, newBoard] };
    await this.save(newState);

    return newBoard;
  }

  async updateBoard(board: Board): Promise<Board> {
    const state = await this.load();

    const updatedBoards = state.boards.map((b) =>
      b.id === board.id ? { ...board, updatedAt: new Date().toISOString() } : b,
    );

    await this.save({ ...state, boards: updatedBoards });

    return board;
  }

  async archiveBoard(id: string): Promise<void> {
    const state = await this.load();

    const updatedBoards = state.boards.map((b) =>
      b.id === id ? { ...b, isArchived: true, updatedAt: new Date().toISOString() } : b,
    );

    await this.save({ ...state, boards: updatedBoards });
  }
}
