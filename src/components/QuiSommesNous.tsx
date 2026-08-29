const couple = [
  {
    name: "Madame Dione",
    role: "Conseillère conjugale & familiale",
    quote:
      "« J'aime avancer par étapes, en confiance, pour porter un autre regard sur ce qui semblait bloqué. »",
    photoLabel: "Photo Madame Dione",
  },
  {
    name: "Monsieur Dione",
    role: "Conseiller conjugal & familial",
    quote:
      "« Mon travail : remettre du mouvement là où tout semblait figé entre vous. »",
    photoLabel: "Photo Monsieur Dione",
  },
];

export default function QuiSommesNous() {
  return (
    <section style={{ background: "var(--cream-deep)" }}>
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow" style={{ color: "var(--forest)" }}>
            Qui sommes-nous
          </span>
          <h2>Deux regards, un même métier</h2>
        </div>
        <div className="couple-grid">
          {couple.map((person) => (
            <div key={person.name} className="couple-card">
              <div className="couple-portrait">{person.photoLabel}</div>
              <div>
                <h3>{person.name}</h3>
                <span className="couple-role">{person.role}</span>
                <p className="couple-quote">{person.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
