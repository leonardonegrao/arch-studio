import React from 'react';

import {
  StyledPageComponentWrapper,
  HeaderPageWrapper,
  StyledPageComponentWrapperContent
} from './style';

import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import SEO from '@components/common/SEO';

import SEOProps from '@models/SEOProps';

interface PageComponentWrapperProps {
  seoProps: SEOProps;
  displayProps: {
    showHeader: boolean;
    showFooter: boolean;
  };
  children: React.ReactNode;
}

export default function PageComponentWrapper({
  seoProps,
  children,
  displayProps = {
    showHeader: true,
    showFooter: true,
  }
}: PageComponentWrapperProps) {
  return (
    <StyledPageComponentWrapper>
      <SEO {...seoProps} />
      <HeaderPageWrapper>
        {displayProps.showHeader && <Header />}
        <StyledPageComponentWrapperContent>
          {children}
        </StyledPageComponentWrapperContent>
      </HeaderPageWrapper>
      {displayProps.showFooter && <Footer />}
    </StyledPageComponentWrapper>
  );
}
