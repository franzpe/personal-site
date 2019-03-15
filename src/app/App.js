import React, { Component } from 'react';

import classes from './App.module.scss';
import Routes from './Routes';
import Footer from './Footer';
import Header from './Header';
import { AppContext } from './AppContextProvider';

class App extends Component {
  static contextType = AppContext;

  componentDidMount = () => {
    const { theme } = this.context;
    theme.init();
  };

  render() {
    return (
      <div className={classes.container}>
        <Header />
        <div className={classes.content}>
          <Routes />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
