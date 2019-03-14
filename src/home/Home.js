import React from 'react';

import SocialList from '../common/social/SocialList';
import Avatar from './Avatar';

function Home() {
  return (
    <div>
      <Avatar />
      <h1>František Poboček</h1>
      <p>Frontend Web Developer with React</p>
      <SocialList />
    </div>
  );
}

export default Home;
