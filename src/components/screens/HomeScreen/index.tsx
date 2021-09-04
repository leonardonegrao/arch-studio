import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { AboutUsContainer } from './components/AboutUsSection';
import Carousel from './components/Carousel';
import Featured from './components/Featured';
import WelcomeSection from './components/WelcomeSection';

import Button from '@components/common/Button';
import SEO from '@components/common/SEO';
import Typography from '@components/foundation/Typography';

import Project from '@models/Project';

import imageSmallTeam from '@public/assets/home/desktop/image-small-team.jpg';


const HomeMain = styled.main`
  width: 100%;
`;

interface HomeProps {
  staticProjects: Project[];
}

export default function HomeScreen({ staticProjects }: HomeProps): JSX.Element {
  const [carouselProjects, setCarouselProjects] = useState<Project[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);

  function mapProjects(projects: Project[]) {
    const carouselProjects = projects.filter(project => project.carousel);
    const featuredProjects = projects.slice(0, 3);

    setCarouselProjects(carouselProjects);
    setFeaturedProjects(featuredProjects);
  }

  useEffect(() => {
    if (staticProjects) {
      mapProjects(staticProjects);
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
          <Featured featuredProjects={featuredProjects} />
        </motion.div>
      </HomeMain>
    </>
  );
}
