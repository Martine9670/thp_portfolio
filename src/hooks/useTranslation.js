import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations";

export default function useTranslation() {
  const { language } = useContext(LanguageContext);

  const t = (key) => {
    // exemple : key = "nav.home"
    const keys = key.split(".");
    let value = translations[language];

    keys.forEach(k => {
      if (value) value = value[k];
    });

    return value || key; // retourne key si pas trouvé
  };

  return { t };
}
