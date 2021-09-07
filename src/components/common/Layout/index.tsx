import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { getPageName } from '../../../lib/paths';
import Footer from './Footer';
import Header from './Header';
import {
  LayoutWrapper, PageMarker, PageContent, HeaderMarkerWrapper,
} from './styles';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <LayoutWrapper>
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ ease: 'easeInOut', duration: 1.5 }}
      >
        <PageMarker>
          <div />
          <p>{getPageName(router.pathname)}</p>
        </PageMarker>
      </motion.div>
      <PageContent>
        <HeaderMarkerWrapper>
          <Header />
          {children}
        </HeaderMarkerWrapper>
      </PageContent>
      <Footer />
    </LayoutWrapper>
  );
}
