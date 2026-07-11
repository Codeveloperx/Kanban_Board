export interface Storage {
  load<T>(): Promise<T | null>;
  save<T>(data: T): Promise<void>;
  remove(): Promise<void>;
}
