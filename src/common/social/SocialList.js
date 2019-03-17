import React from 'react';
import PropTypes from 'prop-types';

import SocialLink from './SocialLink';

function SocialList({ socials }) {
  return (
    <div>
      {socials.map(({ title, content, ...restSocial }, index) => (
        <SocialLink
          key={title}
          title={title}
          disableMargin={index === socials.length - 1}
          {...restSocial}
        >
          {content}
        </SocialLink>
      ))}
    </div>
  );
}

SocialList.propTypes = {
  socials: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default React.memo(SocialList);
