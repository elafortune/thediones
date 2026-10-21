import { IconQuestion, IconClock } from "./icons";
import CalendlyButton from "./CalendlyButton";

const offers = [
  {
    name: "La consultation ponctuelle",
    duration: "2 h",
    desc: "Un temps pour déposer et faire le point. Une situation particulière vous questionne et vous ressentez le besoin d'en parler sans jugement pour prendre du recul ?",
    buttonLabel: "Prendre rendez-vous",
    primary: true,
    Icon: IconQuestion,
  },
  {
    name: "L'accompagnement",
    duration: "10 h",
    desc: "Du temps pour approfondir, à son rythme. Les heures sont réparties librement selon vos besoins et disponibilités, sur une période de 3 mois. Formule accessible uniquement à l'issue d'une première consultation.",
    buttonLabel: "Prendre mon premier rendez-vous",
    Icon: IconClock,
  },
];

export default function Seances() {
  return (
    <section id="seances">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow" style={{ color: "var(--forest)" }}>
            Nos accompagnements
          </span>
          <h2>Des accompagnements pensés pour vos besoins spécifiques</h2>
          <p className="lede" style={{ margin: "0 auto" }}>
            Chaque parcours est personnalisé dès le premier échange.
          </p>
        </div>
        <div className="pricing-grid">
          {offers.map((offer) => (
            <div key={offer.name} className="price-card">
              <offer.Icon className="price-icon" />
              <span className="price-name">{offer.name}</span>
              <span className="price-amount">{offer.duration}</span>
              <p className="price-desc">{offer.desc}</p>
              <CalendlyButton className={offer.primary ? "btn btn-clay" : "btn btn-outline"}>
                {offer.buttonLabel}
              </CalendlyButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
