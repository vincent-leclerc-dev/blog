import classNames from 'classnames';
import PropTypes from 'prop-types';

interface Props {
  className?: string;
  text: string;
  subject: string;
}

export const MailTo = ({ className, text, subject }: Props): JSX.Element => {
  const inputClasses = classNames([
    'w-fit',
    'font-normal',
    'text-[#ffffff]',
    'text-[18px]',
    'text-center',
    'tracking-[1.08px]',
    'leading-[normal]',
    'whitespace-nowrap',
    'relative',
    "[font-family:'Roboto',Helvetica]",
    '[background:transparent]',
    'border-[none]',
    'p-0',
    className,
  ]);

  return (
    <div className="relative flex w-[526px] items-center gap-[10px] bg-red-500">
      <img className="h-[24px] w-[24px]" alt="letter" src="/letter.svg" />
      <a href={`mailto:${text}?subject=${subject}`} className={inputClasses}>
        {text}
      </a>
    </div>
  );
};

MailTo.propTypes = {
  subject: PropTypes.string,
  text: PropTypes.string,
};
