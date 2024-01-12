import type { ReactNode } from 'react';

export const Card = (props: {
  id: string;
  title: string;
  children: ReactNode;
}) => (
  <div
    id={props.id}
    className="m-4 flex w-full flex-col items-center rounded-lg bg-[#333333] p-2 md:w-1/2"
  >
    <h2 className="w-full rounded-t-lg p-2 text-center text-3xl font-semibold text-white">
      {props.title}
    </h2>
    <div className="w-full p-2">{props.children}</div>
  </div>
);
