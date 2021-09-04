import { useRouter } from 'next/router';

import Logo from '../../../theme/Logo';
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
    </Header>
  );
}
