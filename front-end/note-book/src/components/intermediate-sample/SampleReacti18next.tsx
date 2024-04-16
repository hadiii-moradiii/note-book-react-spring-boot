import React, { Suspense } from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";

import LanguageSwitcher from "./i18next/LanguageSwitcher";
import SomePage from "./i18next/SomePage";
import i18n from "./i18next/i18n";

const SampleReacti18next = () => {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <code>npm install i18next react-i18next</code>
        <br />
        <code>npm i i18next-localstorage-backend</code>
        <br />
        <code>npm i i18next-chained-backend</code>
        <br />
        <code>npm i i18next-http-backend </code>
        <code>{`<I18nextProvider i18n={i18n}>`}</code> <br />
        <LanguageSwitcher />
        <SomePage />
      </I18nextProvider>
    </>
  );
};

export default SampleReacti18next;
