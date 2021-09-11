import { HeroWrapper, HeroImageWrapper, HeroContentWrapper } from './style';

import Image from '@components/common/Image';
import Typography from '@components/foundation/Typography';

import HeroImg from '@public/assets/about/image-hero.jpg';

export default function Hero() {
  return (
    <HeroWrapper>
      <HeroImageWrapper>
        <Image
          src={HeroImg}
          alt="Hero"
          darkenFilter
          responsiveHeight={{
            sm: '240px',
            md: '708px',
            lg: '708px',
          }}
          responsiveWidth={{
            sm: '100%',
            md: '573px',
            lg: '635px',
          }}
        />
      </HeroImageWrapper>

      <Typography
        variant="heading1Large"
        color="veryLightGrey" 
        tag="h1"
        className="page-title"
      >
        About
      </Typography>

      <div className="decorative-white-block" />

      <HeroContentWrapper>
        <Typography variant="heading1Small" color="veryDarkBlue" tag="h1">
              Your team of professionals
        </Typography>

        <Typography variant="body" color="darkGrey" tag="p">
              Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.
        </Typography>
      </HeroContentWrapper>
    </HeroWrapper>
  );
}
