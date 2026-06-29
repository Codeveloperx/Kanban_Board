import { LocalStorage } from './localStorage';
import type { Storage } from './storage';

export const storage: Storage = new LocalStorage();
