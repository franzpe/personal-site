import React from 'react';
import { homeSocials } from 'common/social/socials';

import Head from 'app/Head';
import SocialList from '../common/social/SocialList';
import Avatar from './Avatar';
import localization from '../_utils/localization';
import classes from './Home.module.scss';

function Home() {
  return (
    <div className={classes.container}>
      <Head />
      <div>
        <Avatar />
        <h1 className="h-center">František Poboček</h1>
        <p>{localization.homeHeading}</p>
        <SocialList socials={homeSocials} horizontal={true} />
      </div>
    </div>
  );
}

export default Home;
