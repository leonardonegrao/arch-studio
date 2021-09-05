import { motion } from 'framer-motion';

import { MobileMenuWrapper } from './style';

import Link from '@components/common/Link';
import Typography from '@components/foundation/Typography';

export default function MobileMenu() {
  return (
    <motion.div
      initial={{
        x: '100%',
        opacity: 0,
        position: 'absolute',
        zIndex: 10,
        top: 108,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
    >
      <MobileMenuWrapper>
        <nav>
          <ul>
            <li>
              <Link href="/portfolio">
                <div>

                  <Typography variant="heading3" color="veryDarkBlue">Portfolio</Typography>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div>
                  <Typography variant="heading3" color="veryDarkBlue">About Us</Typography>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <div>
                  <Typography variant="heading3" color="veryDarkBlue">Contact</Typography>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </MobileMenuWrapper>
    </motion.div>
  );
}
