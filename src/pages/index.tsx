import { GetStaticProps } from 'next';

import HomeScreen from '@components/screens/HomeScreen';

import Project from '@models/Project';

import { CMSClient } from '@infra/cms/CMSClient';
import { getProjects } from '@infra/cms/queries';

interface HomeProps {
  projects: Project[];
}

export default function Home({ projects }: HomeProps): JSX.Element {
  return <HomeScreen projects={projects} />;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const client = CMSClient();
  const { data } = await client.query({ query: getProjects, variables: {} });
  const projects = await data.response.allProjects;

  return {
    props: {
      projects,
    },
  };
};
