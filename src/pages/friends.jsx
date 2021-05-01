import React from 'react';

import Page from 'src/components/global/grid/Page';
import Icon from 'src/components/global/Icon';

const Friends = () => (
  <Page>
    <Page.Left>
      <p>these are our friends</p>
      <ul>
        <li>AWG</li>
        <li>KC Game Designers</li>
      </ul>
    </Page.Left>
    <Page.Right>
      <Icon
        src="images/flyover-indies-logo-text.svg"
        alt="Flyover Indies logo"
      />
    </Page.Right>
  </Page>
);

export default Friends;
