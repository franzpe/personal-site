import React from 'react';

import AvatarPhoto from '_assets/images/avatar.jpg';
import classes from './Avatar.module.scss';

function Avatar() {
  return (
    <div className={classes.avatar}>
      <img alt="avatar" src={AvatarPhoto} />
    </div>
  );
}

export default Avatar;
