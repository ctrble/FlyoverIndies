import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'next/link';
import is from 'is_js';

import styles from './SiteLink.module.scss';

/* eslint-disable react/jsx-props-no-spreading */
const SiteLink = ({ children, className, href, variant, ...props }) => {
  if (is.url(href)) {
    return (
      <a
        className={classnames(!variant && styles.siteLink, className)}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href}>
      <a
        className={classnames(!variant && styles.siteLink, className)}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};

SiteLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['button']),
};

SiteLink.defaultProps = {
  className: null,
  variant: null,
};

export default SiteLink;
