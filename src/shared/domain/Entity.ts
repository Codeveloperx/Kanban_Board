import type { Audit } from './Audit';

export interface Entity extends Audit {
  id: string;
}
