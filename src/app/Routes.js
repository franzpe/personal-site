import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import(/* webpackChunkName: "Home" */ 'home'));
const About = lazy(() => import(/* webpackChunkName: "About" */ 'about'));
const Projects = lazy(() => import(/* webpackChunkName: "Projects" */ 'projects'));
const NotFound = lazy(() => import(/* webpackChunkName: "NotFound" */ './NotFound'));
const Policy = lazy(() => import(/* webpackChunkName: "Policy" */ 'policy'));

function Routes() {
  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/policy" exact={true} component={Policy} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
