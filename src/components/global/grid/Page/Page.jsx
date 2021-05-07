import React from 'react';
import PropTypes from 'prop-types';

import styles from './Page.module.scss';

const Page = ({ children }) => <main className={styles.page}>{children}</main>;

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
