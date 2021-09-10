import React from 'react';

import PageComponentWrapper from '..';

import GlobalProvider from '../GlobalProvider';

import SEOProps from '@models/SEOProps';

interface WrapperProps {
  seoProps: SEOProps;
  displayProps?: {
    showHeader: boolean;
    showFooter: boolean;
  };
}

export default function pageComponentHoc(
  WrappedComponent: React.ComponentType<any>,
  { seoProps, displayProps = { showHeader: true, showFooter: true } }: WrapperProps,
) {
  const PageComponent = (props) => (
    <GlobalProvider>
      <PageComponentWrapper seoProps={seoProps} displayProps={displayProps} >
        <WrappedComponent {...props} />
      </PageComponentWrapper>
    </GlobalProvider>
  );

  const displayName = 'PageComponent'; 
  PageComponent.displayName = displayName;

  return PageComponent;
}
