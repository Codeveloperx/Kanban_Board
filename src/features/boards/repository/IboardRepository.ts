import type { Board } from '../model/Board';

export interface IBoardRepository {
  getBoards(isActive: boolean): Promise<Board[]>;
  getBoardById(id: string): Promise<Board | null>;
  createBoard(board: Board): Promise<Board>;
  updateBoard(board: Board): Promise<Board>;
  removeBoard(id: string): Promise<void>;
}
