export const Logo = (): JSX.Element => (
  <a
    aria-label="Logo"
    href="/"
    className="absolute left-0 top-0 z-30 m-[18px] flex h-[48px] w-[48px] flex-col"
  >
    <div
      aria-hidden="true"
      className="group absolute left-0 top-0 z-40 h-[48px] w-[48px] bg-[url('/logo-48-48-holo-black.svg')]"
    >
      &nbsp;
    </div>
  </a>
);
