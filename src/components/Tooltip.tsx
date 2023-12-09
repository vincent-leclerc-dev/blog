import classNames from 'classnames';
import PropTypes from 'prop-types';

interface Props {
  className?: string;
  text: string;
}

export const Tooltip = ({ className, text }: Props): JSX.Element => {
  const tooltipClasses = classNames([
    'absolute',
    'left-1/2',
    'm-3',
    'mx-auto',
    '-translate-x-1/2',
    'translate-y-full',
    'rounded-md',
    'bg-blue-500',
    'p-2',
    'text-sm',
    'capitalize',
    'text-white',
    'opacity-0',
    'transition-opacity',
    'group-hover:opacity-100',
    'z-10',
    'transition-opacity',
    'duration-1000',
    'ease-in-out',
    className,
  ]);

  return <span className={tooltipClasses}>{text}</span>;
};

Tooltip.propTypes = {
  text: PropTypes.string,
};
