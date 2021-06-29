import React from 'react';
import PropTypes from 'prop-types';

import styles from './Arcade.module.scss';

const ArcadePanel = ({ children }) => (
  <section className={styles.arcade__panel}>{children}</section>
);

ArcadePanel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ArcadePanel;
