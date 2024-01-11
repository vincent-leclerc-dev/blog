export type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  text: string;
  className?: string;
};

export type FieldProps = {
  checked?: boolean;
  disabled?: boolean;
  errorText: string;
  toReset?: boolean;
  isVisible?: boolean;
  label?: string;
  name: string;
  onClick?: () => void;
  onChange?: () => void;
  options?: { required: boolean };
  placeholder?: string;
};
