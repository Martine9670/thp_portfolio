import useTranslation from "../hooks/useTranslation";

export default function Contact({ theme }) {
  const { t } = useTranslation();

  return (
    <div className={`page ${theme}`}>
      <p>{t("contact.intro")}</p>

      <form>
        <input type="text" placeholder={t("contact.placeholderSubject")} />
        <textarea placeholder={t("contact.placeholderMessage")}></textarea>
        <button type="button">{t("contact.buttonSend")}</button>
      </form>
    </div>
  );
}
