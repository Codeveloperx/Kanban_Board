import { BoardRepository } from '../repository/BoardRepository';
import { BoardService } from './BoardServices';

const repository = new BoardRepository();

export const boardService: BoardService = new BoardService(repository);
