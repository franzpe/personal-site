import React from 'react';
import { homeSocials } from 'common/social/socials';

import SocialList from '../common/social/SocialList';
import Avatar from './Avatar';

function Home() {
  return (
    <div>
      <Avatar />
      <h1>František Poboček</h1>
      <p>Fullstack Web Developer with React</p>
      <SocialList socials={homeSocials} horizontal={true} />
    </div>
  );
}

export default Home;
