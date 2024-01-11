import { useFormContext } from 'react-hook-form';

import Error from './messages/Error';
import type { FieldProps } from './types';

export default function TextField({
  name,
  placeholder,
  errorText,
  options = { required: true },
}: FieldProps) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        {...register(name, {
          required: options.required,
          onBlur: () => trigger(name),
        })}
        className="mb-2 w-full rounded-lg bg-[#222222] p-4 text-white outline-none focus:outline focus:outline-1 focus:outline-blue-500"
      />
      {errors[name] && <Error>{errorText}</Error>}
    </>
  );
}
