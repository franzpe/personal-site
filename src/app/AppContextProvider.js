import React, { Component, createContext } from 'react';
import Theme from '_utils/Theme';

export const AppContext = createContext({});

class AppContextProvider extends Component {
  constructor(props) {
    super(props);

    // To be able to render components when something in theme changes
    this.theme = new Theme(() => this.setState({}));
  }

  render() {
    const { children } = this.props;
    return <AppContext.Provider value={{ theme: this.theme }}>{children}</AppContext.Provider>;
  }
}

export default AppContextProvider;
