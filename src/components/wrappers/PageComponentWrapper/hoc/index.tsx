import React from 'react';

import PageComponentWrapper from '..';

import GlobalProvider from '../GlobalProvider';

import SEOProps from '@models/SEOProps';

interface WrapperProps {
  seoProps: SEOProps;
}

export default function pageComponentHoc(
  WrappedComponent: React.ComponentType<any>,
  { seoProps }: WrapperProps,
) {
  const PageComponent = (props) => (
    <GlobalProvider>
      <PageComponentWrapper seoProps={seoProps} >
        <WrappedComponent {...props} />
      </PageComponentWrapper>
    </GlobalProvider>
  );

  const displayName = 'PageComponent'; 
  PageComponent.displayName = displayName;

  return PageComponent;
}
