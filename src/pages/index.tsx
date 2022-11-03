import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAuth } from '@/layouts/AuthWrapper';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const route = useRouter();

  const { authUser, loading } = useAuth();

  useEffect(() => {
    if (!loading && !authUser) {
      route.push('/welcome');
    }
  });
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      {}
    </Main>
  );
};

export default Index;
