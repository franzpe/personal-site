import React, { Component, createContext } from 'react';

import classes from './App.module.scss';
import Routes from './Routes';
import Theme from '_utils/Theme';
import Footer from './Footer';

export const AppContext = createContext({ theme: new Theme() });

class App extends Component {
  static contextType = AppContext;

  componentDidMount = () => {
    const { theme } = this.context;
    theme.init();
  };

  render() {
    return (
      <AppContext.Provider>
        <div className={classes.container}>
          <div className={classes.content}>
            <Routes />
          </div>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
