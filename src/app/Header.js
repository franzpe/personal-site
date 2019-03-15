import React, { useContext } from 'react';
import cs from 'classnames';

import { AppContext } from './AppContextProvider';
import classes from './Header.module.scss';
import Logo from '../common/Logo';
import Menu from './Menu';

function Header() {
  const context = useContext(AppContext);

  return (
    <header
      className={cs(classes.header, { [classes.darkTheme]: context.theme.currTheme === 'dark' })}
    >
      <span className={classes.inner}>
        <Logo />
        <span className={classes.right}>
          <Menu />
          <span className="menu-trigger">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </span>
          <span className={classes.themeToggle} onClick={() => context.theme.toggle()}>
            <svg
              className={classes.themeToggler}
              width="24"
              height="24"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22
  3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7
  13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z"
              />
            </svg>
          </span>
        </span>
      </span>
    </header>
  );
}

export default Header;
