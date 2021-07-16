import Link from 'next/link'
import { useRouter } from 'next/router'

import Logo from '../../../theme/Logo'

import { Header, HeaderMenu, MenuOption } from './styles'

function MenuOptionUnderscore({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      style={{
        visibility: isVisible ? 'visible' : 'hidden',
        background: '#1B1D23',
        height: '1px',
        width: '24px',
        marginTop: '8px'
      }}
    />
  )
}

export default function Home() {
  const routerPathName = useRouter().pathname

  return (
    <Header>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <HeaderMenu>
        <MenuOption>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
          <MenuOptionUnderscore isVisible={routerPathName === '/portfolio'} />
        </MenuOption>
        
        <MenuOption>
          <Link href="/about-us">
            <a>About Us</a>
          </Link>
          <MenuOptionUnderscore isVisible={routerPathName === '/about-us'} />
        </MenuOption>

        <MenuOption>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          <MenuOptionUnderscore isVisible={routerPathName === '/contact'} />
        </MenuOption>
      </HeaderMenu>
    </Header>
  )
}