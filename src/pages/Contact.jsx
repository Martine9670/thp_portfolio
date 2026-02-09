import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Contact({ theme }) {
  const { language } = useContext(LanguageContext);

  const text = {
    fr: {
      intro: "Vous souhaitez discuter avec moi, que ce soit pour me proposer un poste ou pour passer le temps ? Remplissez le formulaire ci-dessous.",
      subject: "Sujet",
      message: "Message",
      send: "Envoyer"
    },
    en: {
      intro: "Do you want to talk with me, whether to offer a job or just to chat? Fill out the form below.",
      subject: "Subject",
      message: "Message",
      send: "Send"
    }
  };

  return (
    <div className={`page ${theme}`}>
      <p>{text[language].intro}</p>

      <form>
        <input type="text" placeholder={text[language].subject} />
        <textarea placeholder={text[language].message}></textarea>
        <button type="button">{text[language].send}</button>
      </form>
    </div>
  );
}
