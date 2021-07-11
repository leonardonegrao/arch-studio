import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import Typography from '../../foundation/Typography'
import Button, { ButtonWrapper } from '../../common/Button'

import projectParamourImg from '../../../../public/assets/home/desktop/image-hero-paramour.jpg'
import projectSeraphImg from '../../../../public/assets/home/desktop/image-hero-seraph.jpg'
import projectFederalTowerImg from '../../../../public/assets/home/desktop/image-hero-federal.jpg'
import projectTrinityBankImg from '../../../../public/assets/home/desktop/image-hero-trinity.jpg'

interface CarouselItem {
  title: string
  description: string
  img: StaticImageData
  slug: string
}

const CarouselWrapper = styled.div`
  position: relative;

  .carousel-background {
    width: 1110px;
    height: 720px;
    filter: brightness(70%);
  }
`

const CarouselItemInfo = styled.div`
  position: absolute;
  top: 180px;
  left: 190px;
  z-index: 1;

  max-width: 544px;
`

const CarouselOptionsSelector = styled.div`
  position: absolute;
  display: flex;

  bottom: 0px;
  left: -80px;

  ${ButtonWrapper} {
    background: #fff;
    color: ${({ theme }) => theme.colors.mediumGrey};

    &.active {
      background: ${({ theme }) => theme.colors.veryDarkBlue};
      color: #fff;
    }

    &.inactive {
      &:hover {
        background: ${({ theme }) => theme.colors.veryLightGrey}
      }
    }
  }
`

const carouselItems: CarouselItem[] = [
  {
    title: 'Project Paramour',
    description: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.',
    img: projectParamourImg,
    slug: 'project-paramour'
  },
  {
    title: 'Seraph Station',
    description: 'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.',
    img: projectSeraphImg,
    slug: 'seraph-station'
  },
  {
    title: 'Federal II Tower',
    description: 'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.',
    img: projectFederalTowerImg,
    slug: 'federal-ii-tower'
  },
  {
    title: 'Trinity Bank Tower',
    description: 'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.',
    img: projectTrinityBankImg,
    slug: 'trinity-bank-tower'
  },
]

export default function Carousel() {
  const [activeItem, setActiveItem] = React.useState(carouselItems[0])

  function handleActiveItemChange(index: number) {
    console.log(carouselItems[index])
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
      <Image
        src={activeItem.img}
        className="carousel-background"
        alt="Image of the project"
      />
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
    </CarouselWrapper>
  )
}