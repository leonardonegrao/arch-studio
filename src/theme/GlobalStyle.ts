import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      font-family: 'Spartan', sans-serif;
      margin: 0;
      padding: 0;
    }

    ${normalize}
    
    button {
      font-family: 'Spartan', sans-serif;
    }

    body {
      margin: 0;
      padding: 0;
    }
    
    html, body {
      display: flex;
      min-height: 100vh;
      width: 100%;
    }

    #__next {
      flex: 1;
      display: flex;
      flex-direction: column;

      max-width: 100%;
    }
`;
