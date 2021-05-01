import React from 'react';

import Page from 'src/components/global/grid/Page';
import Icon from 'src/components/global/Icon';

const Home = () => (
  <Page>
    <Page.Left>
      <h1>this is the homepage</h1>
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
      <Icon
        src="images/flyover-indies-logo-text.svg"
        alt="Flyover Indies logo"
      />
    </Page.Right>
  </Page>
);

export default Home;
