import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: bottom;

  padding: 56px 0;
`

export const HeaderMenu = styled.nav`
  display: flex;

  margin-left: 94px;
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