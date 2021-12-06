import type { NextApiRequest, NextApiResponse } from 'next';

import type { Task } from '../../domain/task';

export type Data = Task[];

const MOCK_DATA: Data = [
  {
    id: 1,
    name: '部屋を掃除する',
    labelIds: [],
  },
  {
    id: 2,
    name: '買い出しに行く',
    labelIds: [1, 2],
  },
  {
    id: 3,
    name: 'お花に水をあげる',
    labelIds: [2, 3],
  },
];

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json(MOCK_DATA);
};

export default handler;
