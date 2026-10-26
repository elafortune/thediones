import Link from "next/link";

const cards = [
  {
    href: "#seances",
    className: "u-forest",
    tag: "Le cœur du cabinet",
    title: "Les séances",
    desc: "Conseil conjugal, familial et individuel en visioconférence. Consultation en présentiel possible. Réservation et paiement en ligne.",
  },
  {
    href: "/blog",
    className: "u-bark",
    tag: "À lire",
    title: "Le Journal",
    desc: "Nos articles sur la vie affective, relationnelle et sexuelle. La parentalité, la vie de couple et de famille, l'amitié ou encore les relations professionnelles, on parle des liens entre humains.",
    transitionTypes: ["nav-forward"],
  },
  {
    href: "#lettre",
    className: "u-marigold",
    tag: "Une fois par mois",
    title: "La Lettre des Dione's",
    desc: "Chaque mois une lettre pour partager une réflexion, une expérience personnelle ou une question autour du couple, de la famille et des relations humaines.",
  },
];

export default function Univers() {
  return (
    <section id="univers" style={{ background: "var(--cream-deep)" }}>
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow" style={{ color: "var(--forest)" }}>
            L&apos;univers
          </span>
          <h2>Tout ce que The Dione&apos;s vous propose</h2>
        </div>
        <div className="univers-grid">
          {cards.map((card) => (
            <Link
              key={card.title}
              className={`u-card ${card.className}`}
              href={card.href}
              transitionTypes={card.transitionTypes}
            >
              <div>
                <span className="u-tag">{card.tag}</span>
                <h3 style={{ marginTop: 10 }}>{card.title}</h3>
              </div>
              <p>{card.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
