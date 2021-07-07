import React from 'react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { SWRConfig } from 'swr';

import SEO from 'next-seo.config';

import 'src/scss/global.scss';

/* eslint-disable react/prop-types, react/jsx-props-no-spreading */
function FlyoverIndies({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <DefaultSeo {...SEO} />
        {getLayout(<Component {...pageProps} />)}
      </SWRConfig>
    </>
  );
}
/* eslint-enable react/prop-types, react/jsx-props-no-spreading */

export default FlyoverIndies;
