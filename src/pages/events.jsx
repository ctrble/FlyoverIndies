import React from 'react';
import dynamic from 'next/dynamic';

import ArcadeTemplate from 'src/components/global/templates/ArcadeTemplate';

const EventCalendar = dynamic(() => import('src/components/EventCalendar'), {
  ssr: false,
});

const Join = () => (
  <>
    <h1>Events</h1>
    <EventCalendar duration={{ weeks: 2 }} />
  </>
);

// eslint-disable-next-line react/display-name
Join.getLayout = (page) => <ArcadeTemplate>{page}</ArcadeTemplate>;

export default Join;
