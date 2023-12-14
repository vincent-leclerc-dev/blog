import { SpaceButton } from './SpaceButton';

export const Navbar = (): JSX.Element => (
  <nav className="m-[10px] flex w-1/2 skew-x-[10deg] items-center justify-end gap-[44px] rounded-[6px] bg-gradient-to-l from-gray-100/10 to-gray-100/0 px-4 py-1">
    <a href="#about">
      <SpaceButton text="A PROPOS" />
    </a>
    <a href="#projects">
      <SpaceButton text="PROJETS" />
    </a>
  </nav>
);
