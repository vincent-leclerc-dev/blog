export const Skills = (): JSX.Element => (
  <div className="mb-[30px] flex items-center justify-center gap-[60px] rounded-lg bg-white px-[30px] py-[10px] md:gap-[120px] md:px-[60px] md:py-[30px]">
    <a
      href="/#frontend"
      className="flex h-[90px] flex-[0_0_auto] flex-col items-center justify-between"
    >
      <img className="h-[45px] w-[45px]" alt="Icon" src="/icon-3.svg" />
      <div className="w-fit whitespace-nowrap text-center text-[18px] font-semibold leading-[normal] tracking-[1.08px] text-blue-500">
        Frontend
      </div>
    </a>
    <a
      href="/#backend"
      className="flex h-[90px] flex-[0_0_auto] flex-col items-center justify-between"
    >
      <img className="h-[35.43px] w-[45px]" alt="Icon" src="/icon-2.svg" />
      <div className="w-fit whitespace-nowrap text-center text-[18px] font-semibold leading-[normal] tracking-[1.08px] text-blue-500">
        Backend
      </div>
    </a>
    <a
      href="/#ops"
      className="flex h-[90px] flex-[0_0_auto] flex-col items-center justify-between"
    >
      <img className="h-[45px] w-[45px]" alt="Icon" src="/icon-1.svg" />
      <div className="w-fit whitespace-nowrap text-center text-[18px] font-bold leading-[normal] tracking-[1.08px] text-blue-500">
        Ops
      </div>
    </a>
  </div>
);
