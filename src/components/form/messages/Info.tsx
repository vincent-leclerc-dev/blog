import type { ReactNode } from 'react';

const Info = (props: { children: ReactNode }) => (
  <div className="flex w-full items-center p-2 text-blue-500">
    {props.children}
  </div>
);

export default Info;
