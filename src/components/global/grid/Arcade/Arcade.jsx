import React from 'react';
import PropTypes from 'prop-types';

import styles from './Arcade.module.scss';

const Arcade = ({ children }) => (
  <main className={styles.arcade}>{children}</main>
);

Arcade.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Arcade;
