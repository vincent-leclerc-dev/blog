import { Logo } from './header/Logo';
import { Navbar } from './header/Navbar';
import { Skills } from './header/Skills';

const Header = () => {
  return (
    <header className="relative z-20 w-full bg-black">
      <div id="starfield" className="absolute inset-0 z-10">
        <canvas className="h-[500px] w-full" id="canvas"></canvas>
      </div>
      <div className="container relative mx-auto flex flex-col items-center">
        <div className="relative z-40 flex h-[600px] w-full flex-row items-center justify-between px-4 py-[44px]">
          <Logo />
          <Navbar />
          <div className="z-20 flex w-full flex-col items-center justify-center gap-[30px] lg:flex-row">
            <div className="flex w-full flex-col items-center gap-[30px] lg:w-1/2">
              <div className="h-full w-full text-center text-[48px] font-semibold leading-[normal] tracking-[2.88px] text-[#ffffff]">
                VINCENT LECLERC
              </div>
              <p className="h-full w-full text-center text-[36px] font-medium leading-[normal] tracking-[2.16px] text-transparent">
                <span className="text-blue-500">Développeur </span>
                <span className="neonText pulsate whitespace-nowrap text-white">
                  full stack
                </span>
              </p>
            </div>
            <div className="flex h-[125px] w-[125px] items-center justify-center rounded-full bg-gradient-to-r from-[#001a33] to-[#111111] shadow-[-20px_10px_100px_4px_#004280] animate-duration-very-long animate-ease-linear sm:h-[220px] sm:w-[220px] lg:h-[314px] lg:w-[314px]">
              <div className="flex h-[125px] w-[125px] animate-spin items-center  justify-center rounded-full shadow-[-40px_10px_100px_10px_rgba(255,255,255,0.2)] animate-duration-very-long animate-ease-linear sm:h-[220px] sm:w-[220px] lg:h-[314px] lg:w-[314px]">
                <img
                  className="h-[133px] w-[133px] -rotate-90 rounded-[133px] object-cover sm:h-[233px] sm:w-[233px] lg:h-[333px] lg:w-[333px]"
                  alt="Image"
                  src="/image.png"
                />
              </div>
            </div>
          </div>
        </div>
        <Skills />
      </div>
    </header>
  );
};

export { Header };
