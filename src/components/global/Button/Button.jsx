import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import SiteLink from 'src/components/global/SiteLink';

import styles from './Button.module.scss';

/* eslint-disable react/jsx-props-no-spreading */
const Button = ({ children, href, ...props }) => {
  if (href) {
    return (
      <SiteLink className={styles.button} href={href} {...props}>
        {children}
      </SiteLink>
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
