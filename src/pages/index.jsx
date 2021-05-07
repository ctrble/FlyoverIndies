import React from 'react';

import ArcadeTemplate from 'src/components/global/templates/ArcadeTemplate';
import Icon from 'src/components/global/Icon';

const Home = () => (
  <>
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
    <Icon src="images/flyover-indies-logo-text.svg" alt="Flyover Indies logo" />
  </>
);

// eslint-disable-next-line react/display-name
Home.getLayout = (page) => (
  <ArcadeTemplate panelContents={<p>i'm trapped in the computer!</p>}>
    {page}
  </ArcadeTemplate>
);

export default Home;
