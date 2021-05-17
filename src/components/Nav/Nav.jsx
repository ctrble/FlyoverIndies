import React from 'react';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

import navData from 'data/nav';

import SiteLink from 'src/components/global/SiteLink';

import styles from './Nav.module.scss';

const Nav = () => {
  const router = useRouter();
  const isActive = (path) => router.asPath === path;

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {navData.pages.map((item) => (
          <li key={uuidv4()}>
            <SiteLink
              className={classnames(
                styles.nav__link,
                isActive(item.path) && styles.nav__link_isActive
              )}
              href={item.path}
              onClick={isActive(item.path) ? handleClick : null}
            >
              {item.title}
            </SiteLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
