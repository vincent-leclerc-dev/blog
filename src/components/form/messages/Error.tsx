import type { ReactNode } from 'react';

const Error = (props: { children: ReactNode }) => (
  <div className="mb-2 flex w-full items-center p-2 text-red-500">
    {props.children}
  </div>
);

export default Error;
