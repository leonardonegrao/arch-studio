import styled from 'styled-components'

import { ButtonWrapper } from '../../common/Button'

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 573px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;

    position: relative;
    width: 1110px;
  }
`

export const CarouselImageWrapper = styled.div`
  width: 100%;
  height: 720px;
  filter: brightness(70%);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 573px;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 1110px;
  }
`

export const CarouselItemInfo = styled.div`
  position: absolute;
  z-index: 1;
  max-width: 311px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 457px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    top: 180px;
    left: 190px;

    max-width: 544px;
  }
`

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

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`