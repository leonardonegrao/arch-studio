import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@theme/GlobalStyle';
import theme from '@theme/index';

export default function GlobalProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
