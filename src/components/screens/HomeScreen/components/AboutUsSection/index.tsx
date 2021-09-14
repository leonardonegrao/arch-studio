import Image from 'next/image';
import React from 'react';

import { AboutUsContainer } from './style';

import Button from '@components/common/Button';
import Link from '@components/common/Link';

import imageSmallTeam from '@public/assets/home/desktop/image-small-team.jpg';

export default function AboutUsSection() {
  return (
    <AboutUsContainer>
      <div className="content">
        <h1>
          Small team, big ideas
        </h1>

        <Link href="/about-us">
          <Button variant="default">About Us</Button>
        </Link>
      </div>

      <Image
        src={imageSmallTeam}
        layout="fill"
        objectFit="cover"
        alt="Image of a construction complex surrounded by water"
        className="about-us-background"
      />
    </AboutUsContainer>
  );
}
