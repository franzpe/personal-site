import React from 'react';

import classes from './ProjectsList.module.scss';
import ProjectsListItem from './ProjectsListItem';

import bezhistaminovo1 from '_assets/images/bezhistaminovo1-min.png';
import bezhistaminovo2 from '_assets/images/bezhistaminovo2-min.png';

export const projects = [
  {
    name: 'Bezhistaminovo',
    slug: 'bezhistaminovo',
    images: [bezhistaminovo1, bezhistaminovo2],
    description: '1'
  },
  {
    name: '2',
    slug: 'bezhistaminovo',
    images: [bezhistaminovo1, bezhistaminovo2],
    description: '2'
  },
  {
    name: '3',
    slug: 'bezhistaminovo',
    images: [bezhistaminovo1, bezhistaminovo2],
    description: '3'
  },
  {
    name: '4',
    slug: 'bezhistaminovo',
    images: [bezhistaminovo1, bezhistaminovo2],
    description: '4'
  },
  {
    name: '5',
    slug: 'bezhistaminovo',
    images: [bezhistaminovo1, bezhistaminovo2],
    description: '5'
  },
  {
    name: '6',
    slug: 'bezhistaminovo',
    images: [bezhistaminovo1, bezhistaminovo2],
    description: '6'
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
