import es from "../../assets/es.svg";
import ca from "../../assets/ca.svg";
import en from "../../assets/en-bis.svg";
import { useContext, useEffect, useState } from "react";
import { dataProvider } from "../../context/DataProvider";
import { useTranslation } from "react-i18next";

export function LangBtn({ lang }) {
  const languaje = lang;
  console.log();
  return <div className="lang-btn w-10 m-3">{<Flag lang={languaje} />}</div>;
}
const Flag = ({ lang }) => {
  const { i18n } = useTranslation();
  const { chosenLang, setChosenLang } = useContext(dataProvider);

  //cambio de estado del idioma elegido
  const handleChangeLang = (lang) => {
    setChosenLang(lang);
  };

  //Cambia idioma página
  useEffect(() => {
    i18n.changeLanguage(chosenLang);
  }, [chosenLang]);

  //Estilos de los botones
  if (lang === "es") {
    return (
      <img
        src={es}
        alt={lang}
        className={`button border-2 border-fondo hover:border-orange ${
          chosenLang === "es"
            ? "filter-none"
            : "transition duration-500filter brightness-75"
        }`}
        onClick={() => {
          handleChangeLang(lang);
        }}
        data-testid={lang}
      />
    );
  } else if (lang === "ca") {
    return (
      <img
        src={ca}
        alt={lang}
        className={`button border-2 border-fondo hover:border-orange ${
          chosenLang === "ca"
            ? "filter-none"
            : "transition duration-500filter brightness-75"
        }`}
        onClick={() => {
          handleChangeLang(lang);
        }}
        data-testid={lang}
      />
    );
  } else if (lang === "en") {
    return (
      <img
        src={en}
        alt={lang}
        className={`button border-2 border-fondo hover:border-orange ${
          chosenLang === "en"
            ? "filter-none"
            : "transition duration-500filter brightness-75"
        }`}
        onClick={() => {
          handleChangeLang(lang);
        }}
        data-testid={lang}
      />
    );
  }
};
