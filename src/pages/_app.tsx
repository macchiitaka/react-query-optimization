import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { useMemo } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
    [],
  );

  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
};

export default MyApp;
