import React, { Component, createContext } from 'react';
import Theme from '_utils/Theme';
import localization, { availableLangs } from '../_utils/localization';

export const AppContext = createContext({});

class AppContextProvider extends Component {
  constructor(props) {
    super(props);

    // To be able to render components when something in theme changes
    this.theme = new Theme(() => this.setState({}));

    const lang = localStorage.getItem('lang');
    if (lang && lang !== availableLangs.en) {
      localization.setLanguage(availableLangs.sk);
    }

    this.state = {
      langToChange: lang === availableLangs.sk ? availableLangs.en : availableLangs.sk
    };
  }

  changeLanguage = lang => {
    localization.setLanguage(lang);
    localStorage.setItem('lang', lang);

    this.setState({
      langToChange: lang === availableLangs.sk ? availableLangs.en : availableLangs.sk
    });
  };

  render() {
    const { children } = this.props;
    const { langToChange } = this.state;

    return (
      <AppContext.Provider
        value={{ theme: this.theme, langToChange, changeLanguage: this.changeLanguage }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
