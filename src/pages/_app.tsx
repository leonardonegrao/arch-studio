import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../theme/GlobalStyle'
import theme from '../theme'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
