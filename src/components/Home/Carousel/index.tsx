
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

import Project from '@models/Project';

interface CarouselProps {
  items: Project[];
}

export default function Carousel({ items }: CarouselProps) {
  const [carouselItems, setCarouselItems] = useState<Project[]>([]);
  const [activeItem, setActiveItem] = useState<Project>(null);

  function handleActiveItemChange(index: number) {
    setActiveItem(carouselItems[index]);
  }

  useEffect(() => {
    if (items) {
      setCarouselItems(items);

      setActiveItem(carouselItems[0]); // first item is active by default
    }
  }, [items, carouselItems]);

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
        {activeItem && (
          <Image
            src={activeItem.images[0].url}
            alt={activeItem.images[0].alt}
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
