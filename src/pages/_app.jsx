import React, { useEffect } from 'react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { SWRConfig } from 'swr';
import { useRouter } from 'next/router';

import * as gtag from 'src/lib/gtag';
import SEO from 'next-seo.config';

import 'src/scss/global.scss';

/* eslint-disable react/prop-types, react/jsx-props-no-spreading */
function FlyoverIndies({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
