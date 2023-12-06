import classNames from 'classnames';
import PropTypes from 'prop-types';

interface Props {
  className?: string;
  text: string;
}

export const Copyright = ({ className, text }: Props): JSX.Element => {
  const wrapperClasses = classNames([
    'flex',
    'w-[167px]',
    'items-center',
    'justify-end',
    'gap-[10px]',
    'relative',
  ]);

  const containerClasses = classNames([
    'w-fit',
    'mt-[-1.00px]',
    'ml-[-25.00px]',
    'text-[#ffffff]',
    'text-[18px]',
    'text-center',
    'tracking-[1.08px]',
    'leading-[normal]',
    'whitespace-nowrap',
    'relative',
    'font-thin',
    "[font-family:'Roboto',Helvetica]",
    className,
  ]);

  return (
    <div className={wrapperClasses}>
      <div className={containerClasses}>
        {text} © {new Date().getFullYear()}
      </div>
    </div>
  );
};

Copyright.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};
