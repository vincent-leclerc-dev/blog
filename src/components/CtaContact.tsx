import PropTypes from 'prop-types';

interface Props {
  className: any;
  text: string;
}

export const CtaContact = ({
  className,
  text = 'DITES BONJOUR',
}: Props): JSX.Element => {
  return (
    <div
      className={`relative inline-flex items-center justify-center gap-[27px] rounded-[45px] bg-blue-500 px-[18px] py-[10px] ${className}`}
    >
      <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center text-[16px] font-semibold leading-[normal] tracking-[0.96px] text-[#ffffff] [font-family:'Roboto',Helvetica]">
        {text}
      </div>
    </div>
  );
};

CtaContact.propTypes = {
  text: PropTypes.string,
};
