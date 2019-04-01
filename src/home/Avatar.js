import React, { useContext } from 'react';

import AvatarPhotoLight from '_assets/images/avatar_circle_light.png';
import AvatarPhotoDark from '_assets/images/avatar_circle_dark.png';
import classes from './Avatar.module.scss';
import { AppContext } from '../app/AppContextProvider';
import { theme } from '../_utils/Theme';

function Avatar() {
  const context = useContext(AppContext);

  return (
    <div className={classes.avatar}>
      <img
        alt="avatar"
        src={context.theme.currTheme === theme.DARK ? AvatarPhotoLight : AvatarPhotoDark}
        className={classes.avatar__image}
      />
    </div>
  );
}

export default Avatar;
