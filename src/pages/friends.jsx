import React from 'react';

import ArcadeTemplate from 'src/components/global/templates/ArcadeTemplate';
import Icon from 'src/components/global/Icon';

const Friends = () => (
  <>
    <p>these are our friends</p>
    <ul>
      <li>AWG</li>
      <li>KC Game Designers</li>
    </ul>
    <Icon src="images/flyover-indies-logo-text.svg" alt="Flyover Indies logo" />
  </>
);

// eslint-disable-next-line react/display-name
Friends.getLayout = (page) => <ArcadeTemplate>{page}</ArcadeTemplate>;

export default Friends;
