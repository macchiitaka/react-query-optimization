import type { NextPage } from 'next';
import Link from 'next/link';

const Page: NextPage = () => (
  <ul>
    {Array.from({ length: 5 }).map((_, i) => {
      const path = `0${i + 1}`;
      return (
        <li key={path}>
          <Link href={`/${path}`}>{path}</Link>
        </li>
      );
    })}
  </ul>
);

export default Page;
