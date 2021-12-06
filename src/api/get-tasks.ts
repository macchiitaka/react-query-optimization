import type { Data } from '../pages/api/task';

export const getTasks = async () =>
  fetch('/api/task')
    .then((res) => res.json())
    .then((data) => data as Data);
