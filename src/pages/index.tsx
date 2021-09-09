import { GetStaticProps } from 'next';

import HomeScreen from '@components/screens/HomeScreen';
import pageComponentHoc from '@components/wrappers/PageComponentWrapper/hoc';

import Project from '@models/Project';

import { CMSClient } from '@infra/cms/CMSClient';
import { getProjects } from '@infra/cms/queries';

interface HomeProps {
  projects: Project[];
}

function HomePage({ projects }: HomeProps) {
  return (
    <HomeScreen projects={projects} />
  );
}

export default pageComponentHoc(HomePage, {
  seoProps: {
    title: 'Home',
    description: 'Welcome to Arch Studio, we have a unique network and skillset to help bring your projects to life.',
  },
});

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
