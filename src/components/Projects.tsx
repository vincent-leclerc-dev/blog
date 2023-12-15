type Project = {
  name: string;
  description: string;
};

type ProjectsProps = {
  data: Project[];
  bgClass?: string;
  bgHoverClass?: string;
};

export const Projects = ({ data }: ProjectsProps): JSX.Element => (
  <div
    id="projects"
    className="m-4 flex w-1/2 flex-col items-center rounded-lg bg-blue-500 p-2"
  >
    <h2 className="bg-blue-500 p-4 text-3xl font-semibold text-white">
      Mes derniers projets
    </h2>
    <ul className="flex flex-wrap bg-gray-950">
      {data.map((project) => (
        <li
          key={project.name}
          className="m-4 flex w-full bg-slate-400 px-4 py-2 text-xl text-white"
        >
          {project.name}
        </li>
      ))}
    </ul>
  </div>
);
