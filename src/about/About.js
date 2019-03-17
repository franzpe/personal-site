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
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean et est a dui semper
            facilisis. Pellentesque placerat elit a nunc. Nullam tortor odio, rutrum quis, egestas
            ut, posuere sed, felis. Vestibulum placerat feugiat nisl. Suspendisse lacinia, odio non
            feugiat vestibulum, sem erat blandit metus, ac nonummy magna odio pharetra felis.
            Vivamus vehicula velit non metus faucibus auctor. Nam sed augue. Donec orci. Cras eget
            diam et dolor dapibus sollicitudin. In lacinia, tellus vitae laoreet ultrices, lectus
            ligula dictum dui, eget condimentum velit dui vitae ante. Nulla nonummy augue nec pede.
            Pellentesque ut nulla. Donec at libero. Pellentesque at nisl ac nisi fermentum viverra.
            Praesent odio. Phasellus tincidunt diam ut ipsum. Donec eget est.
          </p>
          <p>Lorem makes use of a variety of open source projects including:</p>
          <ul>
            <li>https://github.com/russross/blackfriday</li>
            <li>https://github.com/russross/blackfriday</li>
            <li>https://github.com/russross/blackfriday</li>
            <li>https://github.com/russross/blackfriday</li>
            <li>https://github.com/russross/blackfriday</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean et est a dui semper
            facilisis. Pellentesque placerat elit a nunc. Nullam tortor odio, rutrum quis, egestas
            ut, posuere sed, felis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean et est a dui semper
            facilisis. Pellentesque placerat elit a nunc. Nullam tortor odio, rutrum quis, egestas
            ut, posuere sed, felis.
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
