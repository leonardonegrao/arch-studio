
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import Button from '../../common/Button';
import Typography from '../../foundation/Typography';
import {
  CarouselWrapper,
  CarouselImageWrapper,
  CarouselOptionsSelector,
  CarouselItemInfo,
} from './styles';

import Project, { ProjectImage } from '@models/Project';

interface CarouselProps {
  items: Project[];
}

export default function Carousel({ items }: CarouselProps) {
  const [carouselItems, setCarouselItems] = useState<Project[]>([]);
  const [activeItem, setActiveItem] = useState<Project>(null);
  const [heroImage, setHeroImage] = useState<ProjectImage>(null);

  function handleActiveItemChange(index: number) {
    setActiveItem(carouselItems[index]);
  }

  function checkIfValid(arrayOfProjects: Project[]) {
    return arrayOfProjects.length > 0;
  }

  function getHeroImage(project: Project) {
    const { images } = project;

    return images.find((image) => image.customData.type === 'hero-desktop');
  }

  useEffect(() => {
    if (items.length > 0) {
      setCarouselItems(items);

      setActiveItem(carouselItems[0]); // first item is active by default
    }
  }, [items, carouselItems]);

  useEffect(() => {
    if (activeItem) {
      const image = getHeroImage(activeItem);

      setHeroImage(image);
    }
  }, [activeItem]);

  if (!checkIfValid(carouselItems)) {
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
            {activeItem?.title}
          </Typography>
        </div>
        <Typography variant="body" color="white" tag="p">
          {activeItem?.description}
        </Typography>

        <div style={{ marginTop: '40px' }}>
          <Button variant="default">See our portfolio</Button>
        </div>
      </CarouselItemInfo>
      <CarouselImageWrapper>
        {heroImage && (
          <Image
            src={heroImage.url}
            alt={heroImage.alt}
            layout="fill"
          />
        )}
      </CarouselImageWrapper>
      <motion.div
        initial={{ x: -1110 }}
        animate={{ x: 0 }}
        transition={{ ease: 'easeOut', duration: 1.2 }}
      >
        <CarouselOptionsSelector>
          {carouselItems.map((item, index) => (
            <Button
              variant="square"
              showArrow={false}
              className={activeItem?.slug === carouselItems[index]?.slug ? 'active' : 'inactive'}
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
