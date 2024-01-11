import type { ReactNode } from 'react';

const Warning = (props: { children: ReactNode }) => (
  <div className="flex w-full items-center p-2 text-yellow-500">
    {props.children}
  </div>
);

export default Warning;
