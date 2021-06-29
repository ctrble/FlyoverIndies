import React from 'react';
import PropTypes from 'prop-types';

import styles from './Page.module.scss';

const Left = ({ children }) => (
  <section className={styles.page__left}>{children}</section>
);

Left.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Left;
