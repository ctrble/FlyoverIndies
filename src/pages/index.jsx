import React from 'react';
import dynamic from 'next/dynamic';

import ArcadeTemplate from 'src/components/global/templates/ArcadeTemplate';
import Icon from 'src/components/global/Icon';

const NextEvent = dynamic(() => import('src/components/calendars/NextEvent'), {
  ssr: false,
});

const Home = () => (
  <>
    <NextEvent />
    <Icon src="images/flyover-indies-logo-text.svg" alt="Flyover Indies logo" />
  </>
);

// eslint-disable-next-line react/display-name
Home.getLayout = (page) => <ArcadeTemplate>{page}</ArcadeTemplate>;

export default Home;
