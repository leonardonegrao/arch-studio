import styled, { css } from 'styled-components';

import { breakpointsMedia } from '@theme/utils/breakpointsMedia';

export const FeaturedContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 72px;

  max-width: 311px;

  .featured-title {
    margin-bottom: 48px;
    order: 1;
  }

  .featured-button {
    order: 3;
    
    button {
      width: 100%;
    }
  }

  ${breakpointsMedia({
    md: css`
      max-width: 573px;

      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;

      .featured-button {
        order: 2;
        margin-left: 141px;
        margin-bottom: 85px;
      }
    `,
    lg: css`
      display: grid;
      grid-template-columns: repeat(12, 65px);
      grid-template-rows: repeat(10, 60px);
      grid-template-areas:
        "title title title . . . . . . button button button"
        ". . . . . . . . . . . ."
        "projects projects projects projects projects projects projects projects projects projects projects projects";
      gap: 12px 30px;

      max-width: 1110px;

      .featured-button {
        margin-left: 0px;
        
        grid-area: button;
        justify-self: end;
      }
    `,
  })}
`;

export const FeaturedProjectsWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;

  margin-bottom: 24px;

  order: 2;

  ${breakpointsMedia({
    md: css`
      order: 3;
      gap: 0px;
    `,
    lg: css`
      flex-direction: row;
      justify-content: space-between;

      grid-column: 1/13;
      grid-row-start: 3;
    `,
  })}
`;
