import Image from 'next/image'
import styled from 'styled-components'

import Carousel from '../components/Home/Carousel'
import Button from '../components/common/Button'
import Typography from '../components/foundation/Typography'

import imageWelcome from '../../public/assets/home/desktop/image-welcome.jpg'
import imageSmallTeam from '../../public/assets/home/desktop/image-small-team.jpg'

const HomeMain = styled.main``

const WelcomeSection = styled.section`
  position: relative;

  height: 668px;
  margin-top: 95px;
  margin-bottom: 200px;

  .welcome-floating-message-wrapper {
    position: absolute;

    top: 0;
    left: 0;
    z-index: 1;
  }

  .about-arch-studio {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 100%;

    h2 {
      margin-bottom: 56px;
    }

    p + p {
      margin-top: 15px;
    }
  }
`

const AboutUsContainer = styled.section`
  position: relative;

  .content {
    position: absolute;

    top: 180px;
    left: 190px;
    z-index: 1;

    max-width: 544px;

    h1 {
      margin-bottom: 26px;
    }
  }

  .about-us-background {
    filter: brightness(70%);
  }
`

export default function Home() {
  return (
    <HomeMain>
      <Carousel />
      <WelcomeSection>
        <div className="welcome-floating-message-wrapper">
          <Typography
            variant="heading1Large"
            color="veryLightGrey"
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

          <div>
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
          alt="Image of a construction complex surrounded by water"
          className="about-us-background"
        />
      </AboutUsContainer>
    </HomeMain>
  )
}
