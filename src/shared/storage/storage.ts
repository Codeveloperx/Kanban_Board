export interface Storage {
  load<T>(): T | null;
  save<T>(data: T): void;
  remove(): void;
  clear(): void;
}
