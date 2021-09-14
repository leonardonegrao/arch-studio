import React from 'react';
import Lottie from 'react-lottie';

import * as animationData from './animation.json';
import { NotFoundAnimationWrapper, NotFoundScreenWrapper } from './style';

import Button from '@components/common/Button';
import Link from '@components/common/Link';
import Typography from '@components/foundation/Typography';

export default function NotFoundScreen() {
  return (
    <NotFoundScreenWrapper>
      <Typography
        variant="heading1Small"
        color="veryDarkBlue"
        tag="h1"
      >
        The page you are looking for does not exist.
      </Typography>

      <NotFoundAnimationWrapper>
        <Lottie
          options={{
            animationData,
            loop: true,
            autoplay: true,
          }}
        />
      </NotFoundAnimationWrapper>

      <Typography
        variant="body"
        color="veryDarkBlue"
        tag="p"
      >
        The content might have been moved/deleted or the URL might be incorrect.
      </Typography>

      <Link href="/">
        <Button variant="default">Take me back home</Button>
      </Link>
    </NotFoundScreenWrapper>
  );
}
