import pk from '../../../package.json';

export const Version = (): JSX.Element => (
  <div
    className="flex w-full flex-col items-center justify-center gap-[4px] 
  p-2 text-sm text-white md:w-1/2 md:flex-row md:justify-end"
  >
    <div
      className="flex flex-wrap items-center justify-center gap-[4px] 
    p-2 "
    >
      <span>Navigateur:</span>
      <span id="browser" className="text-blue-500"></span>
    </div>
    <div
      id="version"
      className="flex  flex-wrap items-center justify-center gap-[4px] 
    p-2"
    >
      <span>Version:</span>
      <a
        className="text-blue-500 underline"
        href={pk.repository.url}
        target="_blank"
      >
        {pk.version}
      </a>
    </div>
  </div>
);
