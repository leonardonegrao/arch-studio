import styled, { css } from 'styled-components';

import { breakpointsMedia } from '@theme/utils/breakpointsMedia';

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  position: relative;

  padding: 32px;

  width: 100%;

  .page-marker-wrapper {
    position: absolute;
    display: none;
  }

  ${breakpointsMedia({
    md: css`
      max-width: 573px;
      margin-left: auto;
      margin-right: auto;
      justify-content: flex-start;

      padding: 56px 0;

      .page-marker-wrapper {
        display: block;

        top: 0;
        left: -58px;
      }
    `,
    lg: css`
      max-width: 1110px;
      .page-marker-wrapper {
        left: -100px;
      }
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

export const PageMarker = styled.div`
  ${breakpointsMedia({
    md: css`
      float: left;
      display: flex;
      margin-right: 33px;

      max-width: 25px;

      flex-direction: column;
      align-items: center;

      div {
        height: 104px;
        width: 1px;
        background: ${({ theme }) => theme.colors.lightGrey};
        margin-bottom: 48px;
      }

      p {
        text-transform: uppercase;
        writing-mode: vertical-rl;
        letter-spacing: 15px;
        color: ${({ theme }) => theme.colors.lightGrey};
      }
    `,
    lg: css`
      margin-right: 76px;
    `,
  })}
`;
