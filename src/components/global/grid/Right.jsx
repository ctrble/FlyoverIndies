import React from 'react';
import PropTypes from 'prop-types';

import styles from './Page.module.scss';

const Right = ({ children }) => (
  <div className={styles.page__right}>{children}</div>
);

Right.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Right;
