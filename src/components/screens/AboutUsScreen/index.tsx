import LeadersSection from './components/LeadersSection';
import { StyledAboutUsScreen } from './style';

import Hero from '@components/common/Hero';
import Image from '@components/common/Image';
import Typography from '@components/foundation/Typography';

import Leader from '@models/Leader';

import HerigateImg from '@public/assets/about/image-heritage.jpg';
import HeroImg from '@public/assets/about/image-hero.jpg';

interface AboutUsProps {
  leaders: Leader[];
}

export default function AboutUsScreen({ leaders }: AboutUsProps) {
  return (
    <StyledAboutUsScreen>
      <Hero
        heroTitle="About"
        heroImg={HeroImg}
      >
        <Typography variant="heading1Small" color="veryDarkBlue" tag="h1">
              Your team of professionals
        </Typography>

        <Typography variant="body" color="darkGrey" tag="p">
              Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.
        </Typography>
      </Hero>
      
      <div className="justified-content-wrapper">
        <section className="heritage-wrapper">
          <div>
            <Typography variant="heading1Small" color="veryDarkBlue" tag="h1">
            Our Heritage
            </Typography>

            <Typography variant="body" color="darkGrey" tag="p">
            Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.
            </Typography>

            <Typography variant="body" color="darkGrey" tag="p">
          Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. 
            </Typography>

            <Typography variant="body" color="darkGrey" tag="p">
            Our small team of world-class professionals provides input on every project.
            </Typography>
          </div>

          <div className="heritage-image">
            <Image
              src={HerigateImg}
              alt="Heritage"
              responsiveHeight={{
                sm: '568px',
                md: '568px',
                lg: '568px',
              }}
              responsiveWidth={{
                sm: '540px',
                md: '540px',
                lg: '540px',
              }}
            />
          </div>
        </section>

        <LeadersSection leaders={leaders} />
      </div>
    </StyledAboutUsScreen>
  );
}
