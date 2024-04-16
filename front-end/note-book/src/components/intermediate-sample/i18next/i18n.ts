
import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";
import translationFA from "./locales/fa/translation.json";
import translationFC from "./locales/fc/translation.json";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
const resources = {
  en: {
    translation: translationEN,
  },
  fa: {
    translation: translationFA,
  },
  fr: {
    translation: translationFR,
  },
  fc: {
    translation: translationFC,
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng:'en',
    resources: resources,
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

  // i18n.services.formatter.add('DATE_LONG', (value, lng, _options) => {
  //   return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime.DATE_HUGE)
  // });

export default i18n;


// export default resources;