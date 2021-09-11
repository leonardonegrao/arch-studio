import styled, { css } from 'styled-components';

import { breakpointsMedia } from '@theme/utils/breakpointsMedia';

interface ImageWrapperProps {
  height: {
    sm: string;
    md: string;
    lg: string;
  };
  width: {
    sm: string;
    md: string;
    lg: string;
  };
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
  position: relative;

  width: ${({ width }) => width.sm};
  height: ${({ height }) => height.sm};

  ${({ width, height }) => breakpointsMedia({
    md: css`
        width: ${width.md};
        height: ${height.md};
      `,
    lg: css`
        width: ${width.lg};
        height: ${height.lg};
      `,
  })};

  .darken-filter {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    z-index: 1;

    background: rgba(0, 0, 0, 0.30);
  }
`;
