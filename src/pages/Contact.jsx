export default function Contact({ theme }) {
  return (
    <div className={`page ${theme}`}>
      <p>
        Vous souhaitez discuter avec moi, que ce soit pour me proposer un poste 
        ou pour passer le temps ? Remplissez le formulaire ci-dessous.
      </p>

      <form>
        <input type="text" placeholder="Sujet" />
        <textarea placeholder="Message"></textarea>
        <button type="button">Envoyer</button>
      </form>
    </div>
  );
}
