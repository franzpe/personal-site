import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import history from './_utils/history';
import './index.scss';
import App from 'app/App';
import * as serviceWorker from './_utils/serviceWorker';
import AppContextProvider from './app/AppContextProvider';

ReactDOM.render(
  <Router history={history}>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </Router>,
  document.getElementById('root')
);
serviceWorker.unregister();
