import { LocalBoardRepository } from '../repository/localBoardRepository';
import { BoardService } from './BoardServices';

const repository = new LocalBoardRepository();

export const boardService: BoardService = new BoardService(repository);
