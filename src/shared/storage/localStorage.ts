import { STORAGE_KEY } from './constants';

import type { Storage } from './storage';

export class LocalStorage implements Storage {
  async load<T>(): Promise<T | null> {
    try {
      const data = localStorage.getItem(STORAGE_KEY);

      return data ? (JSON.parse(data) as T) : null;
    } catch (error) {
      console.error('Error loading data from localStorage:', error);

      localStorage.removeItem(STORAGE_KEY);

      return null;
    }
  }

  async save<T>(data: T): Promise<void> {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
      throw error;
    }
  }

  async remove(): Promise<void> {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Error removing data from localStorage:', error);
      throw error;
    }
  }
}
