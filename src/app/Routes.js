import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import(/* webpackChunkName: "Login" */ 'home'));
const About = lazy(() => import(/* webpackChunkName: "Login" */ 'about'));
const Projects = lazy(() => import(/* webpackChunkName: "Login" */ 'projects'));
const NotFound = lazy(() => import(/* webpackChunkName: "Login" */ './NotFound'));

function Routes() {
  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/posts" component={Projects} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
