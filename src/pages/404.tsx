import NotFoundScreen from '@components/screens/NotFoundScreen';
import pageComponentHoc from '@components/wrappers/PageComponentWrapper/hoc';

export default pageComponentHoc(NotFoundScreen, {
  seoProps: {
    title: 'Not found',
    description: 'Page not found',
  },
  displayProps: {
    showHeader: true,
    showFooter: false,
  },
});
