/* eslint-disable indent */
import styled, { css } from 'styled-components';

import { breakpointsMedia } from '@theme/utils/breakpointsMedia';

interface StyledBurgerProps {
  open: boolean;
}

export const StyledBurger = styled.button<StyledBurgerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 2rem;
  height: 2rem;

  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  
  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #000;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  ${breakpointsMedia({
  md: css`
    display: none;
  `,
})}
`;
