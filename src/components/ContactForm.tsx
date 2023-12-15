import { addDoc, collection } from 'firebase/firestore';
import type { ReactElement } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { db } from '../firebase/client';

export const ContactForm = (): ReactElement => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data: any) => {
    await addDoc(collection(db, 'contacts'), {
      name: data.name,
      email: data.email,
      message: data.message,
    });
  };

  useEffect(() => {
    reset({ name: '', email: '', message: '' });
  }, [isSubmitSuccessful]);

  return (
    <div
      id="contact"
      className="m-4 flex w-1/2 flex-col items-center rounded-lg bg-[#333] p-2"
    >
      <h2 className="p-4 text-3xl font-semibold text-white">Contact</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col">
        <div className="flex w-full flex-col">
          <input
            type="text"
            placeholder="Nom"
            className="my-2 w-full bg-[#222222] p-4 text-white"
            {...register('name', { required: true })}
          />
          {errors.name && (
            <div className="w-full text-red-500">
              Le champ nom est obligatoire. Veuillez le renseigner.
            </div>
          )}
        </div>
        <div className="flex w-full flex-col">
          <input
            placeholder="Email"
            className="my-2 w-full bg-[#222222] p-4 text-white"
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && (
            <div className="w-full text-red-500">
              Veuillez respecter le format email.
            </div>
          )}
        </div>
        <div className="flex w-full flex-col">
          <textarea
            placeholder="Message"
            className="my-2 w-full bg-[#222222] p-4 text-white"
            {...register('message', { required: true })}
          ></textarea>
          {errors.message && (
            <div className="w-full text-red-500">
              Le champ message est obligatoire. Veuillez le renseigner.
            </div>
          )}
        </div>
        <div className="mt-4 flex w-full items-center justify-end">
          <button
            type="submit"
            className="flex h-[44px] w-[130px] flex-row items-center justify-center rounded-[44px] bg-[#111111] bg-gradient-to-r from-[#2a1683] via-[#5c0099] to-[#ff0095] p-2 text-center text-[16px] font-semibold text-[#ffffff]"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};
