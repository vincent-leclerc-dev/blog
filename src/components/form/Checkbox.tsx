import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import Error from './messages/Error';
import type { FieldProps } from './types';

export default function Checkbox({
  checked = false,
  disabled = false,
  errorText,
  toReset = false,
  isVisible = true,
  name,
  label = '',
  onClick,
  options = { required: false },
}: FieldProps) {
  const [isChecked, setIsChecked] = useState(checked);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    if (toReset) {
      setIsChecked(false);
    }
    if (isChecked) {
      if (onClick) {
        onClick();
      }
    }
  }, [isChecked, toReset]);

  return (
    <div className={`flex w-full flex-col ${isVisible ? '' : 'hidden'}`}>
      <div className="flex flex-wrap items-center p-2">
        <input
          className="me-2 h-4 w-4"
          type="checkbox"
          id={name}
          checked={isChecked}
          {...register(name, {
            required: options.required,
          })}
          onChange={() => setIsChecked(!isChecked)}
          disabled={disabled}
        />
        {label !== '' && (
          <label
            htmlFor={name}
            className="me-2 w-fit flex-wrap justify-start text-white"
          >
            {label}
          </label>
        )}
      </div>
      {errors[name] && (
        <Error>{(errors[name]?.message || errorText).toString()}</Error>
      )}
    </div>
  );
}
