export const Panel = (): JSX.Element => (
  <div className="flex w-full flex-wrap items-center justify-evenly bg-gray-100/10 px-[30px] py-[10px] sm:rounded-t-lg md:w-auto md:gap-[120px] md:px-[60px] md:py-[30px]">
    <a
      href="/#frontend"
      className="flex h-[88px] w-[88px] flex-col items-center justify-between p-2"
    >
      <img className="h-[45px] w-[45px]" alt="Palette" src="/frontend.svg" />
      <div className="w-fit whitespace-nowrap text-center text-[18px] font-semibold leading-[normal] tracking-[1.08px] text-blue-500">
        Frontend
      </div>
    </a>
    <a
      href="/#backend"
      className="flex h-[88px] w-[88px] flex-col items-center justify-between p-2"
    >
      <img
        className="mt-[5px] h-[35.43px] w-[45px]"
        alt="Code"
        src="/backend.svg"
      />
      <div className="w-fit whitespace-nowrap text-center text-[18px] font-semibold leading-[normal] tracking-[1.08px] text-blue-500">
        Backend
      </div>
    </a>
    <a
      href="/#ops"
      className="flex h-[88px] w-[88px] flex-col items-center justify-between p-2"
    >
      <img className="h-[45px] w-[45px]" alt="Terminal" src="/ops.svg" />
      <div className="w-fit whitespace-nowrap text-center text-[18px] font-bold leading-[normal] tracking-[1.08px] text-blue-500">
        Ops
      </div>
    </a>
  </div>
);
