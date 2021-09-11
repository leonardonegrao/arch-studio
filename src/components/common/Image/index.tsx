import NextImage, { ImageProps as NextImageProps } from 'next/image';

import { ImageWrapper } from './style';

declare type ImageProps = Omit<NextImageProps, 'width' | 'height'> & {
  darkenFilter?: boolean;
  responsiveWidth: {
    sm: string;
    md: string;
    lg: string;
  };
  responsiveHeight: {
    sm: string;
    md: string;
    lg: string;
  };
}

export default function Image({ responsiveHeight, responsiveWidth, darkenFilter = false, ...rest }: ImageProps) {
  console.log(rest.alt, darkenFilter);

  return (
    <ImageWrapper width={responsiveWidth} height={responsiveHeight}>
      <NextImage
        {...rest}
        objectFit="cover"
        layout="fill"
      />
      {darkenFilter && <div className="darken-filter" />}
    </ImageWrapper>
  );
}
