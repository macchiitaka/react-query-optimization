// eslint-disable-next-line @next/next/no-server-import-in-page
import type { NextRequest } from 'next/server';

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

const handler = (_: NextRequest) =>
  new Response(JSON.stringify(getMockData()), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });

export const config = {
  runtime: 'experimental-edge',
};

export default handler;
