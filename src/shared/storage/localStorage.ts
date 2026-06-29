import { STORAGE_KEY } from './constants';
import type { Storage } from './storage';

export class LocalStorage implements Storage {
  load<T>(): T | null {
    try {
      const values = localStorage.getItem(STORAGE_KEY);
      return values ? (JSON.parse(values) as T) : null;
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
      return null;
    }
  }

  save<T>(data: T): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  remove(): void {
    localStorage.removeItem(STORAGE_KEY);
  }

  clear(): void {
    localStorage.clear();
  }
}
