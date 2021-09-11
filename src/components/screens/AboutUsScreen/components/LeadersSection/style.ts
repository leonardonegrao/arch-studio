import styled, { css } from 'styled-components';

import { breakpointsMedia } from '@theme/utils/breakpointsMedia';

export const StyledLeadersSection = styled.section`
  margin-top: 72px;

  h1 {
    margin-bottom: 64px;
    max-width: 50%;
  }

  ${breakpointsMedia({
    md: css`
      margin-top: 175px;

      .leaders-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        row-gap: 64px;
      }
    `,
    lg: css`
      display: flex;
      justify-content: space-between;
      max-width: 1110px;

      h1 {
        font-size: 56px;
        max-width: 254px;
      }

      .leaders-wrapper {
        max-width: 730px;
      }
    `,
  })}
`;

export const StyledLeader = styled.article`
  h2 {
    margin-top: 24px;
  }

  h3 {
    margin-top: 4px;
    margin-bottom: 8px;

    opacity: .75;
  }

  .icons-wrapper {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  .icons-wrapper-overlay {
    display: none;
  }

  & + & {
    margin-top: 40px;
  }

  ${breakpointsMedia({
    md: css`
      & + & {
        margin-top: 0;
      }
    `,
    lg: css`
      position: relative;

      .avatar-wrapper {
        position: relative;
        overflow: hidden;
      
        .icons-wrapper-overlay {
          position: absolute;
          bottom: 0;
          z-index: 1;

          display: flex;
          justify-content: center;
          align-items: flex-end;

          width: 350px;
          height: 640px;

          background-color: rgba(0, 0, 0, 0.60);

          & > div {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 25px;

            width: 350px;
            height: 320px;
          }
        }
      }

      .icons-wrapper {
        display: none;
      }
    `,
  })}
`;
