import Script from "next/script";
import { IconUserSolo, IconUserPair, IconFamily } from "./icons";
import CalendlyButton from "./CalendlyButton";

const offers = [
  {
    tag: "Individuel",
    name: "Séance individuelle",
    duration: "60 min",
    desc: "Pour travailler seul·e sur vos schémas relationnels.",
    reco: false,
    Icon: IconUserSolo,
  },
  {
    tag: "La plus demandée",
    name: "Séance de couple",
    duration: "75 min",
    desc: "Un espace à deux pour se retrouver et sortir des mêmes conflits.",
    reco: true,
    Icon: IconUserPair,
  },
  {
    tag: "Familial",
    name: "Séance familiale",
    duration: "90 min",
    desc: "Pour apaiser et réorganiser les liens en famille.",
    reco: false,
    Icon: IconFamily,
  },
];

export default function Seances() {
  return (
    <section id="seances">
      <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow" style={{ color: "var(--forest)" }}>
            Les séances
          </span>
          <h2>Des accompagnements pensés pour votre situation</h2>
          <p className="lede" style={{ margin: "0 auto" }}>
            Chaque parcours est personnalisé dès le premier échange.
          </p>
        </div>
        <div className="pricing-grid">
          {offers.map((offer) => (
            <div key={offer.name} className={`price-card ${offer.reco ? "reco" : ""}`}>
              <offer.Icon className="price-icon" />
              <span
                className="price-tag"
                style={
                  offer.reco
                    ? { background: "var(--clay)", color: "#fff5e9" }
                    : undefined
                }
              >
                {offer.tag}
              </span>
              <span className="price-name">{offer.name}</span>
              <span className="price-amount">{offer.duration}</span>
              <p className="price-desc">{offer.desc}</p>
              <CalendlyButton className={offer.reco ? "btn btn-clay" : "btn btn-outline"}>
                Réserver
              </CalendlyButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
