import React from 'react';
import PropTypes from 'prop-types';

import SocialLink from './SocialLink';
import classes from './SocialList.module.scss';

function SocialList({ socials, horizontal }) {
  return (
    <ul className={classes.list}>
      {socials.map(({ title, content, ...restSocial }, index) => (
        <li key={title} className={horizontal ? classes.horizontal : ''}>
          <SocialLink title={title} disableMargin={index === socials.length - 1} {...restSocial}>
            {content}
          </SocialLink>
        </li>
      ))}
    </ul>
  );
}

SocialList.propTypes = {
  socials: PropTypes.arrayOf(PropTypes.object).isRequired,
  horizontal: PropTypes.bool
};

export default React.memo(SocialList);
