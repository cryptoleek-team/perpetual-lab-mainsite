import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationCH from './locales/ch/translation.json';

const resources = {
  English: {
    translation: translationEN
  },
  中文: {
    translation: translationCH
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'English',

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;