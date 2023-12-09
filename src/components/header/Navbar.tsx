export const Navbar = (): JSX.Element => (
  <div className="absolute right-0 top-0 z-40 m-8 flex h-[44px] items-center gap-[8px]">
    <a
      href="/#about"
      className="m-2 w-fit whitespace-nowrap rounded-md bg-blue-500/40 px-4 py-2 text-center text-[16px] font-semibold text-[#ffffff] hover:drop-shadow-[0_44px_44px_rgba(10,100,255,0.9)]"
    >
      A PROPOS
    </a>
    <a
      href="/#projects"
      className="m-2 w-fit whitespace-nowrap rounded-md bg-blue-500/40 p-2 px-4 text-center text-[16px] font-semibold text-[#ffffff] hover:drop-shadow-[0_44px_44px_rgba(10,100,255,0.9)]"
    >
      PROJETS
    </a>
  </div>
);
