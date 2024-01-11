import type { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export type MessageProps = {
  text: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
};
