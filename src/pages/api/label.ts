import type { NextApiRequest, NextApiResponse } from 'next';

import type { Label } from '../../domain/label';

export type Data = Label[];

const getMockData = (): Data => [
  {
    id: 2,
    name: 'ルーティーン',
  },
  {
    id: 1,
    name: 'すぐやる',
  },
  {
    id: 3,
    name: '空き時間にやる',
  },
  {
    id: 4,
    name: `ランダム ${Math.random()}`,
  },
];

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json(getMockData());
};

export default handler;
