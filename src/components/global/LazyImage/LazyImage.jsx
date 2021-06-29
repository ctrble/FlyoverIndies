import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';

// Spreading for convenience
/* eslint-disable react/jsx-props-no-spreading */
const LazyImage = ({ src, alt, ...props }) => (
  <LazyLoadImage src={src} alt={alt} effect="opacity" {...props} />
);

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LazyImage;
