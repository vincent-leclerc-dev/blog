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
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.69 12.06C12.5062 12.2258 12.2675 12.3176 12.02 12.3176C11.7725 12.3176 11.5337 12.2258 11.35 12.06L2.87 4.35C3.20275 4.12206 3.59665 4.00005 4 4H20C20.4033 4.00005 20.7972 4.12206 21.13 4.35L12.69 12.06Z"
          fill="white"
        />
        <path
          d="M22 6.26001V17C22 17.7957 21.6839 18.5587 21.1213 19.1213C20.5587 19.6839 19.7956 20 19 20H5C4.20435 20 3.44129 19.6839 2.87868 19.1213C2.31607 18.5587 2 17.7957 2 17V6.26001L10.68 14.18C11.0461 14.4979 11.5152 14.6721 12 14.67C12.4909 14.669 12.9643 14.4875 13.33 14.16L22 6.26001Z"
          fill="white"
        />
      </svg>
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
