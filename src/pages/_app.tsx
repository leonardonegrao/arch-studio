/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Layout from '../components/Layout';
import theme from '../theme';
import { GlobalStyle } from '../theme/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
