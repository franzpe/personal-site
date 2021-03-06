/* eslint no-useless-computed-key: 0 */
import React, { Fragment, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import cs from 'classnames';

import classes from './Menu.module.scss';
import { AppContext } from './AppContextProvider';
import localization from '../_utils/localization';
import { theme } from '../_utils/Theme';

function Menu() {
  const [isMenuOpened, setIsMenuOpened] = useState(true);
  const context = useContext(AppContext);

  return (
    <Fragment>
      <nav
        className={cs(classes.menu, {
          [classes.darkTheme]: context.theme.currTheme === theme.DARK,
          ['hide-on-phone']: isMenuOpened
        })}
      >
        <ul className={classes.inner}>
          <li>
            <NavLink to="/projects">{localization.projects}</NavLink>
          </li>
          <li>
            <NavLink to="/about">{localization.about}</NavLink>
          </li>
        </ul>
      </nav>
      <span className={classes.trigger} onClick={() => setIsMenuOpened(!isMenuOpened)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </span>
    </Fragment>
  );
}

export default Menu;
