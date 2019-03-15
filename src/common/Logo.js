import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Logo.module.scss';

function Logo() {
  return (
    <Link to="/">
      <div className={classes.logo}>
        <span className={classes.mark}>></span>
        <span className={classes.text}>$ cd /home/</span>
        <span className={classes.cursor} />
      </div>
    </Link>
  );
}

export default Logo;
