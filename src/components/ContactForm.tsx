import { addDoc, collection } from 'firebase/firestore';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { db } from '../firebase/client';
import {
  Button,
  Captcha,
  EmailField,
  Info,
  Success,
  TextArea,
  TextField,
} from './form';

export default function ContactForm() {
  const [captchaVisibility, setCaptchaVisibility] = useState(false);
  const [isCaptchaSubmitted, setIsCaptchaSubmitted] = useState(false);
  const [isCaptchaValidated, setIsCaptchaValidated] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const methods = useForm();
  const { trigger, getValues, reset } = methods;

  const handleSubmit: React.FormEventHandler = async (
    event: React.FormEvent,
  ): Promise<void> => {
    event.preventDefault();

    const step1IsValid = await trigger(['name', 'email', 'message']);

    setCaptchaVisibility(step1IsValid);

    if (step1IsValid && isCaptchaValidated) {
      await addDoc(collection(db, 'contacts'), {
        name: getValues('name'),
        email: getValues('email'),
        message: getValues('message'),
        createdAt: new Date(),
      });

      setIsFormSubmitted(true);
      setCaptchaVisibility(false);
      setIsCaptchaSubmitted(false);
      setIsCaptchaValidated(false);

      setTimeout(() => {
        setIsFormSubmitted(false);
      }, 3000);
    }
  };

  const handleCaptchaCallback = (isValidCaptcha: boolean): void => {
    setIsCaptchaSubmitted(true);
    setIsCaptchaValidated(isValidCaptcha);
    setCaptchaVisibility(isValidCaptcha);
  };

  useEffect(() => {
    if (isFormSubmitted) {
      setCaptchaVisibility(false);
      reset();
    }
  }, [isFormSubmitted, reset]);

  return (
    <div
      id="contact"
      className="m-2 flex w-full flex-col items-center rounded-lg bg-[#333333] p-2"
    >
      <h2 className="w-full rounded-t-lg p-2 text-center text-3xl font-semibold text-white">
        Contact
      </h2>
      <div className="w-full p-2">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit} className="flex w-full flex-col">
            <div className="flex w-full flex-col">
              <TextField
                name="name"
                placeholder="Nom (optionnel)"
                errorText="Le champ nom est obligatoire, veuillez le renseigner."
                options={{ required: false }}
              />
            </div>
            <div className="flex w-full flex-col">
              <EmailField
                name="email"
                placeholder="Email"
                errorText="Veuillez respecter le format email."
              />
            </div>
            <div className="flex w-full flex-col">
              <TextArea
                name="message"
                placeholder="Message"
                errorText="Le champ message est obligatoire, veuillez le renseigner."
              />
            </div>
            {!isFormSubmitted && (
              <Captcha
                isValid={isCaptchaValidated}
                isVisible={captchaVisibility}
                captchaCallback={handleCaptchaCallback}
              />
            )}
            {isCaptchaSubmitted && !isCaptchaValidated && (
              <Info>
                Vous pouvez me contacter par email ou sur Linkedin ci-dessous.
              </Info>
            )}
            {isFormSubmitted && (
              <Success>Votre message a bien été envoyé.</Success>
            )}
            <div className="w-full rounded-b-lg px-4 py-2 ">
              <div className="flex w-full items-center ">
                {(!isCaptchaSubmitted || isCaptchaValidated) && (
                  <Button
                    type="submit"
                    text="Envoyer"
                    className="justify-end"
                  />
                )}
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
