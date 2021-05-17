import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'next/link';
import is from 'is_js';

/* eslint-disable react/jsx-props-no-spreading */
const SiteLink = ({ children, className, href, ...props }) => {
  if (is.url(href)) {
    return (
      <a className={classnames(className)} href={href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href}>
      <a className={classnames(className)} {...props}>
        {children}
      </a>
    </Link>
  );
};

SiteLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
};

SiteLink.defaultProps = {
  className: null,
};

export default SiteLink;
