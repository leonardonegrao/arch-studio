import Link from 'next/link'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Logo from '../../theme/Logo'

import Button from '../common/Button'

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

const Footer = styled.footer`
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

const MenuOption = styled.div`
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

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ ease: 'easeInOut', duration: 1.5 }}
      >
        <PageMarker>
          <div />
          <p>Home</p>
        </PageMarker>
      </motion.div>
      <PageContent>
        <Header>
          <Logo />

          <HeaderMenu>
            <MenuOption>
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
            </MenuOption>
            
            <MenuOption>
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
            </MenuOption>

            <MenuOption>
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
            </MenuOption>
          </HeaderMenu>
        </Header>
        {children}
        <Footer>
          <div className="logo-wrapper">
            <Logo color="white" />
          </div>

          <div className="menu-wrapper">
            <MenuOption>
              <Link href="/portfolio">
                <a>Portfolio</a>
              </Link>
            </MenuOption>
            
            <MenuOption>
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
            </MenuOption>

            <MenuOption>
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
            </MenuOption>
          </div>
        
          <div className="button-wrapper">
            <Button variant="default">See our portfolio</Button>
          </div>
        </Footer>
      </PageContent>
    </LayoutWrapper>
  )
}