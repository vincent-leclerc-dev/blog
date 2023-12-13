export const Visualizer = (): JSX.Element => (
  <div className="z-10 mx-8 mb-[60px] mt-[120px] flex w-full flex-col items-center justify-center gap-[30px] sm:flex-row">
    <div className="flex w-full flex-col items-center gap-[30px] lg:w-1/2">
      <div className="h-full w-full text-center text-[32px] font-semibold leading-[normal] tracking-[2px] text-white lg:text-[48px]">
        VINCENT LECLERC
      </div>
      <p className="h-full w-full text-center text-[26px] font-medium leading-[normal] tracking-[2px] text-transparent lg:text-[36px]">
        <span className="text-blue-500">Développeur </span>
        <span className="neonText animate-pulsate-fast whitespace-nowrap text-white">
          full stack
        </span>
      </p>
    </div>
    <div className="flex h-[125px] w-[125px] items-center justify-center rounded-full bg-gradient-to-r from-[#180257] to-[#111111] shadow-[-20px_10px_100px_4px_#004280] sm:h-[125px] sm:w-[125px] lg:h-[314px] lg:w-[314px]">
      <div className="flex h-[125px] w-[125px] animate-spin items-center  justify-center rounded-full shadow-[-40px_10px_100px_10px_rgba(255,255,255,0.2)] animate-duration-very-long animate-ease-linear sm:h-[125px] sm:w-[125px] lg:h-[314px] lg:w-[314px]">
        <img
          className="h-[133px] w-[133px] -rotate-90 rounded-[133px] object-cover sm:h-[133px] sm:w-[133px] lg:h-[333px] lg:w-[333px]"
          alt="Luna"
          src="/luna.webp"
        />
      </div>
    </div>
  </div>
);
