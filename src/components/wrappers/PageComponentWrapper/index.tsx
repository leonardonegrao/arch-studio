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
  children: React.ReactNode;
}

export default function PageComponentWrapper({ seoProps, children }: PageComponentWrapperProps) {
  return (
    <StyledPageComponentWrapper>
      <SEO {...seoProps} />
      <HeaderPageWrapper>
        <Header />
        <StyledPageComponentWrapperContent>
          {children}
        </StyledPageComponentWrapperContent>
      </HeaderPageWrapper>
      <Footer />
    </StyledPageComponentWrapper>
  );
}
