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
    aboutBeStackList: ['Node.js with express', 'ASP.NET Core 2.0', 'Graphql'],
    cookieConsentBtn: 'Accept',
    cookieConsentText:
      'This site uses cookies. By browsing the site, you consent to their use and consent to the storage of personal data.',
    cookieConsentMore: 'More information',
    privacyHeading: 'Personal data protection principles',
    privacyWhoHeading: 'Who are we?',
    privacyWhoCont1:
      'We are happy you have visited our web pages. Our web page address is: {0}. We take  personal data protection seriously. It is important to us that your personal data are secured.',
    privacyWhoCont2:
      'All personal data collected when you visit our web pages are processed in accordance with Act No. 18/2018 Coll. (hereinafter referred as “personal data protection act”). By consensual filling in your personal data you give us permission to process them in accordance with the personal data protection act.',
    privacyDataStoreHeading: 'Which data are stored?',
    privacyDataStoreContent:
      'During your visit to our site, we record the IP address assigned to you by your Internet service provider, from which sites you visited our site, how long you were on our site, which specific subpages you are viewing, and so on. This information is considered to be personal, as it is your online identifier, and we treat this information with increased care.',
    privacyCookiesHeading: 'Cookies',
    privacyCookiesContent: `We use cookies for finding out the preferences of visitors on the web pages, in order to know how to adjust our offer and tailor it to a specific visitor’s needs. Cookies can be used for finding out whether you have already at some point accessed our web page from your PC. Cookies are text files stored by your Internet browser to the disc in your PC. If you do not wish to store the cookies, you can deactivate them in your Internet browser.`,
    privacySafeHeading: 'You are safe',
    privacySafeContent:
      'The security of your personal data is a priority to us. We have implemented several security systems for data protection. By improving technologies, we improve these security systems.',
    privacyRightsHeading: 'Your rights',
    privacyRightsContent1:
      'With regard to the protection of your personal data, you have extended rights:',
    privacyRightsContent2:
      'If you wish to apply for any of these rights, please send us an e-mail to frantisekpobocek@gmail.com',
    privacyRightsList: [
      'You have the right to ask us to delete your personal information, which we process if your registration is no longer required (it no longer has the purpose of processing). In this case, we will delete or anonymize all of your personal data that we have from the databases we operate. We will do so within 30 working days upon receiving your request.',
      'If you change anything and your personal information is no longer up to date, you have the right to ask us to correct the incorrect personal data we process.',
      'You have the right to limit the purpose of processing your personal data or their scope.',
      'You have the right to ask us to access your personal data we are processing. And we will provide you info within 30 working days which process data we are processing.',
      'If you want to take your personal information from us and transfer it to another entity, the information we have about you we will provide you in a structured, commonly used and machine readable format within 30 days.',
      'You have the right to withdraw consent to the processing of your personal data. Once we receive your appeal, we will not process your personal information further. Revocation of your consent does not affect the lawfulness of the processing we performed prior it was revoked.',
      'You have the right to file a complaint about the illegal processing of personal data. You may refer your complaint to us at any time, or you may file it with the Office of Personal Data Protection of the Slovak Republic.'
    ],
    privacyThirdPartyHeading: 'Third party references',
    privacyThirdPartyContent:
      'We do not sell, trade, or otherwise disclose your personal information to third parties. In our opinion, this is not fair and your personal information is the most sensitive thing you can give us. We do not make your personal information available to third parties other than Google Analytics of the Google Company.',
    privacyValid: `This policy of personal data protection principles enters in force from May 25, 2018`
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
    aboutBeStackList: ['Node.js s express', 'ASP.NET Core 2.0', 'Graphql'],
    cookieConsentBtn: 'Súhlasím',
    cookieConsentText:
      'Tento web používa súbory cookies. Prehliadaním webu vyjadrujete súhlas s ich používaním a súhlas s uchovávaním osobných údajov.',
    cookieConsentMore: 'Viac informácií',
    privacyHeading: 'Zásady ochrany osobných údajov',
    privacyWhoHeading: 'Kto sme?',
    privacyWhoCont1: `Prevádzkovateľom je Ing. František Poboček - Applance, IČO: 1124165306, zapísaný v Živnostenskom registri Okresného úradu Galanta. Ste na mojej osobnej stránke {0}`,
    privacyWhoCont2: `Dbáme na to, aby sme Vaše osobné údaje spracúvali v súlade s príslušnými právnymi predpismi (najmä Zákon o ochrane osobných údajov a Nariadenie o ochrane osobných údajov
    tzv. GDPR) a týmito informáciami. Podľa zákona sa za spracovanie osobných údajov považuje aj to ak osobné údaje máme k dispozícii, aj keď s nimi ďalej nijako nenakladáme.`,
    privacyDataStoreHeading: 'Aké údaje teda uchovávame?',
    privacyCookiesHeading: 'Cookies',
    privacyDataStoreContent: `Počas vašej návštevy našich stránok zaznamenávame IP adresu, ktorú vám pridelil váš poskytovateľ internetu, z akých stránok ste navštívili našu stránku, ako dlho ste na našej stránke, ktoré konkrétne podstránky si prezeráte a pod. Tieto informácie sú považované za osobný údaj, keďže ide o Váš online identifikátor, a preto s týmto údajom nakladáme so zvýšenou starostlivosťou.`,
    privacyCookiesContent: `Používame cookies k tomu, aby sme zistili preferencie navštevníkov web stránok a vedeli na základe toho prispôsobiť našu ponuku na mieru konkrétnemu návštevníkovi. Cookies sa môžu používať k tomu, aby sme zistili, či už ste naše stránky z vášho počítača niekedy navštívili.Cookies sú textové súbory, ktoré uloží váš internetový prehliadač na váš disk
    v počítači. Ak si neprajete cookies ukladať, môžete ich deaktivovať vo vašom internetovom prehliadači.`,
    privacySafeHeading: 'Ste v bezpečí',
    privacySafeContent: `Ste v bezpečí Je pre nás prvoradé, aby vaše osobné údaje boli v bezpečí. Implementovali sme rôzne bezpečnostné systémy na ochranu údajov. S vylepšovaním technológií vylepšujeme aj tieto bezpečnostné systémy.`,
    privacyRightsHeading: 'Vaše práva',
    privacyRightsContent1: 'V súvislosti s ochranou vašich osobných údajov máte široké práva:',
    privacyRightsContent2:
      'Pokiaľ si chcete ktorékoľvek z týchto práv uplatniť, pošlite nám, prosím, e-mail na frantisekpobocek@gmail.com',
    privacyRightsList: [
      'Máte právo požiadať nás o vymazanie vašich osobných údajov, ktoré spracúvame ak už nie je potrebná ich evidencia (netrvá už účel spracovania). V tomto prípade vymažeme alebo anonymizujeme všetky Vaše osobné údaje, ktorými disponujeme z databáz, ktoré prevádzkujeme. Urobíme tak do 30 pracovných dní od doručenia vašej žiadosti.',
      'Ak sa u Vás niečo zmení a vaše osobné údaje už nie sú aktuálne, máte právo požiadať nás o opravu nesprávnych osobných údajov, ktoré spracúvame.',
      'Máte právo obmedziť účel spracovania vašich osobných údajov alebo ich rozsah.',
      'Máte právo požiadať nás o prístup k Vašim osobným údajom, ktoré spracúvame. A my Vám v lehote 30 pracovných dní doložíme, aké Vaše údaje spracovávame.',
      'Ak chcete od nás Vaše osobné údaje vziať a preniesť ich k inému subjektu, údaje, ktoré o vás máme Vám poskytneme v štruktúrovanom, bežne používanom a strojovo čitateľnom formáte do 30 dní.',
      'Máte právo odvolať súhlas so spracúvaním vašich osobných údajov. Po doručení odvolania nebudeme Vaše osobné údaje ďalej spracúvať. Odvolanie Vášho súhlasu nemá vplyv na zákonnosť spracúvania, ktoré sme vykonávali pred jeho odvolaním.',
      'Máte právo podať sťažnosť na nezákonné spracúvanie osobných údajov. S vašou sťažnosťou sa môžete kedykoľvek obrátiť na nás, alebo ju môžete podať na Úrad na ochranu osobných údajov Slovenskej republiky.'
    ],
    privacyThirdPartyHeading: 'Neposkytujeme Vaše údaje tretím stranám',
    privacyThirdPartyContent: `Nepredávame, neobchodujeme ani žiadnym iným spôsobom neposkytujeme vaše osobné údaje tretím stranám. Podľa nás to nie je fér a zároveň vaše osobné údaje sú to
    najcitlivejšie, čo nám môžete poskytnúť. Vaše osobné údaje nesprístupňujeme tretím stranám iným ako Google Analytics od spoločnosti Google. Odovzdanie vašich osobných údajov štátnym organizáciám je len na základe zákona alebo právoplatných úradných či súdnych rozhodnutí v súlade s právnymi predpismi Slovenskej republiky.`,
    privacyValid: `Tieto informácie o spracúvaní a ochrane osobných údajov sú platné od 25.5.2018.`
  }
});

export default localization;
