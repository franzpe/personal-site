import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import cs from 'classnames';
import Helmet from 'react-helmet';

import localization from '_utils/localization';
import { projects } from './ProjectsList';
import classes from './ProjectDetail.module.scss';
import postClasses from 'common/Post.module.scss';
import Link from '../common/Link';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ProjectDetail({ match }) {
  const project = projects.find(p => p.slug === match.params.slug);

  if (project) {
    const { name, personal, images, descText, Description, url } = project;

    return (
      <main className={cs(postClasses.post, classes.resetMarginAndPadding)}>
        <Helmet
          meta={[
            { property: 'og:title', content: 'Frantisek Pobocek - ' + name },
            {
              property: 'og:url',
              content: 'https://frantisekpobocek.com' + window.location.pathname
            },
            { property: 'og:image', content: 'https://frantisekpobocek.com' + images[0].src },
            { property: 'og:description', content: descText }
          ]}
        >
          <title>Frantisek Pobocek - {name}</title>
        </Helmet>
        <article>
          <h2 className={postClasses.title}>{name}</h2>
          <div className={postClasses.content}>
            {personal && <h5>{localization.personal}</h5>}
            <Carousel
              autoPlay={true}
              showIndicators={true}
              emulateTouch={true}
              dynamicHeight={true}
              className={classes.carousel}
            >
              {images.map(img => (
                <div key={img.name}>
                  <img src={img.src} alt="Dashboard" />
                </div>
              ))}
            </Carousel>
            <Link href={url} className={classes.link}>
              {url.replace(new RegExp('^(http|https)://'), 'www.')}
            </Link>
            <Description />
          </div>
        </article>
        <hr />
      </main>
    );
  } else {
    return <div>Project Not Found</div>;
  }
}
