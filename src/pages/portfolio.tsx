import Image from 'next/image';
import Link from 'next/link';

import Typography from '../components/foundation/Typography';
import { FeaturedProject } from '../components/Home/Featured/style';
import { PortfolioListWrapper } from '../components/Portfolio/PortfolioList';
import { projectList } from '../projects';

export default function Portfolio() {
  return (
    <PortfolioListWrapper>
      {projectList.map(project => (
        <FeaturedProject key={project.slug}>
          <div className="text-content-wrapper">
            <Typography variant="heading3" tag="h3" color="white">Project Del Sol</Typography>
            <Link href="/portfolio">
              <a>
                <Typography variant="body" tag="a" color="white">View All Projects</Typography>
              </a>
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