import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CMSClient } from 'src/infra/cms/CMSClient';
import styled from 'styled-components';

import Button from '@components/common/Button';
import SEO from '@components/common/SEO';
import Typography from '@components/foundation/Typography';
import { AboutUsContainer } from '@components/Home/AboutUsSection';
import Carousel from '@components/Home/Carousel';
import { QUERY } from '@components/Home/Carousel/carouselQuery';
import Featured from '@components/Home/Featured';
import WelcomeSection from '@components/Home/WelcomeSection';

import Project from '@models/Project';

import imageSmallTeam from '@public/assets/home/desktop/image-small-team.jpg';

const HomeMain = styled.main`
  width: 100%;
`;

interface HomeProps {
  staticProjects: Project[];
}

export default function Home({ staticProjects }: HomeProps): JSX.Element {
  const [carouselProjects, setCarouselProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (staticProjects) {
      setCarouselProjects(staticProjects);
    }
  }, [staticProjects]);

  return (
    <>
      <SEO title="Arch Studio" description="Small teams, big ideas" />

      <HomeMain>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 1.2 }}
        >
          <Carousel items={carouselProjects} />
          <WelcomeSection />

          <AboutUsContainer>
            <div className="content">
              <Typography variant="heading1Small" color="white" tag="h1">
                Small team, big ideas
              </Typography>

              <Button variant="default">About Us</Button>
            </div>

            <Image
              src={imageSmallTeam}
              layout="fill"
              alt="Image of a construction complex surrounded by water"
              className="about-us-background"
            />
          </AboutUsContainer>
          <Featured />
        </motion.div>
      </HomeMain>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const client = CMSClient();
  const { data } = await client.query({ query: QUERY, variables: {} });
  const staticProjects = await data.response.allProjects;

  return {
    props: {
      staticProjects,
    },
  };
};
