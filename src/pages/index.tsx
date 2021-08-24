import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';

import Button from '@components/common/Button';
import SEO from '@components/common/SEO';
import Typography from '@components/foundation/Typography';
import { AboutUsContainer } from '@components/Home/AboutUsSection';
import Carousel from '@components/Home/Carousel';
import Featured from '@components/Home/Featured';
import WelcomeSection from '@components/Home/WelcomeSection';

import imageSmallTeam from '@public/assets/home/desktop/image-small-team.jpg';

const HomeMain = styled.main`
  width: 100%;
`;

export default function Home(): JSX.Element {
  return (
    <>
      <SEO title="Arch Studio" description="Small teams, big ideas" />

      <HomeMain>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 1.2 }}
        >
          <Carousel />
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

          <Featured />
        </motion.div>
      </HomeMain>
    </>
  );
}
