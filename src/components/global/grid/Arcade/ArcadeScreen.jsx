import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useRouter } from 'next/router';

import styles from './Arcade.module.scss';

const ArcadeScreen = ({ children }) => {
  const router = useRouter();
  const contentRef = useRef(null);

  useEffect(() => {
    const handleRouteChange = () => {
      // Scroll to top inside the content, Nextjs does this on page transition but our content is in this other section
      if (contentRef.current) {
        const { current } = contentRef;
        current.scrollTop = 0;
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <section className={styles.arcade__screen}>
      <div className={styles.arcade__screenContent} ref={contentRef}>
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
};

ArcadeScreen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ArcadeScreen;
