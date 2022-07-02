// eslint-disable-next-line @next/next/no-server-import-in-page
import type { NextRequest } from 'next/server';

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

const handler = (_: NextRequest) =>
  new Response(JSON.stringify(MOCK_DATA), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });

export const config = {
  runtime: 'experimental-edge',
};

export default handler;
