import { STORAGE_KEY } from './constants';

import type { Storage } from './storage';

export class LocalStorage implements Storage {
  async load<T>(): Promise<T | null> {
    try {
      const values = localStorage.getItem(STORAGE_KEY);
      return values ? (JSON.parse(values) as T) : null;
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
      return null;
    }
  }

  async save<T>(data: T): Promise<void> {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  async remove(): Promise<void> {
    localStorage.removeItem(STORAGE_KEY);
  }

  async clear(): Promise<void> {
    localStorage.clear();
  }
}
