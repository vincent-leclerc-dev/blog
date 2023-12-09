import pk from '../../../package.json';

export const Version = (): JSX.Element => (
  <div
    className="flex w-full flex-wrap items-center justify-center gap-[4px] 
    p-2 text-sm text-white md:w-1/2 md:justify-end"
  >
    <span>Version:</span>
    <a
      className="underline hover:text-blue-500"
      href={pk.repository.url}
      target="_blank"
    >
      {pk.version}
    </a>
  </div>
);
