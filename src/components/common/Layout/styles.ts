import styled, { css } from 'styled-components';

import { breakpointsMedia } from '@theme/utils/breakpointsMedia';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;

  width: 100%;
`;

export const MarkerPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderPageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const PageContent = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  ${breakpointsMedia({
    md: css`
      max-width: 573px;
    `,
    lg: css`
      max-width: 1110px;
    `,
  })}
`;
