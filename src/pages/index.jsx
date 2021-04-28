import React from 'react';
import dynamic from 'next/dynamic';

import Icon from 'src/components/global/Icon';
import Page from 'src/components/global/grid/Page';

const EventCalendar = dynamic(() => import('src/components/EventCalendar'), {
  ssr: false,
});

const Home = () => (
  <Page>
    <Page.Left>
      <Icon
        src="images/flyover-indies-logo-text.svg"
        alt="Flyover Indies logo"
      />
      this is the homepage
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <h6>Header 6</h6>
      <p>
        This is a paragraph. This is a paragraph. This is a paragraph. This is a
        paragraph. This is a paragraph.
      </p>
      <p>
        This is a paragraph. This is a paragraph. This is a paragraph. This is a
        paragraph. This is a paragraph.
      </p>
    </Page.Left>
    <Page.Right>
      <EventCalendar duration={{ weeks: 2 }} />
    </Page.Right>
  </Page>
);

export default Home;
