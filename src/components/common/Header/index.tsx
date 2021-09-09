import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Burger from './components/Burger';
import MobileMenu from './components/MobileMenu';
import { Header, HeaderMenu, MenuOption, PageMarker } from './styles';

import Link from '@components/common/Link';

import Logo from '@theme/Logo';

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

  const routes = [
    {
      title: 'Portfolio',
      path: '/portfolio',
    },
    {
      title: 'About Us',
      path: '/about-us',
    },
    {
      title: 'Contact',
      path: '/contact',
    }
  ];

  function getRouteTitle(pathname: string) {
    if (pathname === '/') {
      return 'Home';
    } else if (pathname === '/404' || pathname === '/500') {
      return '';
    }

    const route = routes.find((route) => route.path === pathname);

    return route.title;
  }

  return (
    <Header>
      <motion.div
        className="page-marker-wrapper"
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ ease: 'easeInOut', duration: 1.5 }}
      >
        <PageMarker>
          <div />
          <p>{getRouteTitle(routerPathName)}</p>
        </PageMarker>
      </motion.div>
      <Link href="/">
        <Logo />
      </Link>

      <HeaderMenu>
        {routes.map((route) => (
          <MenuOption key={route.path}>
            <Link href={route.path}>
              {route.title}
            </Link>
            <MenuOptionUnderscore isVisible={routerPathName === route.path} />
          </MenuOption>
        ))}
      </HeaderMenu>

      <Burger open={isMenuOpen} setOpen={setIsMenuOpen} />
      {isMenuOpen && <MobileMenu />}
    </Header>
  );
}
