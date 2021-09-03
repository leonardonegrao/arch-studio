export interface ProjectImage {
  id: string;
  url: string;
  alt: string;
  customData: {
    type: 'desktop' | 'mobile' | 'tablet' | 'hero-desktop' | 'hero-mobile' | 'hero-tablet';
  };
}

interface Project {
  id: string;
  title: string;
  description?: string;
  slug: string;
  carousel: boolean;
  date: Date;
  images: ProjectImage[];
}

export default Project;
