import React from 'react';
import PropTypes from 'prop-types';
import Left from './Left';
import Right from './Right';

import styles from './Page.module.scss';

const Page = ({ children }) => <main className={styles.page}>{children}</main>;

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

Page.Left = Left;
Page.Right = Right;

export default Page;
