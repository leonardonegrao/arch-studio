import { GetStaticProps } from 'next';

import PortfolioScreen from '@components/screens/PortfolioScreen';
import pageComponentHoc from '@components/wrappers/PageComponentWrapper/hoc';

import Project from '@models/Project';

import { CMSClient } from '@infra/cms/CMSClient';
import { getProjects } from '@infra/cms/queries';

interface PortfolioProps {
  staticProjects: Project[];
}

function PortfolioPage({ staticProjects }: PortfolioProps) {
  return <PortfolioScreen projects={staticProjects} />;
}

export default pageComponentHoc(PortfolioPage, {
  seoProps: {
    title: 'Portfolio',
    description: 'Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.',
  }
});

export const getStaticProps: GetStaticProps<PortfolioProps> = async () => {
  const client = CMSClient();
  const { data } = await client.query({ query: getProjects, variables: {} });
  const staticProjects = await data.response.allProjects;

  return {
    props: {
      staticProjects,
    },
  };
};
