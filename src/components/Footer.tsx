import Link from "next/link";
import NewsletterForm from "./NewsletterForm";
import { IconInstagram } from "./icons";

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
                <Link href="/#seances">Les séances</Link>
              </li>
              <li>
                <Link href="/blog" transitionTypes={["nav-forward"]}>
                  Le Journal
                </Link>
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
                <Link href="/#seances">Réserver une séance</Link>
              </li>
              <li>
                <Link href="/#faq">Foire aux questions</Link>
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
                <a
                  className="foot-social-link"
                  href="https://www.instagram.com/the.diones/?hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconInstagram className="foot-social-icon" />
                  Instagram
                </a>
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
