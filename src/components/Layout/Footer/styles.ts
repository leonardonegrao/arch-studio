import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  position: relative;

  max-width: 1110px;

  margin-top: 200px;

  .logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 200px;
    width: 200px;

    background: ${({ theme }) => theme.colors.veryDarkBlue};
  }

  .menu-wrapper {
    display: flex;
    align-items: center;

    padding-left: 56px;

    background: ${({ theme }) => theme.colors.veryLightGrey};
    min-width: 784px;
  }

  .button-wrapper {
    position: absolute;
    top: 64px;
    right: 0;
  }
`

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
      color: ${({ theme }) => theme.colors.veryDarkBlue };
    }
  }
`