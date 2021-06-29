import React from 'react';
import PropTypes from 'prop-types';

import styles from './Arcade.module.scss';

const ArcadeControls = ({ children }) => (
  <section className={styles.arcade__controls}>{children}</section>
);

ArcadeControls.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ArcadeControls;
