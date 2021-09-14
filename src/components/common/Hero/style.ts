import styled, { css } from 'styled-components';

import { breakpointsMedia } from '@theme/utils/breakpointsMedia';

export const HeroWrapper = styled.section`
  position: relative;

  .page-title {
    display: none;
  }

  .decorative-white-block {
    position: absolute;
    top: 195px;
    left: 0;
    z-index: 1;

    background-color: #fff;
    width: 90%;
    height: 45px;
  }

  ${breakpointsMedia({
    md: css`
      display: grid;
      grid-template-columns: repeat(10, 48px);
      grid-template-rows: repeat(11, 60px);
      grid-gap: 12px 10px;

      .page-title {
        display: block;
        z-index: 2;

        grid-column: 5 / 10;
        justify-self: center;

        grid-row: 4 / 6;
        align-self: center;
      }

      .decorative-white-block {
        position: unset;

        width: 515px;
        height: 431px;

        grid-column: 2 / 10;
        grid-row: 8 / 11;
        align-self: end;
      }
    `,
    lg: css`
      grid-template-columns: repeat(12, 65px);
      grid-template-rows: repeat(10, 60px);
      grid-gap: 12px 30px;

      .page-title {
        grid-column: span / 12;
        justify-self: start;
        margin-left: -16px;
        grid-row: 3 / 5;
        align-self: center;
      }

      .decorative-white-block {
        width: 628px;
        height: 503px;

        grid-column: 6 / 12;
        grid-row: 4 / 10;
        align-self: start;
      }
    `,
  })}
`;

export const HeroImageWrapper = styled.div`
`;

export const HeroContentWrapper = styled.div`
  max-width: 311px;
  margin-left: auto;
  margin-right: auto;

  & > h1 {
    position: relative;

    width: 100%;
    margin-bottom: 12px;
  }

  ${breakpointsMedia({
    md: css`
      max-width: 456px;

      grid-column: 3 / 11;
      grid-row: 7 / 11;
      align-self: end;

      & > h1 {
        margin-bottom: 35px;
      }

      z-index: 2;
    `,
    lg: css`
      grid-column: 8 / -1;
      
      & > h1 {
        font-size: 56px;
        line-height: 56px;
      }
    `,
  })}
`;
