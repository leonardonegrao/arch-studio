/* eslint-disable no-extra-semi */
/* eslint-disable semi */
export interface Image {
  id: string;
  alt: string;
  url: string;
  type: 'desktop' | 'mobile' | 'tablet' | 'hero-desktop' | 'hero-mobile' | 'hero-tablet';
}

export default interface Project {
  id: string;
  title: string;
  description?: string;
  date: Date;
  slug: string;
  images: Image[];
};
