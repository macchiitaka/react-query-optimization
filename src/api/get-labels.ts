import type { Data } from '../pages/api/label';

export const getLabels = async () =>
  fetch('/api/label')
    .then((res) => res.json())
    .then((data) => data as Data);
