import Image from 'next/image';
import { useEffect, useState } from 'react';

import { PortfolioListWrapper } from './components/PortfolioList';

import Link from '@components/common/Link';
import ProjectWrapper from '@components/common/Project';
import Typography from '@components/foundation/Typography';

import Project from '@models/Project';

interface PortfolioScreenProps {
  projects: Project[];
}

export default function PortfolioScreen({ projects }: PortfolioScreenProps) {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  function findMainImage(project: Project) {
    return project.images.find(image => image.customData.type === 'desktop');
  }

  function handleDate(date: Date | string): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;

    return dateObj.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  }

  useEffect(() => {
    if (projects) {
      const formattedProjects = projects.map(project => {
        const formattedDate = handleDate(project.date);
        const mainImage = findMainImage(project);

        return {
          ...project,
          date: formattedDate,
          mainImage,
        };
      });

      setFeaturedProjects(formattedProjects);
    }
  }, [projects]);

  return (
    <PortfolioListWrapper>
      {featuredProjects?.map(project => (
        <ProjectWrapper key={project.id} isFeatured={false}>
          <div className="text-content-wrapper">
            <Typography variant="heading3" tag="h3" color="white">{project.title}</Typography>
            <Link href="/portfolio">
              <Typography variant="body" tag="a" color="white">
                {project.date}
              </Typography>
            </Link>
          </div>
          <Image
            src={project.mainImage.url}
            alt={project.mainImage.alt}
            layout="fill"
          />
        </ProjectWrapper>
      ))}
    </PortfolioListWrapper>
  );
}
