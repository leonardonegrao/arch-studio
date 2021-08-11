import React from 'react'
import styled, { css } from 'styled-components'

interface TextProps {
  tag?: React.ElementType
  variant: 'heading1Large' | 'heading1Small' | 'heading2' | 'heading3' | 'body'
  color: 'veryDarkBlue' | 'darkGrey' | 'mediumGrey' | 'lightGrey' | 'veryLightGrey' | 'red' | 'white'
  children: React.ReactNode
}

export const TypographyVariantsMap = (variant: any) => {
  return css`
    font-size: ${({ theme }) => theme.typographyVariants[variant].fontSize};
    line-height: ${({ theme }) => theme.typographyVariants[variant].lineHeight};
    letter-spacing: ${({ theme }) => theme.typographyVariants[variant].letterSpacing};
    font-weight: ${({ theme }) => theme.typographyVariants[variant].fontWeight};
  `
};

interface BaseTypographyProps {
  variant: string
  color: string
  as?: React.ElementType
}

const BaseTypography = styled.span<BaseTypographyProps>`
  ${(props) => TypographyVariantsMap(props.variant)}
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