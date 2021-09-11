import NextImage, { ImageProps as NextImageProps } from 'next/image';

import { ImageWrapper } from './style';

interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}
interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

declare type ImageProps = Omit<NextImageProps, 'width' | 'height' | 'blurDataURL'> & {
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

export default function Image({ responsiveHeight, responsiveWidth, darkenFilter = false, src, ...rest }: ImageProps) {
  return (
    <ImageWrapper width={responsiveWidth} height={responsiveHeight}>
      <NextImage
        src={src as StaticImport}
        {...rest}
        objectFit="cover"
        layout="fill"
      />
      {darkenFilter && <div className="darken-filter" />}
    </ImageWrapper>
  );
}
