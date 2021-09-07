import Footer from './Footer';
import Header from './Header';
import {
  LayoutWrapper, PageContent, HeaderPageContentWrapper,
} from './styles';

export default function Layout({ children }) {

  return (
    <LayoutWrapper>
      <HeaderPageContentWrapper>
        <Header />
        <PageContent>
          {children}
        </PageContent>
      </HeaderPageContentWrapper>
      <Footer />
    </LayoutWrapper>
  );
}
