import Image from 'next/image';


import Typography from '../components/foundation/Typography';
import { FeaturedProject } from '../components/Home/Featured/style';
import { PortfolioListWrapper } from '../components/Portfolio/PortfolioList';
import { projectList } from '../projects';

import Link from '@components/common/Link';

export default function Portfolio() {
  return (
    <PortfolioListWrapper>
      {projectList.map(project => (
        <FeaturedProject key={project.slug}>
          <div className="text-content-wrapper">
            <Typography variant="heading3" tag="h3" color="white">Project Del Sol</Typography>
            <Link href="/portfolio">
              <Typography variant="body" tag="a" color="white">View All Projects</Typography>
            </Link>
          </div>
          <Image
            src={project.img}
            alt="Image of Project Del Sol"
            layout="fill"
          />
        </FeaturedProject>
      ))}
    </PortfolioListWrapper>
  );
} 
