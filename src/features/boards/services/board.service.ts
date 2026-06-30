import type { KanbanState } from '@/shared/domain/state/KanbanState';
import { storage } from '@/shared/storage';
import type { Board } from '../model/Board';

const getData = (): KanbanState =>
  storage.load<KanbanState>() || { boards: [], lists: [], tasks: [] };

const saveData = (data: KanbanState): void => {
  storage.save<KanbanState>(data);
};

export const BoardService = {
  findAll: (): Board[] => {
    const data = getData();
    return data.boards.filter((board) => !board.isArchived);
  },

  findById: (id: string): Board | null => {
    const data = getData();
    return data.boards.find((board) => board.id === id) ?? null;
  },

  create: (board: Board): Board => {
    const data = getData();

    const newBoard = {
      ...board,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    data.boards.push(newBoard);
    saveData(data);
    return newBoard;
  },

  update: (updatedBoard: Board): Board => {
    const data = getData();
    data.boards = data.boards.map((board) =>
      board.id === updatedBoard.id
        ? { ...updatedBoard, updatedAt: new Date().toISOString() }
        : board,
    );

    saveData(data);

    return updatedBoard;
  },

  remove(id: string): void {
    const data = getData();

    data.boards = data.boards.map((board) =>
      board.id === id
        ? {
            ...board,
            isArchived: true,
            updatedAt: new Date().toISOString(),
          }
        : board,
    );

    saveData(data);
  },
};
