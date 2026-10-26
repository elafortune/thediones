import Link from "next/link";
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
            <h4>Navigation</h4>
            <ul>
              <li>
                <Link href="/#top">Bienvenue</Link>
              </li>
              <li>
                <Link href="/#histoire">La Maison</Link>
              </li>
              <li>
                <Link href="/#seances">Nos accompagnements</Link>
              </li>
              <li>
                <Link href="/blog" transitionTypes={["nav-forward"]}>
                  Le Journal
                </Link>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/the.diones/?hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Liens utiles</h4>
            <ul>
              <li>
                <Link href="/reservation">Prendre rendez-vous</Link>
              </li>
              <li>
                <Link href="/#faq">FAQ</Link>
              </li>
              <li>
                <a href="#">Mentions légales</a>
              </li>
              <li>
                <a href="#">Politique de confidentialité</a>
              </li>
              <li>
                <a href="#">CGV</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Réseaux sociaux</h4>
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
          <span>© 2026 The Dione&apos;s. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
}
