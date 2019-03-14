import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

import classes from './SocialLink.module.scss';
import Link from '../Link';

export default function SocialLink({
  children,
  href,
  title = '',
  disableMargin,
  className: classname,
  ...restProps
}) {
  return (
    <Link
      href={href}
      title={title}
      className={cs(classes.link, classname, { [classes.last]: disableMargin })}
      {...restProps}
    >
      {children}
    </Link>
  );
}

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  disableMargin: PropTypes.bool
};
