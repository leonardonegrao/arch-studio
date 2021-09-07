import Logo from '../../../../theme/Logo';
import Button from '../../Button';
import { FooterContainer, MenuOption } from './styles';

import Link from '@components/common/Link';

export default function Footer() {
  return (
    <FooterContainer>
      <div className="logo-wrapper">
        <Logo color="white" />
      </div>

      <div className="menu-wrapper">
        <MenuOption>
          <Link href="/portfolio">
            Portfolio
          </Link>
        </MenuOption>

        <MenuOption>
          <Link href="/about-us">
            About Us
          </Link>
        </MenuOption>

        <MenuOption>
          <Link href="/contact">
            Contact
          </Link>
        </MenuOption>
      </div>

      <div className="button-wrapper">
        <Button variant="default">See our portfolio</Button>
      </div>
    </FooterContainer>
  );
}