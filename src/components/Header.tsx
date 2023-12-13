import { Logo } from './header/Logo';
import { Navbar } from './header/Navbar';
import { Skills } from './header/Skills';
import { Visualizer } from './header/Visualizer';

const Header = () => (
  <header className="relative w-full bg-black">
    <div id="starfield" className="absolute left-0 top-0 z-10">
      <canvas className="h-full w-full" id="canvas"></canvas>
    </div>
    <div className="container relative mx-auto flex flex-col items-center justify-center bg-black">
      <div className="relative z-10 flex h-full w-full flex-row items-center justify-between">
        <Logo />
        <Navbar />
        <Visualizer />
      </div>
      <div className="relative z-10 flex h-full w-full flex-row items-center justify-center">
        <Skills />
      </div>
    </div>
  </header>
);

export { Header };
