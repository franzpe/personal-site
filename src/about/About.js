import React from 'react';
import { aboutSocials } from 'common/social/socials';

import classes from 'common/Post.module.scss';
import SocialList from '../common/social/SocialList';

function About() {
  return (
    <main className={classes.post}>
      <article>
        <h2 className={classes.title}>About</h2>
        <div className={classes.content}>
          <p>
            I'm fullstack web developer but I mainly focus on the front end side of the web
            development building modern interactive user interfaces with ReactJS. I worked in the IT
            corporate industry for few years but then I had realised I want to have more freedom in
            terms of choosing my own technology stack and to have a closer relationship with my
            customers so I could design a personalized product just for them. Than I became a
            freelencer where I've found my real passion, which is developing modern web
            applications.
          </p>
          <p>My main stack that I use for frontend development every day is:</p>
          <ul>
            <li>React</li>
            <li>Redux / Apollo</li>
            <li>HTML5</li>
            <li>CSS3 / SASS / JSS</li>
            <li>Javascript (ES6/ES7)</li>
            <li>Typescript (using for bigger applications to provide typesafety)</li>
          </ul>
          <p>These are certifications I obtained while working at the corporate: </p>
          <ul>
            <li>Microsoft Certified Professional</li>
            <li>Microsoft Technology Associate Developer</li>
          </ul>
          <p>Other certifications: </p>
          <ul>
            <li>CCNA: Network Fundamentals</li>
          </ul>
          <p>
            I provide consultancy services for web development in particular for React developed
            apps as well. So for any business inquiry feel free to contact me on my email.
          </p>
          <h4 className={classes.subtitle}>You can find me on</h4>
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
