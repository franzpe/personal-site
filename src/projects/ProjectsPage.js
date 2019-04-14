import React from 'react';
import { Switch, Route } from 'react-router';

import classes from './ProjectsPage.module.scss';
import ProjectsList from './ProjectsList';
import ProjectDetail from './ProjectDetail';

export default function ProjectsPage(props) {
  return (
    <div className={classes.container}>
      <Switch>
        <Route exact={true} path={props.match.path + '/:slug'} component={ProjectDetail} />
        <Route component={ProjectsList} />
      </Switch>
    </div>
  );
}
