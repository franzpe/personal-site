import React from 'react';
import history from '_utils/history';
import { withRouter } from 'react-router';

import classes from './ProjectsListItem.module.scss';
import LinkBtn from '../common/buttons/LinkBtn';

function ProjectsListItem({ match, project }) {
  function handleClick(e) {
    history.push(match.path + '/' + project.slug);
  }

  return (
    <li className={classes.item}>
      <LinkBtn className={classes.link} onClick={handleClick}>
        <img src={project.images[0].src} alt={project.name} className={classes.img} />
      </LinkBtn>
    </li>
  );
}

export default withRouter(ProjectsListItem);
