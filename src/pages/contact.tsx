import ContactScreen from '@components/screens/ContactScreen';
import pageComponentHoc from '@components/wrappers/PageComponentWrapper/hoc';

export default pageComponentHoc(ContactScreen, {
  seoProps: {
    title: 'Contact',
    description: 'We’d love to hear more about your project. We have two offices, one in Texas and one in Tennessee. Mail: archone@mail.com. Phone: 123-456-3451',
  },
});
