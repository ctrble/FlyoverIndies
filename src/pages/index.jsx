import React from 'react';
import Head from 'next/head';

import Icon from 'src/components/global/Icon';

export default function Home() {
  return (
    <>
      <Head>
        <title>Flyover Indies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        this is the homepage
        <Icon src="flyover-indies-logo-text.svg" alt="Flyover Indies logo" />
      </main>
    </>
  );
}
