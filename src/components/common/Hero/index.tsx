import { HeroWrapper, HeroImageWrapper, HeroContentWrapper } from './style';

import Image from '@components/common/Image';
import Typography from '@components/foundation/Typography';

interface HeroProps {
  heroImg: StaticImageData;
  heroTitle: string;
  children: React.ReactNode;
}

export default function Hero({ heroTitle, heroImg, children }: HeroProps) {
  return (
    <HeroWrapper>
      <HeroImageWrapper>
        <Image
          src={heroImg}
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
        {heroTitle}
      </Typography>

      <div className="decorative-white-block" />

      <HeroContentWrapper>
        {children}
      </HeroContentWrapper>
    </HeroWrapper>
  );
}
