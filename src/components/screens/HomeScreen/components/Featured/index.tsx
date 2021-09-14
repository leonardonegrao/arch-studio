import Image from 'next/image';

import { FeaturedContainer, FeaturedProjectsWrapper } from './style';

import Button from '@components/common/Button';
import Link from '@components/common/Link';
import ProjectComponent from '@components/common/Project';
import Typography from '@components/foundation/Typography';

import Project from '@models/Project';

interface FeaturedProps {
  featuredProjects: Project[];
}

export default function Featured({ featuredProjects }: FeaturedProps) {
  function findImage(project: Project) {
    return project.images.find(image => image.customData.type === 'desktop');
  }

  return (
    <FeaturedContainer>
      <Typography
        variant="heading2"
        tag="h2"
        color="veryDarkBlue"
        className="featured-title"
      >
        Featured
      </Typography>
      <FeaturedProjectsWrapper>
        {featuredProjects && (featuredProjects.map((project, index) => (
          <ProjectComponent key={project.id} isFeatured>
            <div className="number-wrapper" style={{ opacity: 0.5 }}>
              <Typography variant="heading1Large" tag="h2" color="white">{index + 1}</Typography>
            </div>

            <div className="text-content-wrapper">
              <Typography variant="heading3" tag="h3" color="white">{project.title}</Typography>
              <Link href="/portfolio">
                <Typography variant="body" color="white">View All Projects</Typography>
              </Link>
            </div>
            <Image
              src={findImage(project).url}
              alt={findImage(project).alt}
              layout="fill"
              objectFit="cover"
            />
          </ProjectComponent>
        )))}
      </FeaturedProjectsWrapper>
      <Link href="/portfolio" className="featured-button">
        <Button variant="default">See All</Button>
      </Link>
    </FeaturedContainer>
  );
}
