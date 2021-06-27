import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import Hamburger from 'hamburger-react';
import { useMediaQuery } from 'react-responsive';
import { motion, AnimatePresence } from 'framer-motion';

import navData from 'data/nav';

import SiteLink from 'src/components/global/SiteLink';

import styles from './Nav.module.scss';

const Nav = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const isPortrait = useMediaQuery({
    query: '(orientation: portrait)',
  });
  const isTouch = useMediaQuery({
    query: '(hover: none)',
  });
  const showBurger = isPortrait || isTouch;

  useEffect(() => {
    const handleRouteChange = () => setOpen(false);

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Prevent reloading of active pages
  const handleClick = (event) => event.preventDefault();
  const isActive = (path) => router.asPath === path;

  return (
    <nav className={styles.nav}>
      {showBurger && (
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size="48"
          distance="lg"
          label="Show menu"
          color={styles.var_burgerColor}
        />
      )}
      <AnimatePresence>
        {(isOpen || !showBurger) && (
          <motion.ul
            className={styles.nav__list}
            key="navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {navData.pages.map((item) => (
              <li className={styles.nav__item} key={uuidv4()}>
                <SiteLink
                  className={classnames(
                    styles.nav__link,
                    isActive(item.path) && styles.nav__link_isActive
                  )}
                  href={item.path}
                  // tabIndex="0"
                  onClick={isActive(item.path) ? handleClick : null}
                >
                  {item.title}
                </SiteLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
