import { twMerge } from 'tailwind-merge';

import { Card } from './Card';

type Tag = {
  label: string;
  category: string;
  note: number;
};

type TagsProps = {
  data: Tag[];
  bgClass?: string;
  bgHoverClass?: string;
};

enum CategoryAsColor {
  backend = 'bg-[#2a1683]',
  frontend = 'bg-[#5c0099]',
  ops = 'bg-[#ff0095]',
  default = 'bg-gray-500',
}

const getCategoryAsColor = (category: string): CategoryAsColor => {
  const categoryAsColor: Record<string, CategoryAsColor> = {
    frontend: CategoryAsColor.backend,
    backend: CategoryAsColor.frontend,
    ops: CategoryAsColor.ops,
  };
  return categoryAsColor[category] || CategoryAsColor.default;
};

export const Tags = ({ data }: TagsProps = { data: [] }): JSX.Element => (
  <Card id="skills" title="Mes compétences">
    <ul className="flex flex-wrap rounded bg-[#444444]">
      {data.map((item) => (
        <li
          key={item.label}
          className={twMerge(
            'flex flex-wrap whitespace-nowrap m-4 w-fit rounded-2xl text-white bg-slate-400 py-2 px-4 text-xl',
            getCategoryAsColor(item.category),
          )}
        >
          {item.label}
        </li>
      ))}
    </ul>
  </Card>
);
