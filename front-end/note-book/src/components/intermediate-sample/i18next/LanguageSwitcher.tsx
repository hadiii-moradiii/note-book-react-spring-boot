// LanguageSwitcher.js
import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (language: string) => {
    console.log(language);
    console.log(i18n);
    i18n.changeLanguage(language, () => {
      console.log("lang", i18n.language);
      console.log("greeting", t("greeting"));
    });
  };

  return (
    <>
      <select
        onChange={(e) => handleChangeLanguage(e.target.value)}
        value={i18n.language}
      >
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="fa">Persian</option>
        <option value="fc">FC</option>
      </select>
    </>
  );
};

export default LanguageSwitcher;
