/* eslint-disable indent */
import styled, { css } from 'styled-components';

import { breakpointsMedia } from '@theme/utils/breakpointsMedia';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-top: 132px;
  padding-bottom: 48px;
  
  background-color: ${({ theme }) => theme.colors.veryLightGrey};

  .logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 120px;
    width: 120px;
    margin-bottom: -28px;

    transform: translateY(-50%);

    background: ${({ theme }) => theme.colors.veryDarkBlue};
  }

  .menu-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    background: ${({ theme }) => theme.colors.veryLightGrey};
  }

  .button-wrapper {
    margin-top: 32px;
  }

  ${breakpointsMedia({
  md: css`
      flex-direction: row;
      padding: 0;

      position: relative;

      max-width: calc(100vw - 156px);

      .logo-wrapper {
        transform: translateY(0);
        margin: 0;
      }

      .menu-wrapper {
        flex-direction: row;
      }

      .button-wrapper {
        margin-left: 257px;
        position: absolute;
        top: 50%;
        right: -156px;
        z-index: 1;

        transform: translate(0, -50%);
        
        margin-top: 0;
      }
    `,
  lg: css`
      max-width: 984px;
      margin-left: auto;
      margin-right: auto;

      .logo-wrapper {
        height: 200px;
        width: 200px;
      }
  `,
})}
`;

export const MenuOption = styled.div`
  & + & {
    margin-top: 32px;
  }

  a {
    font-size: ${({ theme }) => theme.typographyVariants.body.fontSize};
    line-height: ${({ theme }) => theme.typographyVariants.body.lineHeight};
    font-weight: bold;

    text-decoration: none;
    color: ${({ theme }) => theme.colors.mediumGrey};

    transition: color .3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.veryDarkBlue};
    }
  }

  ${breakpointsMedia({
  md: css`
      & + & {
        margin-top: 0px;
        margin-left: 56px;
      }

      &:first-of-type {
        margin-left: 40px;
      }
    `,
})}
`;
