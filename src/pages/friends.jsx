import React from 'react';
import Head from 'next/head';

import Icon from 'src/components/global/Icon';

const Friends = () => (
  <>
    <Head>
      <title>Friends - Flyover Indies</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <p>these are our friends</p>
      <ul>
        <li>AWG</li>
        <li>KC Game Designers</li>
      </ul>
      <Icon src="flyover-indies-logo-text.svg" alt="Flyover Indies logo" />
    </main>
  </>
);

export default Friends;
