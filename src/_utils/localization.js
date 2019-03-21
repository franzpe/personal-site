import LocalizedStrings from 'react-localization';

export const availableLangs = {
  en: 'en',
  sk: 'sk'
};

let localization = new LocalizedStrings({
  en: {
    homeHeading: 'Fullstack Web Developer specialized in React',
    about: 'About',
    aboutSubtitle: 'You can find me on',
    aboutp1: `I'm fullstack web developer but I mainly focus on the front end side of the web
    development building modern interactive user interfaces with ReactJS. I worked in the IT
    corporate industry for few years but then I had realised I want to have more freedom in
    terms of choosing my own technology stack and to have a closer relationship with my
    customers so I could design a personalized product just for them. Than I became a
    freelencer where I've found my real passion, which is developing modern web
    applications.`,
    aboutp3: 'These are certifications I obtained while working at the corporate:',
    aboutp4: 'Other certifications:',
    aboutp5: `I provide consultancy services for web development in particular for React developed
    apps as well. So for any business inquiry feel free to contact me on my email.`,
    aboutFeStack: 'My main stack that I use for frontend development every day is:',
    aboutFeStackList: [
      'React',
      'Redux / Apollo',
      'HTML5',
      'CSS3 / SASS / JSS',
      'Javascript (ES6/ES7)',
      'Typescript (using for bigger applications to provide typesafety)'
    ],
    aboutBeStack: `For creation of API's I use:`,
    aboutBeStackList: ['Node.js with express', 'ASP.NET Core 2.0', 'Graphql']
  },
  sk: {
    homeHeading: 'Fullstack vývojar webových aplikácií so zameraním na React',
    about: 'O mne',
    aboutSubtitle: 'Môžete ma nájsť na:',
    aboutp1: `Som fullstack vývojár webových aplikácií šitých na mieru, zamieravajúci sa hlavne na frontendovú časť pri vývoji, tvorbou moderných a interaktívnych užívateľských rozhraní s vyžitím knižnice ReactJS. V minulosti som pracoval v korporátnej sfére na .Net vývoji, kde som si uvedomi, že chcem mať viacej voľnosti ohľadom voľby technológií pri vývoj a bližší kontakt so zákazníkmi aby som im vedel navrhnúť a vytvoriť produkt na mieru len pre nich. Tak som sa stal freelancerom, kde som našiel moju pravú vášeň pre tvorbu moderných webových aplikácií.`,
    aboutp3:
      'Certifikácie, ktoré som získal počas práce v korporáte, kde som sa venoval .Net vývoju:',
    aboutp4: 'Iné certifikácie:',
    aboutp5: `Poskytujem taktiež konzultačné služby, ohľadom vývoju webových aplikácií a vývoju pomocou ReactJS knižnice. Pre akékoľvek otázky ma neváhajte kontaktovať na nižšie spomínaný email.`,
    aboutFeStack: 'Môj hlavný technologický stack, ktorý využívam na každodenný vývoj frontendu:',
    aboutFeStackList: [
      'React',
      'Redux / Apollo',
      'HTML5',
      'CSS3 / SASS / JSS',
      'Javascript (ES6/ES7)',
      'Typescript (používam pri väčších aplikáciach na poskytnutie "type safety")'
    ],
    aboutBeStack: `Na tvorbu API's využívam:`,
    aboutBeStackList: ['Node.js s express', 'ASP.NET Core 2.0', 'Graphql']
  }
});

export default localization;
