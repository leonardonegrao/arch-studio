import styled, { css } from 'styled-components';

import { breakpointsMedia } from '@theme/utils/breakpointsMedia';

export const PortfolioListWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 311px;

  margin: auto;
  margin-top: 88px;

  gap: 24px;

  ${breakpointsMedia({
    md: css`
      width: 573px;
    `,
    lg: css`
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
    `,
  })}
`;
