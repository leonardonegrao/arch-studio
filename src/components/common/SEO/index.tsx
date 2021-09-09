import Head from 'next/head';

import SEOProps from '@models/SEOProps'; 

export default function SEO({
  title,
  description,
  bannerImgUrl = 'https://www.datocms-assets.com/54030/1631212306-bannerimg.png',
}: SEOProps) {
  const baseUrl = 'https://arch-studio-blush.vercel.app/';
  const fullTitle = title ? `${title} | Arch Studio` : 'Arch Studio';

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={bannerImgUrl} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={baseUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={bannerImgUrl} />
    </Head>
  );
}
