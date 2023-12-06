import classNames from 'classnames';
import PropTypes from 'prop-types';

interface Props {
  className?: string;
  subject: string;
  text: string;
}

export const CollaborateWithMe = ({ text, subject }: Props): JSX.Element => {
  const wrapperClasses = classNames([
    'flex',
    'w-[602px]',
    'gap-[30px]',
    'items-center',
    'justify-center',
  ]);

  return (
    <div className={wrapperClasses}>
      <p className="h-[90px] w-[288px] text-[25px] font-semibold leading-[normal] tracking-[1.50px] text-transparent [font-family:'Roboto',Helvetica]">
        <span className="text-white">
          VOUS SOUHAITEZ <br />
        </span>
        <span className="text-blue">COLLABORER </span>
        <span className="text-white">AVEC MOI?</span>
      </p>

      <div
        className={`w-[400px] gap-[27px] rounded-[45px] bg-blue px-[18px] py-[10px]`}
      >
        <a
          href={`mailto:${text}?subject=${subject}`}
          className="flex flex-row items-center justify-center gap-[10px] whitespace-nowrap text-center text-[16px] font-semibold leading-[normal] tracking-[0.96px] text-[#ffffff] [font-family:'Roboto',Helvetica]"
        >
          <img
            className="relative h-[30px] w-[30px]"
            alt="IconLetter"
            src="/icon.svg"
          />{' '}
          DISCUTTONS DE VOTRE PROJET
        </a>
      </div>
    </div>
  );
};

CollaborateWithMe.propTypes = {
  className: PropTypes.string,
  subject: PropTypes.string,
  text: PropTypes.string,
};
