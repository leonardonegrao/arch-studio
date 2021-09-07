/* eslint-disable indent */
import styled, { css } from 'styled-components';

import { ButtonWrapper } from '@components/common/Button';

import { breakpointsMedia } from '@theme/utils/breakpointsMedia';

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  ${breakpointsMedia({
  md: css`
    width: 573px;
  `,
  lg: css`
    display: block;

    position: relative;
    width: 1110px;
  `,
})}
`;

export const CarouselImageWrapper = styled.div`
  width: 100%;
  height: 720px;
  filter: brightness(70%);
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 1110px;
  }
`;

export const CarouselItemInfo = styled.div`
  position: absolute;
  z-index: 1;
  
  max-width: 311px;

  ${breakpointsMedia({
  md: css`
      max-width: 457px;
    `,
  lg: css`
    top: 180px;
    left: 190px;

    max-width: 544px;
  `,
})}
`;

export const CarouselOptionsSelector = styled.div`
  position: absolute;
  display: flex;

  bottom: 0px;
  left: -80px;
  z-index: 10;

  ${ButtonWrapper} {
    background: #fff;
    color: ${({ theme }) => theme.colors.mediumGrey};

    &.active {
      background: ${({ theme }) => theme.colors.veryDarkBlue};
      color: #fff;
    }

    &.inactive {
      &:hover {
        background: ${({ theme }) => theme.colors.veryLightGrey}
      }
    }
  }

  ${breakpointsMedia({
  lg: css`
    display: none;
    `,
})}
`;
