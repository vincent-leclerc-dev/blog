import { twMerge } from 'tailwind-merge';

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
  <div
    id="skills"
    className="m-2 flex w-1/2 flex-col items-center rounded-lg bg-blue-500 p-2"
  >
    <h2 className="bg-blue-500 p-4 text-3xl font-semibold text-white">
      Mes compétences
    </h2>
    <ul className="flex flex-wrap bg-gray-950">
      {data.map((item) => (
        <li
          className={twMerge(
            'flex flex-wrap whitespace-nowrap m-4 w-fit rounded-2xl text-white bg-slate-400 py-2 px-4 text-xl',
            getCategoryAsColor(item.category),
          )}
        >
          {item.label}
        </li>
      ))}
    </ul>
  </div>
);
