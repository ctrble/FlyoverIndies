import React from 'react';
import dynamic from 'next/dynamic';

import Arcade from 'src/components/global/grid/Arcade';
import Icon from 'src/components/global/Icon';

const CovidTracker = dynamic(() => import('src/components/CovidTracker'), {
  ssr: false,
});

const Home = () => (
  <Arcade>
    <Arcade.Screen>
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
      <p>
        This is a paragraph. This is a paragraph. This is a paragraph. This is a
        paragraph. This is a paragraph.
      </p>
      <p>
        This is a paragraph. This is a paragraph. This is a paragraph. This is a
        paragraph. This is a paragraph.
      </p>
      <p>
        This is a paragraph. This is a paragraph. This is a paragraph. This is a
        paragraph. This is a paragraph.
      </p>
      <p>
        This is a paragraph. This is a paragraph. This is a paragraph. This is a
        paragraph. This is a paragraph.
      </p>
      <Icon
        src="images/flyover-indies-logo-text.svg"
        alt="Flyover Indies logo"
      />
    </Arcade.Screen>
    <Arcade.Panel>
      <p>this is some other stuff</p>
      {/* <CovidTracker /> */}
    </Arcade.Panel>
    <Arcade.Controls>
      <p>this is a nav</p>
      <p>this is a nav</p>
    </Arcade.Controls>
  </Arcade>
);

export default Home;
