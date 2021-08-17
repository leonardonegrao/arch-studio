import styled, { css } from 'styled-components';

import ArrowIcon from '../icons/ArrowIcon';

interface PropsButtonWrapper {
  variant: 'default' | 'square'
}

const ButtonDefault = css`
  padding: 0 32px;
  height: 72px;

  svg {
    margin-left: 24px;
  }
`;

const ButtonSquare = css`
  height: 80px;
  width: 80px;
`;

export const ButtonWrapper = styled.button<PropsButtonWrapper>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${(props) => css`${props.variant === 'square' ? ButtonSquare : ButtonDefault}`}
  background: ${({ theme }) => theme.colors.veryDarkBlue};
  color: white;
  font-size: ${({ theme }) => theme.typographyVariants.body.fontSize};
  line-height: ${({ theme }) => theme.typographyVariants.body.lineHeight};
  font-weight: ${({ theme }) => theme.typographyVariants.body.fontWeight};
  
  border: none;
  outline: none;
  border-radius: 0px;

  transition: background-color .3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.darkGrey};
  }

  &:active {
    background: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export default function Button({
  variant, children = null, showArrow = true, ...props
}) {
  return (
    <ButtonWrapper variant={variant} {...props}>
      {children && children}
      {showArrow && <ArrowIcon color="#fff" />}
    </ButtonWrapper>
  );
}
