export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <p>
          To start using reCAPTCHA, you need to sign up for an API key pair for
          your site. The key pair consists of a site key and secret key. The
          site key is used to invoke reCAPTCHA service on your site or mobile
          application. The secret key authorizes communication between your
          application backend and the reCAPTCHA server to verify the user's
          response. The secret key needs to be kept safe for security purposes.
          <a
            href="https://developers.google.com/recaptcha/intro#recaptcha-overview"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Learn more about reCAPTCHA
          </a>
        </p>
      </main>
    </div>
  );
}
