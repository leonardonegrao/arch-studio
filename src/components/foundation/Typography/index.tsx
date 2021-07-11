import React from 'react'
import styled, { css } from 'styled-components'

interface TextProps {
  tag?: React.ElementType
  variant: 'heading1Large' | 'heading1Small' | 'heading2' | 'heading3' | 'body'
  color: 'veryDarkBlue' | 'darkGrey' | 'mediumGrey' | 'lightGrey' | 'veryLightGrey' | 'red' | 'white'
  children: React.ReactNode
}

export const TypographyVariantsMap = {
  heading1Large: css`
    font-size: ${({ theme }) => theme.typographyVariants.headingOneLarge.fontSize};
    line-height: ${({ theme }) => theme.typographyVariants.headingOneLarge.lineHeight};
    letter-spacing: ${({ theme }) => theme.typographyVariants.headingOneLarge.letterSpacing};
    font-weight: ${({ theme }) => theme.typographyVariants.headingOneLarge.fontWeight};
  `,
  heading1Small: css`
    font-size: ${({ theme }) => theme.typographyVariants.headingOneSmall.fontSize};
    line-height: ${({ theme }) => theme.typographyVariants.headingOneSmall.lineHeight};
    letter-spacing: ${({ theme }) => theme.typographyVariants.headingOneSmall.letterSpacing};
    font-weight: ${({ theme }) => theme.typographyVariants.headingOneSmall.fontWeight};
  `,
  heading2: css`
    font-size: ${({ theme }) => theme.typographyVariants.headingTwo.fontSize};
    line-height: ${({ theme }) => theme.typographyVariants.headingTwo.lineHeight};
    letter-spacing: ${({ theme }) => theme.typographyVariants.headingTwo.letterSpacing};
    font-weight: ${({ theme }) => theme.typographyVariants.headingTwo.fontWeight};
  `,
  heading3: css`
    font-size: ${({ theme }) => theme.typographyVariants.headingThree.fontSize};
    line-height: ${({ theme }) => theme.typographyVariants.headingThree.lineHeight};
    letter-spacing: ${({ theme }) => theme.typographyVariants.headingThree.letterSpacing};
    font-weight: ${({ theme }) => theme.typographyVariants.headingThree.fontWeight};
  `,
  body: css`
    font-size: ${({ theme }) => theme.typographyVariants.body.fontSize};
    line-height: ${({ theme }) => theme.typographyVariants.body.lineHeight};
    letter-spacing: ${({ theme }) => theme.typographyVariants.body.letterSpacing};
    font-weight: ${({ theme }) => theme.typographyVariants.body.fontWeight};
  `,
}

interface BaseTypographyProps {
  variant: string
  color: string
  as?: React.ElementType
}

const BaseTypography = styled.span<BaseTypographyProps>`
  ${(props) => TypographyVariantsMap[props.variant]}
  color: ${({ theme, color }) => theme.colors[color]};

  margin: 0;
`

export default function Typography({ tag = 'span', variant, color, children, ...props }: TextProps) {
  return (
    <BaseTypography
      variant={variant}
      color={color}
      as={tag}
      {...props}
    >
      {children}
    </BaseTypography>
  )
}