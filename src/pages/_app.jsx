import React from 'react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import SEO from 'next-seo.config';

import 'src/scss/global.scss';

/* eslint-disable react/prop-types, react/jsx-props-no-spreading */
function FlyoverIndies({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo {...SEO} />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
/* eslint-enable react/prop-types, react/jsx-props-no-spreading */

export default FlyoverIndies;
