import type { Label } from './label';

export type Task = {
  id: number;
  name: string;
  labelIds: Array<Label['id']>;
};
