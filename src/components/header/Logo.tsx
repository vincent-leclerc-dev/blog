export const Logo = (): JSX.Element => (
  <a
    aria-label="Logo"
    href="/"
    className="m-[18px] flex h-[48px] w-[48px] flex-col"
  >
    <div
      aria-hidden="true"
      className="h-[48px] w-[48px] bg-[url('/logo-48-48-holo-black.svg')]"
    >
      &nbsp;
    </div>
  </a>
);
