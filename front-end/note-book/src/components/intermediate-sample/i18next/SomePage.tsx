import React from "react";
import { useTranslation } from "react-i18next";

const SomePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("greeting")}</h1>
      <p>{t("welcome")}</p>
    </div>
  );
};

export default SomePage;
