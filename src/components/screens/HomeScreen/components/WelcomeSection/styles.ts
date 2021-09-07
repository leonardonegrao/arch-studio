/* eslint-disable indent */
import styled, { css } from 'styled-components';

import { breakpointsMedia } from '@theme/utils/breakpointsMedia';

export const WelcomeSectionWrapper = styled.section`
  height: 668px;
  margin-top: 140px;
  margin-bottom: 97px;

  max-width: 311px;
  margin-left: auto;
  margin-right: auto;

  ${breakpointsMedia({
    md: css`
      max-width: 573px;
    `,
    lg: css`
      display: grid;

      grid-template-columns: repeat(12, 65px);
      grid-template-rows: repeat(10, 60px);
      gap: 12px 30px;

      max-width: 1110px;
      margin-top: 95px;
      margin-bottom: 200px;
    `,
  })}
`;

export const WelcomeFloatingMessageWrapper = styled.div`
  display: none;

  ${breakpointsMedia({
    md: css`
      display: block;

      h2 {
        font-size: 120px;
      }
    `,
    lg: css`
      grid-column: 1;
      grid-row: 2;
      align-self: center;
      z-index: 1;

      padding-top: 40px;

      h2 {
        font-size: ${({ theme }) => theme.typographyVariants.heading1Large.fontSize};
      }
    `,
  })}
`;

export const WelcomeContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;

  h2 {
    margin-bottom: 56px;
  }

  p + p {
    margin-top: 15px;
  }

  ${breakpointsMedia({
    lg: css`
      grid-column: 3/8;
      grid-row-start: 4;
    `,
  })}
`;

export const WelcomeImageWrapper = styled.div`
  display: none;

  ${breakpointsMedia({
    lg: css`
      display: block;

      grid-column: 9/13;
      grid-row: 3;
    `,
  })}
`;
