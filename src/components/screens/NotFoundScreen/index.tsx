import Lottie from 'react-lottie';

import * as animationData from './animation.json';

import Typography from '@components/foundation/Typography';


export default function NotFoundScreen() {
  return (
    <div>
      <Typography
        variant="heading1Small"
        color="veryDarkBlue"
        tag="h1"
      >
        The page you are looking for does not exist.
      </Typography>

      <Lottie
        options={{
          animationData,
          loop: true,
          autoplay: true,
        }}
        height={400}
        width={400}
      />

      <Typography
        variant="body"
        color="veryDarkBlue"
        tag="p"
      >
        The content might have been moved/deleted or the URL might be incorrect.
      </Typography>
    </div>
  );
}
