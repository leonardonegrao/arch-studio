import Link from 'next/link';

import Logo from '../../../theme/Logo';
import Button from '../../common/Button';

import { FooterContainer, MenuOption } from './styles';

export default function Footer() {
  return (
    <FooterContainer>
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
        </MenuOption>

        <MenuOption>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </MenuOption>
      </div>

      <div className="button-wrapper">
        <Button variant="default">See our portfolio</Button>
      </div>
    </FooterContainer>
  );
}
