import { GetStaticProps } from 'next';

import PortfolioScreen from '@components/screens/PortfolioScreen';

import Project from '@models/Project';

import { CMSClient } from '@infra/cms/CMSClient';
import { getProjects } from '@infra/cms/queries';

interface PortfolioProps {
  staticProjects: Project[];
}

export default function Portfolio({ staticProjects }: PortfolioProps) {
  return <PortfolioScreen projects={staticProjects} />;
}

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
