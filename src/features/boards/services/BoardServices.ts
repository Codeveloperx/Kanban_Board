import type { Board } from '../model/Board';

export interface BoardService {
  getBoards(): Board[];

  getBoardById(id: string): Board | null;

  createBoard(data: Board): Board;

  updateBoard(id: string, data: Board): Board;

  archiveBoard(id: string): void;
}
