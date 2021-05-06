import React from 'react';
import PropTypes from 'prop-types';

import Arcade from 'src/components/global/grid/Arcade';
import Nav from 'src/components/Nav';

// import dynamic from 'next/dynamic';
// const CovidTracker = dynamic(() => import('src/components/CovidTracker'), {
//   ssr: false,
// });

const ArcadeTemplate = ({ children }) => (
  <div style={{ border: '1px solid red' }}>
    <Arcade>
      <Arcade.Screen>{children}</Arcade.Screen>
      <Arcade.Panel>
        <p>this is some other stuff</p>
      </Arcade.Panel>
      <Arcade.Controls>
        <Nav />
      </Arcade.Controls>
    </Arcade>
  </div>
);

ArcadeTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ArcadeTemplate;
