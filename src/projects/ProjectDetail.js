import React from 'react';
import { projects } from './ProjectsList';

import classes from './ProjectDetail.module.scss';
import postClasses from 'common/Post.module.scss';

export default function ProjectDetail({ match }) {
  const project = projects.find(p => p.slug === match.params.slug);

  if (project) {
    const { name, images, description } = project;
    return (
      <main className={postClasses.post}>
        <article>
          <h2 className={postClasses.title}>{name}</h2>
          <div className={postClasses.content}>
            <p>{description}</p>
          </div>
        </article>
      </main>
    );
  } else {
    return <div>Project Not Found</div>;
  }
}
