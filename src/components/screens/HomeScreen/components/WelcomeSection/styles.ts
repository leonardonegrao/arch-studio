/* eslint-disable indent */
import styled, { css } from 'styled-components';

import { breakpointsMedia } from '@theme/utils/breakpointsMedia';

export const WelcomeSectionWrapper = styled.section`
  position: relative;

  height: 668px;
  margin-top: 140px;
  margin-bottom: 97px;

  max-width: 311px;
  margin-left: auto;
  margin-right: auto;

  .welcome-floating-message-wrapper {
    position: absolute;
    display: none;

    top: 0;
    left: 0;
    z-index: 1;

    ${breakpointsMedia({
  md: css`
        display: block;

        h2 {
          font-size: 120px;
        }
      `,
  lg: css`
        h2 {
          font-size: ${({ theme }) => theme.typographyVariants.heading1Large};
        }
      `,
})}

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      h2 {
        font-size: ${({ theme }) =>
    theme.typographyVariants.heading1Large.fontSize};
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
`;
