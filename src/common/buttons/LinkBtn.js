import React from 'react';
import cs from 'classnames';

import classes from './LinkBtn.module.scss';

export default function LinkBtn({ children, className, ...restProps }) {
  return (
    <button className={cs(classes.reset, className)} {...restProps}>
      {children}
    </button>
  );
}
