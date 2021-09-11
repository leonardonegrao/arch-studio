import { GetStaticProps } from 'next';

import AboutUsScreen from '@components/screens/AboutUsScreen';
import pageComponentHoc from '@components/wrappers/PageComponentWrapper/hoc';

import Leader from '@models/Leader';

import { CMSClient } from '@infra/cms/CMSClient';
import { getLeaders } from '@infra/cms/queries';

interface AboutUsProps {
  leaders: Leader[];
}

function AboutUsPage({ leaders }: AboutUsProps) {
  return <AboutUsScreen leaders={leaders} />;
}


export default pageComponentHoc(AboutUsPage, {
  seoProps: {
    title: 'About Us',
    description: `
    Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.
    Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs.
    Our small team of world-class professionals provides input on every project.
    `,
  },
});

export const getStaticProps: GetStaticProps<AboutUsProps> = async () => {
  const client = CMSClient();
  const { data } = await client.query({ query: getLeaders, variables: {} });
  const leaders = await data.response.allLeaders;

  return {
    props: {
      leaders,
    },
  };
};
