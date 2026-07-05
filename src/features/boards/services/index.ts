import { BoardRepository } from '../repository/boardRepository';
import { BoardService } from './BoardServices';

const repository = new BoardRepository();

export const boardService: BoardService = new BoardService(repository);
