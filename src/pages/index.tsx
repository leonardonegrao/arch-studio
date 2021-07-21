import Image from 'next/image'
import styled from 'styled-components'

import { motion } from 'framer-motion'

import Carousel from '../components/Home/Carousel'
import Featured from '../components/Home/Featured'
import SEO from '../components/common/SEO'
import Button from '../components/common/Button'
import Typography from '../components/foundation/Typography'
import { WelcomeSection } from '../components/Home/WelcomeSection'
import { AboutUsContainer } from '../components/Home/AboutUsSection'

import imageWelcome from '../../public/assets/home/desktop/image-welcome.jpg'
import imageSmallTeam from '../../public/assets/home/desktop/image-small-team.jpg'

const HomeMain = styled.main`
  width: 100%;
`

export default function Home() {

  return (
    <>
      <SEO title="Arch Studio" description="Small teams, big ideas" />

      <HomeMain>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.2 }}
        >
          <Carousel />
          <WelcomeSection>
            <div className="welcome-floating-message-wrapper">
              <Typography
                variant="heading1Large"
                color="veryLightGrey"
                tag={'h2'}
              >
                Welcome
              </Typography>
            </div>

            <div className="about-arch-studio">
              <div
                style={{ maxWidth: '446px', marginRight: '125px' }}
              >
                <Typography variant="heading2" tag="h2" color="veryDarkBlue">
                  Welcome to Arch Studio
                </Typography>

                <Typography variant="body" tag="p" color="darkGrey">
                We have a unique network and skillset to help bring your projects to life. 
                Our small team of highly skilled individuals combined with our large network put us 
                in a strong position to deliver exceptional results.
                </Typography>
                <Typography variant="body" tag="p" color="darkGrey">
                Over the past 10 years, we have worked on all kinds of projects. 
                From stations to high-rise buildings, we create spaces that inspire and delight.
                </Typography>
                <Typography variant="body" tag="p" color="darkGrey">
                We work closely with our clients so that we understand the intricacies of each project. 
                This allows us to work in harmony the surrounding area to create truly stunning projects that 
                will stand the test of time.
                </Typography>
              </div>

              <div className="image-welcome">
                <Image
                  src={imageWelcome}
                  alt="Decorative image of the facade of a building"
                  height="568"
                  width="350"
                />
              </div>
            </div>
          </WelcomeSection>

          <AboutUsContainer>
            <div className="content">
              <Typography
                variant="heading1Small"
                color="white"
                tag="h1"
              >
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
  )
}
