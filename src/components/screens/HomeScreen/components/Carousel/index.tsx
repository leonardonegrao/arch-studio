
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import {
  CarouselWrapper,
  CarouselImageWrapper,
  CarouselOptionsSelector,
  CarouselItemInfo,
} from './styles';

import Button from '@components/common/Button';
import Link from '@components/common/Link';
import Typography from '@components/foundation/Typography';

import Project, { ProjectImage } from '@models/Project';

interface CarouselProps {
  carouselProjects: Project[];
}

export default function Carousel({ carouselProjects }: CarouselProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [heroImage, setHeroImage] = useState<ProjectImage | null>(null);

  function handleActiveItemChange(index: number) {
    setActiveProject(projects[index]);
  }

  function checkIfValid(arrayOfProjects: Project[]) {
    return arrayOfProjects.length > 0;
  }

  function getHeroImage(project: Project) {
    const { images } = project;

    return images.find((image) => image.customData.type === 'hero-desktop');
  }

  useEffect(() => {
    if (carouselProjects) {
      setProjects(carouselProjects);

      setActiveProject(projects[0]); // first item is active by default
    }
  }, [carouselProjects, projects]);

  useEffect(() => {
    if (activeProject) {
      const image = getHeroImage(activeProject);

      setHeroImage(image);
    }
  }, [activeProject]);

  if (!checkIfValid(projects)) {
    return (
      <CarouselWrapper>
      </CarouselWrapper>
    );
  }

  return (
    <CarouselWrapper>
      <CarouselItemInfo>
        <div style={{ marginBottom: '14px' }}>
          <Typography
            variant="heading1Small"
            color="white"
            tag="h1"
          >
            {activeProject?.title}
          </Typography>
        </div>
        <Typography variant="body" color="white" tag="p">
          {activeProject?.description}
        </Typography>

        <div style={{ marginTop: '40px' }}>
          <Link href="/portfolio">
            <Button variant="default">See our portfolio</Button>
          </Link>
        </div>
      </CarouselItemInfo>
      <CarouselImageWrapper>
        {heroImage && (
          <Image
            src={heroImage.url}
            alt={heroImage.alt}
            layout="fill"
            objectFit="cover"
          />
        )}
      </CarouselImageWrapper>
      <motion.div
        initial={{ x: -1110 }}
        animate={{ x: 0 }}
        transition={{ ease: 'easeOut', duration: 1.2 }}
      >
        <CarouselOptionsSelector>
          {projects.map((item, index) => (
            <Button
              variant="square"
              showArrow={false}
              className={activeProject?.slug === projects[index]?.slug ? 'active' : 'inactive'}
              key={item?.slug}
              onClick={() => handleActiveItemChange(index)}
            >
              0
              {index + 1}
            </Button>
          ))}
        </CarouselOptionsSelector>
      </motion.div>
    </CarouselWrapper>
  );
}
