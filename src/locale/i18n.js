import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import Backend from 'i18next-xhr-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

import {getApplicationLocalisation} from 'constants';

const resources = {
  en: {
    translation: getApplicationLocalisation('EN')
  },
  ru: {
    translation: getApplicationLocalisation('RU')
  }
};

i18n
  // .use(Backend)
  // // detect user language
  // .use(LanguageDetector)
  // // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    // fallbackLng: 'en',
    lng: "ru",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

export default i18n;
