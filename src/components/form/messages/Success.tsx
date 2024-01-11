import type { ReactNode } from 'react';

const Success = (props: { children: ReactNode }) => (
  <div className="flex w-full items-center p-2 text-green-500">
    {props.children}
  </div>
);

export default Success;
