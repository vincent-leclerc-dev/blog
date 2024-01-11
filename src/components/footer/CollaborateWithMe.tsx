import classNames from 'classnames';
import PropTypes from 'prop-types';

type CollaborateWithMeProps = {
  subject: string;
  text: string;
  className?: string;
};

export const CollaborateWithMe = ({
  text,
  subject,
}: CollaborateWithMeProps): JSX.Element => {
  const wrapperClasses = classNames([
    'w-full',
    'md:w-1/2',
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    'lg:w-2/3',
    'lg:flex-row',
  ]);

  return (
    <div className={wrapperClasses}>
      <div className="mb-16 hidden w-full items-center justify-center sm:block lg:w-1/2">
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
      <div className={`mb-16 flex items-center justify-center lg:w-1/2`}>
        <div className="flex w-fit flex-row rounded-[44px] bg-gradient-to-r from-[#2a1683] via-[#5c0099] to-[#ff0095] p-2 sm:px-4">
          <a
            href={`mailto:${text}?subject=${subject}`}
            className="flex items-center justify-center gap-[10px] text-center text-[16px] font-semibold text-[#ffffff]"
          >
            <img
              className="h-[30px] w-[30px] md:block"
              alt="IconLetter"
              src="/letter.svg"
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
