import React from 'react';
import PropTypes from 'prop-types';

import styles from './Page.module.scss';

const Left = ({ children }) => (
  <div className={styles.page__left}>{children}</div>
);

Left.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Left;
