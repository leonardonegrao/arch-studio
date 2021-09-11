import { motion } from 'framer-motion';

import SocialIcon from './components/SocialIcon';
import { StyledLeadersSection, StyledLeader } from './style';

import Image from '@components/common/Image';
import Typography from '@components/foundation/Typography';

import Leader from '@models/Leader';

interface AboutUsProps {
  leaders: Leader[];
}

const iconsOverlayMotion = {
  initial: {
    opacity: 0,
    y: '50%',
  },
  hover: {
    opacity: 1,
    y: 0,    
  }
};

export default function LeadersSection({ leaders }: AboutUsProps) {
  return (
    <StyledLeadersSection>
      <Typography variant="heading1Small" tag="h1" color="veryDarkBlue">The Leaders</Typography>

      <div className="leaders-wrapper">
        {leaders?.map(leader => (
          <StyledLeader key={leader.id}>
            <motion.div className="avatar-wrapper">
              <Image
                src={leader.profilePicture.url}
                alt={leader.fullName}
                responsiveHeight={{
                  sm: '284px',
                  md: '256px',
                  lg: '320px',
                }}
                responsiveWidth={{
                  sm: '311px',
                  md: '280px',
                  lg: '350px',
                }}
              />
              <motion.div
                className="icons-wrapper-overlay"
                variants={iconsOverlayMotion}
                initial="initial"
                whileHover="hover"
                transition={{ ease: 'easeInOut', duration: .6 }}
              >
                <div>
                  <a href={leader.linkedinUrl}>
                    <SocialIcon icon="linkedin" color="light" />
                  </a>

                  <a href={leader.twitterUrl}>
                    <SocialIcon icon="twitter" color="light" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
            <Typography variant="heading3" tag="h2" color="veryDarkBlue">{leader.fullName}</Typography>
            <Typography variant="body" tag="h3" color="veryDarkBlue">{leader.companyRole}</Typography>
            <div className="icons-wrapper">
              <a href={leader.linkedinUrl} target="_blank" rel="noreferrer">
                <SocialIcon icon="linkedin" color="dark" />
              </a>

              <a href={leader.twitterUrl}>
                <SocialIcon icon="twitter" color="dark" />
              </a>
            </div>
          </StyledLeader>
        ))}
      </div>
    </StyledLeadersSection>
  );
}
