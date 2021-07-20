import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import Typography from '../../foundation/Typography'
import Button from '../../common/Button'

import { 
  CarouselWrapper,
  CarouselImageWrapper,
  CarouselOptionsSelector,
  CarouselItemInfo
} from './styles'

import projectSeraphImg from '../../../../public/assets/home/desktop/image-hero-seraph.jpg'
import projectFederalTowerImg from '../../../../public/assets/home/desktop/image-hero-federal.jpg'
import projectTrinityBankImg from '../../../../public/assets/home/desktop/image-hero-trinity.jpg'

interface CarouselItem {
  title: string
  description: string
  imgSrcSet: string
  slug: string
}

const carouselItems: CarouselItem[] = [
  {
    title: 'Project Paramour',
    description: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.',
    imgSrcSet: `
      /assets/home/mobile/image-hero-paramour.jpg 375w,
      /assets/home/tablet/image-hero-paramour.jpg 573w,
      /assets/home/desktop/image-hero-paramour.jpg 1110w
    `,
    slug: 'project-paramour'
  },
  // {
  //   title: 'Seraph Station',
  //   description: 'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.',
  //   img: projectSeraphImg,
  //   slug: 'seraph-station'
  // },
  // {
  //   title: 'Federal II Tower',
  //   description: 'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.',
  //   img: projectFederalTowerImg,
  //   slug: 'federal-ii-tower'
  // },
  // {
  //   title: 'Trinity Bank Tower',
  //   description: 'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.',
  //   img: projectTrinityBankImg,
  //   slug: 'trinity-bank-tower'
  // },
]

export default function Carousel() {
  const [activeItem, setActiveItem] = React.useState(carouselItems[0])

  function handleActiveItemChange(index: number) {
    setActiveItem(carouselItems[index])
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
            {activeItem.title}
          </Typography>
        </div>
        <Typography variant="body" color="white" tag="p">
          {activeItem.description}
        </Typography>

        <div style={{ marginTop: '40px' }}>
          <Button variant="default">See our portfolio</Button>
        </div>
      </CarouselItemInfo>
      <motion.div
        initial={{ x: 1110 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 1.2 }}
      >
        <CarouselImageWrapper>
          <img
            srcSet={activeItem.imgSrcSet}
            sizes="(max-width: 660) 375px,
              (max-width: 480px) 573px,
              1110px"
            className="carousel-background"
            alt="Image of the project"
          />
        </CarouselImageWrapper>
      </motion.div>
      <motion.div
        initial={{ x: -1110 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 1.2 }}
      >
        <CarouselOptionsSelector>
          {carouselItems.map((item, index) => {
            return (
              <Button
                variant="square"
                showArrow={false}
                className={ activeItem.slug === carouselItems[index].slug ? 'active' : 'inactive' }
                key={item.slug}
                onClick={() => handleActiveItemChange(index)}
              >
                0{index + 1}
              </Button>
            )
          })}
        </CarouselOptionsSelector>
      </motion.div>
    </CarouselWrapper>
  )
}