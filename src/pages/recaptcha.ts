export async function POST({ request }: any) {
  const data = await request.json();

  const recaptchaURL = `https://recaptchaenterprise.googleapis.com/v1/projects/${
    import.meta.env.PUBLIC_GOOGLE_CLOUD_PROJECT_ID
  }/assessments?key=${import.meta.env.PUBLIC_GOOGLE_CLOUD_API_KEY}`;

  const requestHeaders = {
    'Content-Type': 'application/json',
  };

  const requestBody = {
    event: {
      token: data.recaptcha,
      expectedAction: 'CONTACT',
      siteKey: import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY,
    },
  };

  const response = await fetch(recaptchaURL, {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(requestBody),
  });

  const responseData = await response.json();
  return new Response(JSON.stringify(responseData.tokenProperties), {
    status: 200,
  });
}
