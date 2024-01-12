import { Card } from './Card';

type Project = {
  name: string;
  description: string;
  link: string;
  status: string;
};

type ProjectsProps = {
  data: Project[];
  bgClass?: string;
  bgHoverClass?: string;
};

export const Projects = ({ data }: ProjectsProps): JSX.Element => (
  <Card id="projects" title="Projets">
    <ul className="grid grid-cols-2 gap-4">
      {data.map((project) => (
        <li
          key={project.name}
          className="h-32 cursor-pointer rounded bg-[#444444] px-4 py-2 text-xl text-white hover:bg-[#555555]"
        >
          <a href={project.link}>
            <h3 className="mb-2 text-xl font-bold text-blue-400">
              {project.name}
            </h3>
            <p className="text-sm">{project.description}</p>
          </a>
        </li>
      ))}
    </ul>
  </Card>
);
