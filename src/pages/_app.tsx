import '../styles/global.scss';

import type { AppProps } from 'next/app';

import { AuthUserProvider } from '@/layouts/AuthWrapper';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AuthUserProvider>
    <Component {...pageProps} />
  </AuthUserProvider>
);

export default MyApp;
