import React from 'react';
import { aboutSocials } from 'common/social/socials';

import classes from 'common/Post.module.scss';
import SocialList from '../common/social/SocialList';
import localization from '../_utils/localization';

function About() {
  return (
    <main className={classes.post}>
      <article>
        <h2 className={classes.title}>{localization.about}</h2>
        <div className={classes.content}>
          <p>{localization.aboutp1}</p>
          <p>{localization.aboutFeStack}</p>
          <ul>
            {localization.aboutFeStackList.map(lng => (
              <li>{lng}</li>
            ))}
          </ul>
          <p>{localization.aboutBeStack}</p>
          <ul>
            {localization.aboutBeStackList.map(lng => (
              <li>{lng}</li>
            ))}
          </ul>
          <p>{localization.aboutp3}</p>
          <ul>
            <li>Microsoft Certified Professional</li>
            <li>Microsoft Technology Associate Developer</li>
          </ul>
          <p>{localization.aboutp4}</p>
          <ul>
            <li>CCNA: Network Fundamentals</li>
          </ul>
          <p>{localization.aboutp5}</p>
          <h4 className={classes.subtitle}>{localization.aboutSubtitle}</h4>
          <div style={{ margin: '0 0 1.5em' }}>
            <SocialList socials={aboutSocials} />
          </div>
        </div>
      </article>
      <hr />
    </main>
  );
}

export default About;
