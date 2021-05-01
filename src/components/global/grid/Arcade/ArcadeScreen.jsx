import React from 'react';
import PropTypes from 'prop-types';

import styles from './Arcade.module.scss';

const ArcadeScreen = ({ children }) => (
  <section className={styles.arcade__screen}>{children}</section>
);

ArcadeScreen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ArcadeScreen;
