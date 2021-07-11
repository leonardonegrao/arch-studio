import Link from 'next/link'
import styled from 'styled-components'
import Logo from '../../theme/Logo'

const LayoutWrapper = styled.div`
  display: flex;

  margin-left: auto;
  margin-right: auto;
`

const PageContent = styled.div`

`

const Header = styled.header`
  display: flex;
  align-items: bottom;

  padding: 56px 0;
`

const PageMarker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: 76px;

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
`

const HeaderMenu = styled.nav`
  display: flex;

  margin-left: 94px;
`

const HeaderMenuOption = styled.div`
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
    font-weight: ${({ theme }) => theme.typographyVariants.body.fontWeight};

    text-decoration: none;
    color: ${({ theme }) => theme.colors.mediumGrey};

    transition: color .3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.veryDarkBlue };
    }
  }
`

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <PageMarker>
        <div />
        <p>Home</p>
      </PageMarker>
      <PageContent>
        <Header>
          <Logo />

          <HeaderMenu>
            <HeaderMenuOption>
              <Link href="/portfolio">
                <a>Portfolio</a>
              </Link>
              <div
                style={{
                  background: '#1B1D23',
                  height: '1px',
                  width: '24px',
                  marginTop: '8px'
                }}
              />
            </HeaderMenuOption>
            
            <HeaderMenuOption>
              <Link href="/about-us">
                <a>About Us</a>
              </Link>
              <div
                style={{
                  background: '#1B1D23',
                  height: '1px',
                  width: '24px',
                  marginTop: '8px',
                  visibility: 'hidden',
                }}
              />
            </HeaderMenuOption>

            <HeaderMenuOption>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
              <div
                style={{
                  background: '#1B1D23',
                  height: '1px',
                  width: '24px',
                  marginTop: '8px',
                  visibility: 'hidden',
                }}
              />
            </HeaderMenuOption>
          </HeaderMenu>
        </Header>
        {children}
      </PageContent>
    </LayoutWrapper>
  )
}