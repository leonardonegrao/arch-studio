import { useRouter } from 'next/router';
import { useState } from 'react';

import Logo from '../../../../theme/Logo';
import Burger from './components/Burger';
import MobileMenu from './components/MobileMenu';
import { Header, HeaderMenu, MenuOption } from './styles';

import Link from '@components/common/Link';

function MenuOptionUnderscore({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      style={{
        visibility: isVisible ? 'visible' : 'hidden',
        background: '#1B1D23',
        height: '1px',
        width: '24px',
        marginTop: '8px',
      }}
    />
  );
}

export default function Home() {
  const routerPathName = useRouter().pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Header>
      <Link href="/">
        <Logo />
      </Link>

      <HeaderMenu>
        <MenuOption>
          <Link href="/portfolio">
            Portfolio
          </Link>
          <MenuOptionUnderscore isVisible={routerPathName === '/portfolio'} />
        </MenuOption>

        <MenuOption>
          <Link href="/about-us">
            About Us
          </Link>
          <MenuOptionUnderscore isVisible={routerPathName === '/about-us'} />
        </MenuOption>

        <MenuOption>
          <Link href="/contact">
            Contact
          </Link>
          <MenuOptionUnderscore isVisible={routerPathName === '/contact'} />
        </MenuOption>
      </HeaderMenu>

      <Burger open={isMenuOpen} setOpen={setIsMenuOpen} />
      {isMenuOpen && <MobileMenu />}
    </Header>
  );
}
