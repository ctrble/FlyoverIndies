import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Arcade.module.scss';

const ArcadeScreen = ({ children }) => (
  <section className={styles.arcade__screen}>
    <div className={styles.arcade__screenContent}>
      <div
        className={classnames(
          styles.arcade__screenBlur,
          styles.arcade__screenBlur_top
        )}
      />
      {children}
      <div
        className={classnames(
          styles.arcade__screenBlur,
          styles.arcade__screenBlur_bottom
        )}
      />
    </div>
  </section>
);

ArcadeScreen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ArcadeScreen;
