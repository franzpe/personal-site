import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import history from './_utils/history';
import './index.scss';
import App from 'app/App';
import * as serviceWorker from './_utils/serviceWorker';
import AppContextProvider from './app/AppContextProvider';

const rootElement = document.getElementById('root');
const appTree = (
  <Router history={history}>
    <AppContextProvider>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </AppContextProvider>
  </Router>
);

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(appTree, rootElement);
} else {
  ReactDOM.render(appTree, rootElement);
}

serviceWorker.register();
