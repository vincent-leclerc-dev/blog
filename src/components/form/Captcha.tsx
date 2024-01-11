import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import type { TokenProperties } from '@/types/recaptcha';

import Checkbox from './Checkbox';
import { Error, Success } from './messages';

declare let grecaptcha: any;

interface Props {
  captchaCallback: (test: boolean) => void;
  isValid: boolean;
  isVisible: boolean;
  toReset?: boolean;
}

export default function Captcha({
  captchaCallback,
  isValid = false,
  isVisible = false,
  toReset = false,
}: Props) {
  const { setError, register } = useFormContext();

  const [isValidCaptcha, setIsValidCaptcha] = useState(isValid);

  function handleCaptchaResponse(isValidResponse: boolean) {
    setIsValidCaptcha(isValidResponse);
    captchaCallback(isValidResponse);
  }

  async function handleCaptchaRequest() {
    grecaptcha.enterprise.ready(async () => {
      const token = await grecaptcha.enterprise.execute(
        import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY,
        { action: 'CONTACT' },
      );

      fetch('/recaptcha', {
        method: 'POST',
        body: JSON.stringify({ recaptcha: token }),
      })
        .then((response) => response.json())
        .then(async (gResponse: TokenProperties) => {
          const isValidResponse = gResponse.valid;
          setIsValidCaptcha(isValidResponse);
          handleCaptchaResponse(isValidResponse);
          if (!isValidResponse) {
            // eslint-disable-next-line no-console
            console.error(gResponse.invalidReason);
            setError('captcha', {
              type: 'manual',
              message: "Le captcha n'est pas valide.",
            });
          }
        });
    });
  }

  return (
    <div
      className={`flex flex-col justify-center ${isVisible ? '' : 'hidden'}`}
    >
      <Checkbox
        name="captchaCheckbox"
        label="Je ne suis pas un robot"
        errorText="Le champ captcha est obligatoire. Veuillez le renseigner."
        onClick={handleCaptchaRequest}
        checked={isValidCaptcha}
        disabled={isValidCaptcha}
        toReset={toReset}
      />
      <input
        type="hidden"
        value={isValidCaptcha.toString()}
        {...register('captcha', {
          required: true,
        })}
      />
      <div className="p-2 text-xs font-thin text-white">
        This site is protected by reCAPTCHA and the Google{' '}
        <a className="text-blue-500" href="https://policies.google.com/privacy">
          Privacy Policy
        </a>{' '}
        and{' '}
        <a className="text-blue-500" href="https://policies.google.com/terms">
          Terms of Service
        </a>{' '}
        apply.
      </div>
      {isValidCaptcha && <Success>Le captcha est valide.</Success>}
      {!isValidCaptcha && (
        <Error>Le champ captcha est obligatoire. Veuillez le renseigner.</Error>
      )}
    </div>
  );
}
