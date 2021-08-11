import styled from 'styled-components'

export const WelcomeSection = styled.section`
  position: relative;

  height: 668px;
  margin-top: 95px;
  margin-bottom: 200px;

  .welcome-floating-message-wrapper {
    position: absolute;
    display: none;

    top: 0;
    left: 0;
    z-index: 1;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      display: block;

      h2 {
        font-size: 120px;
      }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      h2 {
        font-size: ${({ theme }) => theme.typographyVariants.heading1Large.fontSize};
      }
    }
  }

  .about-arch-studio {
    display: flex;
    align-items: flex-end;
    height: 100%;

    h2 {
      margin-bottom: 56px;
    }

    p + p {
      margin-top: 15px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      justify-content: flex-end;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      .image-welcome {
        display: none;
      }
    }
  }
`