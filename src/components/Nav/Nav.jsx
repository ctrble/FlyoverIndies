import React from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

import navData from 'data/nav';

const Nav = () => (
  <ul>
    {navData.pages.map((item) => (
      <li key={uuidv4()}>
        <Link href={item.path}>
          <a>{item.title}</a>
        </Link>
      </li>
    ))}
  </ul>
);

export default Nav;
