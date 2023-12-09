import PropTypes from 'prop-types';

interface Props {
  text: string;
}

export const Copyright = ({ text }: Props): JSX.Element => (
  <div
    className="flex w-full flex-wrap items-center justify-center gap-[4px] 
    p-2 text-sm text-white md:w-1/2 md:justify-start"
  >
    <a href="/" className="underline hover:text-blue-500">
      {text}
    </a>{' '}
    <span>©</span>
    <span>{new Date().getFullYear()}</span>
  </div>
);

Copyright.propTypes = {
  text: PropTypes.string,
};
