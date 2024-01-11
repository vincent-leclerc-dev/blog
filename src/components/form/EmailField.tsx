import { useFormContext } from 'react-hook-form';

import Error from './messages/Error';
import type { FieldProps } from './types';

export default function EmailField({
  name,
  placeholder,
  errorText = 'Veuillez respecter le format email.',
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
        placeholder={placeholder}
        {...register(name, {
          required: options.required,
          pattern:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          onBlur: () => trigger(name),
        })}
        className="my-2 w-full rounded-lg bg-[#222222] p-4 text-white outline-none focus:outline focus:outline-1 focus:outline-blue-500"
      />
      {errors[name] && <Error>{errorText}</Error>}
    </>
  );
}
