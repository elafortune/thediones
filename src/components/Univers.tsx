import Link from "next/link";

const cards = [
  {
    href: "#seances",
    className: "u-forest",
    tag: "Le cœur du cabinet",
    title: "Les séances",
    desc: "Conseil conjugal, familial et individuel — en cabinet à Paris ou en visioconférence. Réservation et paiement en ligne.",
  },
  {
    href: "/blog",
    className: "u-bark",
    tag: "À lire",
    title: "Le Journal",
    desc: "Nos articles sur la vie de couple, la parentalité et les étapes qui traversent une famille.",
    transitionTypes: ["nav-forward"],
  },
  {
    href: "#lettre",
    className: "u-marigold",
    tag: "Une fois par mois",
    title: "La Lettre des Dione's",
    desc: "Un repère, un outil ou une question à se poser à deux, reçue directement par email.",
  },
  {
    href: "#",
    className: "u-clay",
    tag: "Bientôt disponible",
    title: "Le Guide du Couple",
    desc: "Un carnet à remplir à deux, pensé avec nous pour prolonger le travail fait en séance.",
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
