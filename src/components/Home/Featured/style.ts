import styled from 'styled-components'

export const FeaturedProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
  }
`

export const FeaturedProject = styled.article`
  position: relative;

  width: 311px;
  height: 240px;

  img {
    filter: brightness(65%);
  }

  a {
    text-decoration: none;
    margin-top: 4px;
    opacity: .75;
  }

  .number-wrapper {
    position: absolute;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none;
    }

    z-index: 1;
  }

  .text-content-wrapper {
    position: absolute;

    bottom: 24px;
    left: 24px;

    z-index: 1;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 573px;
    height: 240px;

    .number-wrapper {
      top: 16px;
      right: 16px;
    }

    .text-content-wrapper {
      bottom: 40px;
      left: 40px;
    }

    & + & {
      margin-top: 24px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 560px;
    max-width: 350px;

    .number-wrapper {
      top: 32px;
      right: -5px;
    }

    .text-content-wrapper {
      bottom: 40px;
      left: 40px;
    }

    & + & {
      margin-top: 0;
    }
  }
`