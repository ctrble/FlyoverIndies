import React from 'react';
import SVG from 'react-inlinesvg';
import PropTypes from 'prop-types';

import styles from './Icon.module.scss';

const Icon = ({ src, alt }) => (
  <div className={styles.icon}>
    <SVG src={src} description={alt} fill="currentColor" />
  </div>
);

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Icon;
