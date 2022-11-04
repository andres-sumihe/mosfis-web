import '../styles/global.scss';

import type { AppProps } from 'next/app';

import { AuthUserProvider } from '@/layouts/AuthWrapper';

import { RouterGuard } from './hoc/RouterGuard';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AuthUserProvider>
    <RouterGuard>
      <Component {...pageProps} />
    </RouterGuard>
  </AuthUserProvider>
);

export default MyApp;
