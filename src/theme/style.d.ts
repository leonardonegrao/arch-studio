import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    }

    colors: {
      veryDarkBlue: string;
      darkGrey: string;
      mediumGrey: string;
      lightGrey: string;
      veryLightGrey: string;
      red: string;
      white: string;
    }

    typographyVariants: {
      heading1Large: {
        fontSize: string,
        lineHeight: string,
        letterSpacing: string,
        fontWeight: string,
      },
      heading1Small: {
        fontSize: string,
        lineHeight: string,
        letterSpacing: string,
        fontWeight: string,
      },
      heading2: {
        fontSize: string,
        lineHeight: string,
        letterSpacing: string,
        fontWeight: string,
      },
      heading3: {
        fontSize: string,
        lineHeight: string,
        fontWeight: string,
      },
      body: {
        fontSize: string,
        lineHeight: string,
        fontWeight: string,
      }
    }
  }
}
