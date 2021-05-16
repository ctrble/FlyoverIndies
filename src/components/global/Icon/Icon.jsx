import React from 'react';
import SVG from 'react-inlinesvg';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Icon.module.scss';

const Icon = ({ className, src, alt }) => (
  <div className={classnames(styles.icon, className && className)}>
    <SVG src={src} description={alt} fill="currentColor" />
  </div>
);

Icon.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  className: null,
};

export default Icon;
