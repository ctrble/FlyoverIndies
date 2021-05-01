import React from 'react';
import dynamic from 'next/dynamic';

import Page from 'src/components/global/grid/Page';

const EventCalendar = dynamic(() => import('src/components/EventCalendar'), {
  ssr: false,
});

const Join = () => (
  <Page>
    <Page.Left>
      <h1>Join us</h1>
    </Page.Left>
    <Page.Right>
      <EventCalendar duration={{ weeks: 2 }} />
    </Page.Right>
  </Page>
);

export default Join;
