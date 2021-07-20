import styled from 'styled-components'

import { ButtonWrapper } from '../../common/Button'

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  @media (min-width: 660px) {
    max-width: 573px;
  }

  @media (min-width: 1200px) {
    display: block;

    position: relative;
    width: 1110px;
  }
`

export const CarouselItemInfo = styled.div`
  z-index: 1;
  max-width: 311px;

  @media (min-width: 660px) {
    max-width: 457px;
  }

  @media (min-width: 1200px) {
    position: absolute;
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

  @media (max-width: 1200px) {
    display: none;
  }
`

export const CarouselImageWrapper = styled.div`
  width: 100%;
  height: 720px;

  .carousel-background {
    filter: brightness(70%);
  }

  @media (min-width: 660px) {
    width: 573px;
  }
  
  @media (min-width: 1200px) {
    width: 1110px;
  }
`