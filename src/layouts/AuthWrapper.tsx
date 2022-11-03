import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

import useFirebaseAuth from '@/services/firebase/useFirebaseAuth';

const authUserContext = createContext({
  authUser: null,
  loading: true,
});

type T = {
  children: ReactNode;
};

export function AuthUserProvider(x: T) {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>
      {x.children}
    </authUserContext.Provider>
  );
}
export const useAuth = () => useContext(authUserContext);
