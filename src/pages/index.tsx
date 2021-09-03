import { GetStaticProps } from 'next';

import HomeScreen from '@components/screens/HomeScreen';

import Project from '@models/Project';

import { CMSClient } from '@infra/cms/CMSClient';
import { getProjects } from '@infra/cms/queries';

interface HomeProps {
  staticProjects: Project[];
}

export default function Home({ staticProjects }: HomeProps): JSX.Element {
  return <HomeScreen staticProjects={staticProjects} />;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const client = CMSClient();
  const { data } = await client.query({ query: getProjects, variables: {} });
  const staticProjects = await data.response.allProjects;

  return {
    props: {
      staticProjects,
    },
  };
};
