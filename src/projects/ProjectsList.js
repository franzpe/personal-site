import React, { Fragment } from 'react';

import classes from './ProjectsList.module.scss';
import ProjectsListItem from './ProjectsListItem';
import localization from '_utils/localization';

import bezhistaminovo1 from '_assets/images/bezhistaminovo1-min.png';
import bezhistaminovo2 from '_assets/images/bezhistaminovo2-min.png';

export const projects = [
  {
    name: 'Bezhistaminovo',
    personal: true,
    slug: 'bezhistaminovo',
    url: 'https://bezhistaminovo.sk',
    images: [
      { name: 'Dashboard', src: bezhistaminovo1 },
      { name: 'Recipe details', src: bezhistaminovo2 }
    ],
    Description: () => <p>{localization.bezhistaminovo}</p>
  }
];

function ProjectsList() {
  return (
    <ul className={classes.list}>
      {projects.map(project => (
        <ProjectsListItem key={project.name} project={project} />
      ))}
    </ul>
  );
}

export default ProjectsList;
