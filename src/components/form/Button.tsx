import type { ButtonProps } from './types';

const Button = ({ text, type = 'button' }: ButtonProps) => (
  <button
    type={type}
    className="flex h-[44px] w-[130px] flex-row items-center justify-center rounded-[44px] p-2 text-center text-[16px] font-semibold enabled:bg-gradient-to-r enabled:from-[#2a1683] enabled:via-[#5c0099] enabled:to-[#ff0095] enabled:text-[#ffffff] disabled:bg-[#555555] disabled:text-[#222222]"
  >
    {text}
  </button>
);

export default Button;
