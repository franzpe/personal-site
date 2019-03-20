import React, { Component, Fragment } from 'react';
import ReactGA from 'react-ga';

import Head from './Head';
import classes from './App.module.scss';
import Routes from './Routes';
import Footer from './Footer';
import Header from './Header';
import { AppContext } from './AppContextProvider';
import history from '../_utils/history';

class App extends Component {
  static contextType = AppContext;

  componentDidMount = () => {
    this.setupGoogleAnalytics();
  };

  componentWillMount() {
    const { theme } = this.context;
    theme.init();
  }

  setupGoogleAnalytics = () => {
    ReactGA.initialize('UA-136592703-1');
    ReactGA.pageview(history.location.pathname + history.location.search);

    history.listen((location, action) => {
      ReactGA.pageview(location.pathname + location.search);
    });
  };

  render() {
    return (
      <Fragment>
        <Head />
        <div className={classes.container}>
          <Header />
          <div className={classes.content}>
            <Routes />
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default App;
