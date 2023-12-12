import classNames from 'classnames';
import PropTypes from 'prop-types';

interface Props {
  className?: string;
  subject: string;
  text: string;
}

export const CollaborateWithMe = ({ text, subject }: Props): JSX.Element => {
  const wrapperClasses = classNames([
    'w-full',
    'md:w-2/3',
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    'lg:flex-row',
    'lg:justify-between',
  ]);

  return (
    <div className={wrapperClasses}>
      <div className="hidden w-full items-center justify-center pb-[44px] sm:block lg:w-1/2">
        <div className="flex flex-col items-center justify-center whitespace-nowrap md:flex-row">
          <span className="text-center text-[25px] font-semibold text-white ">
            VOUS SOUHAITEZ
          </span>
        </div>
        <div className="flex flex-row items-center justify-center gap-[10px]">
          <span className="text-center text-[25px] font-semibold text-blue-500">
            COLLABORER
          </span>
          <span className="hidden text-center text-[25px] font-semibold text-white xl:block">
            AVEC MOI
          </span>
          <span className="text-center text-[25px] font-semibold text-white">
            ?
          </span>
        </div>
      </div>
      <div className={`flex items-center justify-center lg:w-1/2`}>
        <div className="mb-[44px] flex w-fit flex-row rounded-[44px] bg-blue-500 p-2 sm:px-4">
          <a
            href={`mailto:${text}?subject=${subject}`}
            className="flex items-center justify-center gap-[10px] text-center text-[16px] font-semibold text-[#ffffff]"
          >
            <img
              className="h-[30px] w-[30px] md:block"
              alt="IconLetter"
              src="/icon.svg"
            />{' '}
            <span>DISCUTTONS</span>
            <span className="hidden xl:block">DE VOTRE PROJET</span>
          </a>
        </div>
      </div>
    </div>
  );
};

CollaborateWithMe.propTypes = {
  className: PropTypes.string,
  subject: PropTypes.string,
  text: PropTypes.string,
};
