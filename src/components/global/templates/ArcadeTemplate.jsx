import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

import Arcade from 'src/components/global/grid/Arcade';
import Nav from 'src/components/Nav';

const LogoAnimation = dynamic(() => import('src/components/LogoAnimation'), {
  ssr: false,
});

const ArcadeTemplate = ({ children, panelContents }) => (
  <Arcade>
    <Arcade.Screen>{children}</Arcade.Screen>
    <Arcade.Panel>{panelContents || <LogoAnimation />}</Arcade.Panel>
    <Arcade.Controls>
      <Nav />
    </Arcade.Controls>
  </Arcade>
);

ArcadeTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  panelContents: PropTypes.node,
};

ArcadeTemplate.defaultProps = {
  panelContents: null,
};

export default ArcadeTemplate;
