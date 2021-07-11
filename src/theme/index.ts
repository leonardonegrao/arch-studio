const colors = {
  veryDarkBlue: '#1b1d23',
  darkGrey: '#60636d',
  mediumGrey: '#7d828f',
  lightGrey: '#c8ccd8',
  veryLightGrey: '#eeeff4',
  red: '#df5656',
  white: '#fff'
}

export const typographyVariants = {
  headingOneLarge: {
    fontSize: '200px',
    lineHeight: '200px',
    letterSpacing: '-5px',
    fontWeight: '700',
  },
  headingOneSmall: {
    fontSize: '80px',
    lineHeight: '80px',
    letterSpacing: '-2px',
    fontWeight: '700',
  },
  headingTwo: {
    fontSize: '56px',
    lineHeight: '56px',
    letterSpacing: '-2px',
    fontWeight: '700',
  },
  headingThree: {
    fontSize: '18px',
    lineHeight: '25px',
    fontWeight: '700',
  },
  body: {
    fontSize: '15px',
    lineHeight: '25px',
    fontWeight: '500',
  }
}

const theme = {
  colors,
  typographyVariants,
}

export default theme