/* eslint-disable indent */
import styled, { css } from 'styled-components';

import { breakpointsMedia } from '@theme/utils/breakpointsMedia';

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  position: relative;

  padding: 32px;

  max-width: 100vw;

  ${breakpointsMedia({
  md: css`
    justify-content: flex-start;

    padding: 56px 0;
    `,
})}
`;

export const HeaderMenu = styled.nav`
  display: none;

  ${breakpointsMedia({
  md: css`
      display: flex;

      margin-left: 78px;
    `,
  lg: css`
      margin-left: 94px;
    `,
})}
`;

export const MenuOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  & + & {
    margin-left: 56px;
  }

  a {
    font-size: ${({ theme }) => theme.typographyVariants.body.fontSize};
    line-height: ${({ theme }) => theme.typographyVariants.body.lineHeight};
    font-weight: '600';

    text-decoration: none;
    color: ${({ theme }) => theme.colors.mediumGrey};

    transition: color .3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.veryDarkBlue};
    }
  }
`;
