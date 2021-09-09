

import Image from 'next/image';

import {
  WelcomeSectionWrapper,
  WelcomeContentWrapper, 
  WelcomeFloatingMessageWrapper, 
  WelcomeImageWrapper 
} from './styles';

import Typography from '@components/foundation/Typography';

import imageWelcome from '@public/assets/home/desktop/image-welcome.jpg';

export default function WelcomeSection(): JSX.Element {
  return (
    <WelcomeSectionWrapper>
      <WelcomeFloatingMessageWrapper>
        <Typography variant="heading1Large" color="veryLightGrey" tag={'h2'}>
          Welcome
        </Typography>
      </WelcomeFloatingMessageWrapper>

      <WelcomeContentWrapper>
        <div>
          <Typography variant="heading2" tag="h2" color="veryDarkBlue">
            Welcome to Arch Studio
          </Typography>

          <Typography variant="body" tag="p" color="darkGrey">
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </Typography>
          <Typography variant="body" tag="p" color="darkGrey">
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </Typography>
          <Typography variant="body" tag="p" color="darkGrey">
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </Typography>
        </div>
      </WelcomeContentWrapper>
      <WelcomeImageWrapper>
        <Image
          src={imageWelcome}
          alt="Decorative image of the facade of a building"
          height={568}
          width={350}
        />
      </WelcomeImageWrapper>
    </WelcomeSectionWrapper>
  );
}
