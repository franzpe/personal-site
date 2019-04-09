import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import history from './_utils/history';
import './index.scss';
import App from 'app/App';
import * as serviceWorker from './_utils/serviceWorker';
import AppContextProvider from './app/AppContextProvider';

ReactDOM.render(
  <Router history={history}>
    <AppContextProvider>
      <CookiesProvider>
        <Switch>
          <Route component={App} />
        </Switch>
      </CookiesProvider>
    </AppContextProvider>
  </Router>,
  document.getElementById('root')
);
serviceWorker.unregister();
