import styled, { css } from 'styled-components';

import { breakpointsMedia } from '@theme/utils/breakpointsMedia';

export const StyledPageComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  
  align-items: center;

  min-height: 100vh;

  width: 100%;
`;

export const MarkerPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: start;

  height: 100%;
  width: 100%;
`;

export const StyledPageComponentWrapperContent = styled.div`
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
