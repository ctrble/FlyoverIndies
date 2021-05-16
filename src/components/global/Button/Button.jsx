import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'next/link';
import is from 'is_js';

import styles from './Button.module.scss';

/* eslint-disable react/jsx-props-no-spreading */
const Button = ({ children, href, ...props }) => {
  if (href) {
    if (is.url(href)) {
      return (
        <a className={classnames(styles.button)} href={href} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href}>
        <a className={classnames(styles.button)} {...props}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button className={classnames(styles.button)} type="button" {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

Button.defaultProps = {
  href: null,
};

export default Button;
