import type { Board } from '../model/Board';
import type { BoardRepository } from '../repository/boardRepository';

export class BoardService {
  private repository: BoardRepository;

  constructor(repository: BoardRepository) {
    this.repository = repository;
  }

  async findAll(): Promise<Board[]> {
    return this.repository.getBoards();
  }

  async findById(id: string): Promise<Board | null> {
    return this.repository.getBoardById(id);
  }

  async create(board: Board): Promise<Board> {
    if (!board.title || board.title.trim().length < 3) {
      throw new Error('Board title is too short');
    }

    const now = new Date().toISOString();

    const newBoard: Board = {
      ...board,
      createdAt: now,
      updatedAt: now,
    };

    return this.repository.createBoard(newBoard);
  }

  async update(board: Board): Promise<Board> {
    const existing = await this.repository.getBoardById(board.id);

    if (!existing) {
      throw new Error('Board not found');
    }

    return this.repository.updateBoard({
      ...board,
      updatedAt: new Date().toISOString(),
    });
  }

  async remove(id: string): Promise<void> {
    const board = await this.repository.getBoardById(id);

    if (!board) {
      throw new Error('Board not found');
    }

    if (board.isArchived) {
      return;
    }

    return this.repository.archiveBoard(id);
  }
}
