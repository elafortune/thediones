const offers = [
  {
    tag: "Individuel",
    name: "Séance individuelle",
    price: "70 €",
    unit: "/ 60 min",
    desc: "Pour travailler seul·e sur vos schémas relationnels.",
    reco: false,
  },
  {
    tag: "La plus demandée",
    name: "Séance de couple",
    price: "90 €",
    unit: "/ 75 min",
    desc: "Un espace à deux pour se retrouver et sortir des mêmes conflits.",
    reco: true,
  },
  {
    tag: "Familial",
    name: "Séance familiale",
    price: "120 €",
    unit: "/ 90 min",
    desc: "Pour apaiser et réorganiser les liens en famille.",
    reco: false,
  },
];

export default function Seances() {
  return (
    <section id="seances">
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
              <span className="price-amount">
                {offer.price} <sub>{offer.unit}</sub>
              </span>
              <p className="price-desc">{offer.desc}</p>
              <a className={offer.reco ? "btn btn-clay" : "btn btn-outline"} href="#">
                Réserver
              </a>
            </div>
          ))}
        </div>
        <p className="placeholder-note">
          Tarifs indicatifs — à confirmer avant mise en ligne.
        </p>
      </div>
    </section>
  );
}
