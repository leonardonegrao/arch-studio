import styled from 'styled-components';

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
`;

export const MenuOption = styled.div`
  display: flex;
  flex-direction: column;

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
`;
