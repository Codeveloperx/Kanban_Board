import type { Board } from '../model/Board';

export interface IBoardRepository {
  getBoards(): Promise<Board[]>;
  getBoardById(id: string): Promise<Board | null>;
  createBoard(board: Board): Promise<Board>;
  updateBoard(board: Board): Promise<Board>;
  archiveBoard(id: string): Promise<void>;
}
