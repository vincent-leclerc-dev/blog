// import classNames from 'classnames';
import PropTypes from 'prop-types';

interface Props {
  text: string;
}

export const SpaceButton = ({ text }: Props): JSX.Element => {
  return (
    <span className="relative inline-block h-[44px] skew-x-[-10deg]">
      <div
        className="
        relative flex h-[44px] items-center justify-center whitespace-nowrap bg-gray-800 text-[18px] font-medium text-white
        before:absolute before:left-[-10px] before:top-0 before:z-[-1] before:block before:h-full before:w-[30px] before:skew-x-[10deg] before:rounded-[6px] before:bg-gray-800
        after:absolute after:right-[-10px] after:top-0 after:z-[-1] after:block after:h-full after:w-[30px] after:skew-x-[10deg] after:rounded-[6px] after:bg-gray-800 hover:bg-gray-800 hover:text-blue-500 before:hover:bg-gray-800 after:hover:bg-gray-800"
      >
        {text}
      </div>
    </span>
  );
};

SpaceButton.propTypes = {
  text: PropTypes.string,
  bgClass: PropTypes.string,
  bgHoverClass: PropTypes.string,
};
