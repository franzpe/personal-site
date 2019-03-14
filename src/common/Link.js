import React from 'react';
import PropTypes from 'prop-types';

function Link({ children, target = '_blank', rel = 'noopener noreferrer', ...restProps }) {
  return (
    <a target={target} rel={rel} {...restProps}>
      {children}
    </a>
  );
}

export default Link;

Link.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  disableMargin: PropTypes.bool
};
