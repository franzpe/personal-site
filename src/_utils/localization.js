import LocalizedStrings from 'react-localization';

export const availableLangs = {
  en: 'en',
  sk: 'sk'
};

let localization = new LocalizedStrings({
  en: {
    homeHeading: 'Fullstack Web Developer specialized in React'
  },
  sk: {
    homeHeading: 'Fullstack vývojar webových aplikácií so zameraním na React'
  }
});

export default localization;
