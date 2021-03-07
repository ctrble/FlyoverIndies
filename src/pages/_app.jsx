import React from 'react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { TypographyStyle, GoogleFont } from 'react-typography';
// Best practice is to have a typography module
// where you define your theme.
import typography from 'src/lib/typography';

import SEO from '../../next-seo.config';

import 'src/scss/global.scss';

/* eslint-disable react/prop-types, react/jsx-props-no-spreading */
function FlyoverIndies({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
/* eslint-enable react/prop-types, react/jsx-props-no-spreading */

export default FlyoverIndies;
