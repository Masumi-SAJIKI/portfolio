import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en_message from "resources/en/message.json";
import ja_message from "resources/ja/message.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "ja",
    returnEmptyString: false,
    debug: true,
    resources: {
      en: {
        translation: en_message,
      },
      ja: {
        translation: ja_message,
      },
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      transKeepBasicHtmlNodesFor: ["br", "strong", "i", "span"],
    },
  });

export default i18n;
