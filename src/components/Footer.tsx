import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer id="lettre">
      <div className="wrap">
        <p className="foot-tagline italic">
          « Culture, famille, lifestyle, business : l&apos;univers The
          Dione&apos;s. »
        </p>
        <div className="foot-grid">
          <div>
            <h4>La Lettre des Dione&apos;s</h4>
            <NewsletterForm />
          </div>
          <div>
            <h4>L&apos;univers</h4>
            <ul>
              <li>
                <a href="#seances">Les séances</a>
              </li>
              <li>
                <a href="#">Le Journal</a>
              </li>
              <li>
                <a href="#">Le Guide du Couple</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Pratique</h4>
            <ul>
              <li>
                <a href="#">Réserver une séance</a>
              </li>
              <li>
                <a href="#">Nous trouver</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Suivez-nous</h4>
            <ul>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© The Dione&apos;s — Conseillers conjugaux et familiaux</span>
          <span>Mentions légales · Confidentialité</span>
        </div>
      </div>
    </footer>
  );
}
