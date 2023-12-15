import { Logo } from './header/Logo';
import { Navbar } from './header/Navbar';
import { Panel } from './header/Panel';
import { Visualizer } from './header/Visualizer';

const Header = () => (
  <header className="w-full">
    <div id="starfield" className="absolute left-0 top-0 -z-10">
      <canvas className="w-full" id="canvas"></canvas>
    </div>
    <div className="container m-auto">
      <div className="flex items-center justify-between">
        <Logo />
        <Navbar />
      </div>
      <div className="flex items-center justify-between">
        <Visualizer />
      </div>
    </div>
    <div className="w-full bg-gradient-to-t from-black">
      <div className="flex w-full items-end justify-center">
        <Panel />
      </div>
    </div>
  </header>
);

export { Header };
