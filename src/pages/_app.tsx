import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import useSystemTheme from 'react-use-system-theme';

export default function App({ Component, pageProps }: AppProps) {
  const [faviconUrl, setFaviconUrl] = useState<string>('/favicon.svg'); 
  const systemTheme = useSystemTheme();
  
  useEffect(() => {
    const updatedFaviconUrl = systemTheme === 'dark' ? '/favicon-dark.svg' : '/favicon.svg';
    setFaviconUrl(updatedFaviconUrl);
  }, [systemTheme]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <link rel="icon" href={faviconUrl} type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
