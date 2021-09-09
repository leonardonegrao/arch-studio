import { motion } from 'framer-motion';
import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import AboutUsSection from './components/AboutUsSection';
import Carousel from './components/Carousel';
import Featured from './components/Featured';
import WelcomeSection from './components/WelcomeSection';

import Project from '@models/Project';


const HomeMain = styled.main`
  width: 100%;
`;

interface HomeProps {
  projects: Project[];
}

export default function HomeScreen({ projects }: HomeProps): JSX.Element {
  const [carouselProjects, setCarouselProjects] = useState<Project[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);

  function mapProjects(unfilteredProjects: Project[]) {
    const carouselProjects = unfilteredProjects.filter(project => project.carousel);
    const featuredProjects = unfilteredProjects.slice(0, 3);

    setCarouselProjects(carouselProjects);
    setFeaturedProjects(featuredProjects);
  }

  useEffect(() => {
    if (projects) {
      mapProjects(projects);
    }
  }, [projects]);

  return (
    <>
      <HomeMain>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 1.2 }}
        >
          <Carousel carouselProjects={carouselProjects} />
          <WelcomeSection />
          <AboutUsSection />
          <Featured featuredProjects={featuredProjects} />
        </motion.div>
      </HomeMain>
    </>
  );
}
