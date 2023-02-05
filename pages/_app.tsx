import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Nunito } from '@next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Printinkz</title>
        <meta name='description' content='dashboard for merchants' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='apple-touch-icon' href='/appleIcons/apple-touch-icon.png' />
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/appleIcons/apple-touch-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/appleIcons/apple-touch-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/appleIcons/apple-touch-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/appleIcons/apple-touch-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/appleIcons/apple-touch-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/appleIcons/apple-touch-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/appleIcons/apple-touch-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/appleIcons/apple-touch-icon-180x180.png'
        />
      </Head>
      <main className={nunito.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

