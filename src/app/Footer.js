import React from 'react';

import classes from './Footer.module.scss';
import Link from '../common/Link';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__inner}>
        <div className={classes.footer__content}>
          <span>&copy; 2019 - František Poboček</span>
          <Link
            href=""
            title="mail"
            onClick={e => {
              e.preventDefault();
              window.location.href =
                'mailto:pobocekfrantisek@gmail.com?subject=enquiry from website&body=Hello Frantisek, ';
            }}
          >
            pobocekfrantisek@gmail.com
          </Link>
        </div>
      </div>
      <div className={classes.footer__inner}>
        <div className={classes.footer__content}>
          React, Redux, HTML5, CSS3 / SASS / JSS, JS, Node / .Net Core
        </div>
      </div>
    </footer>
  );
}
