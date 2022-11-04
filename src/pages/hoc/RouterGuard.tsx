/* eslint-disable unused-imports/no-unused-vars */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { useAuth } from '@/layouts/AuthWrapper';

interface RouterGuardProps {
  children: React.ReactNode;
}

function RouterGuard({ children }: RouterGuardProps) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const { authUser } = useAuth();

  function authCheck(url: string) {
    // redirect to login page if accessing a private page and not logged in
    const publicPaths = ['/login/', '/welcome/', '/register/'];
    const path = url.split('?')[0];

    if (!authUser && !publicPaths.includes(path!)) {
      setAuthorized(false);

      router.push({
        pathname: '/welcome',
        query: { returnUrl: router.asPath },
      });
    } else {
      setAuthorized(true);
    }
  }

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // // on route change complete - run auth check
    router.events.on('routeChangeComplete', authCheck);

    // // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };
  }, []);

  if (!authorized) return null;

  return <>{children}</>;
}
export { RouterGuard };
