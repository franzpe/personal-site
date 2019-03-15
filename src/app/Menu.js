import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Menu.module.scss';

function Menu() {
  return (
    <nav className={classes.menu}>
      <ul className={classes.inner}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
