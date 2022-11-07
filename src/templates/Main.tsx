import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="mx-auto flex max-w-screen-md items-center justify-center antialiased">
    {props.meta}
    <div className="mx-auto w-full max-w-[480px]">{props.children}</div>
  </div>
);

export { Main };
