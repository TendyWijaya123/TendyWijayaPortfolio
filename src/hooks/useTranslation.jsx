import { useContext } from "react";
import LanguageProvider, { LanguageContext } from "../contexts/LanguageContext";
import lang from "../lang/lang";

const useTranslation = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const t = (key) => {
    return lang[language][key];
  };
  return { language, t, changeLanguage };
};

export default useTranslation;
