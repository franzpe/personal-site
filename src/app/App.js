import React, { Component, Fragment } from 'react';
import ReactGA from 'react-ga';
import CookieConsent from 'react-cookie-consent';
import { withCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

import classes from './App.module.scss';
import Routes from './Routes';
import Footer from './Footer';
import Header from './Header';
import { AppContext } from './AppContextProvider';
import history from '../_utils/history';
import localization from '../_utils/localization';

class App extends Component {
  static contextType = AppContext;

  componentDidMount = () => {
    const { cookies } = this.props;

    if (Boolean(cookies.get('cookies-consent'))) {
      this.setupGoogleAnalytics();
    }

    const { theme } = this.context;
    theme.init();
  };

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
        <div className={classes.container}>
          <Header />
          <div className={classes.content}>
            <Routes />
          </div>
          <Footer />
        </div>
        {process.env.NODE_ENV === 'production' && navigator.userAgent !== 'ReactSnap' && (
          <CookieConsent
            onAccept={this.setupGoogleAnalytics}
            location="bottom"
            buttonText={localization.cookieConsentBtn}
            cookieName="cookies-consent"
            containerClasses={classes.consent}
            expires={150}
          >
            {localization.cookieConsentText}
            &nbsp;&nbsp;&nbsp;
            <Link to="/policy" style={{ textDecoration: 'underline' }}>
              {localization.cookieConsentMore}
            </Link>
          </CookieConsent>
        )}
      </Fragment>
    );
  }
}

export default withCookies(App);
