import styled, { css } from 'styled-components';

import { breakpointsMedia } from '@theme/utils/breakpointsMedia';

export const StyledAboutUsScreen = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  p + p {
    margin-top: 24px;
  }

  .justified-content-wrapper {
    max-width: 311px;
    margin: auto;
  }

  .heritage-wrapper {
    margin-top: 72px;
    padding-top: 68px;

    position: relative;

    h1 {
      margin-bottom: 29px;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;

      width: 65px;
      height: 1px;

      background: ${({ theme }) => theme.colors.lightGrey};
    }

    & .heritage-image {
      display: none;
    }
  }

  ${breakpointsMedia({
    md: css`
      .justified-content-wrapper {
        max-width: 574px;
      }

      .heritage-wrapper {
        margin-top: 200px;

        & > h1 {
          max-width: 50%;
          margin-bottom: 35px;
        }
      }
    `,
    lg: css`
      .justified-content-wrapper {
        width: 100%;
        max-width: 1110px;
      }

      .heritage-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: end;
        width: 100%;
        padding-top: 0;

        & h1 {
          font-size: 56px;
          max-width: 256px;
          margin-bottom: 32px;
        }

        & p {
          max-width: 445px;
        }

        & .heritage-image {
          display: block;
        }
      }
    `,
  })}
`;
