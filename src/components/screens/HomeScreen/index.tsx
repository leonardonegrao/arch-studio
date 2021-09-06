import { motion } from 'framer-motion';
import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import AboutUsSection from './components/AboutUsSection';
import Carousel from './components/Carousel';
import Featured from './components/Featured';
import WelcomeSection from './components/WelcomeSection';

import SEO from '@components/common/SEO';

import Project from '@models/Project';


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
          <AboutUsSection />

          <Featured featuredProjects={featuredProjects} />
        </motion.div>
      </HomeMain>
    </>
  );
}
