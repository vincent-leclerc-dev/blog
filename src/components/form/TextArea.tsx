import { useFormContext } from 'react-hook-form';

import Error from './messages/Error';
import type { FieldProps } from './types';

export default function TextArea({
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
      <textarea
        placeholder={placeholder}
        {...register(name, {
          required: options.required,
          onBlur: () => trigger(name),
        })}
        className="my-2 h-40 w-full rounded-lg bg-[#222222] p-4 text-white outline-none focus:outline focus:outline-1 focus:outline-blue-500"
      ></textarea>
      {errors[name] && <Error>{errorText}</Error>}
    </>
  );
}
