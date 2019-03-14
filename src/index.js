import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import history from './_utils/history';
import './index.scss';
import App from 'app/App';
import * as serviceWorker from './_utils/serviceWorker';

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
serviceWorker.register();
