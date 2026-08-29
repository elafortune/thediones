const quotes = [
  {
    text: "« Un cabinet qui respire la vraie vie de couple, pas la théorie. On s'est sentis compris tout de suite. »",
    name: "Exemple de témoignage — Camille & Yann",
  },
  {
    text: "« La Lettre à elle seule vaut le détour. On la lit à deux, ça devient un rituel. »",
    name: "Exemple de témoignage — Nadia & Karim",
  },
  {
    text: "« Le duo a su parler à chacun de nous, sans prendre parti. On en ressort plus proches. »",
    name: "Exemple de témoignage — Léa & Thomas",
  },
];

export default function Temoignages() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow" style={{ color: "var(--forest)" }}>
            La communauté
          </span>
          <h2>Ce qu&apos;ils en disent</h2>
        </div>
        <div className="proof-row">
          {quotes.map((quote) => (
            <div key={quote.name} className="proof-card">
              <p className="proof-quote">{quote.text}</p>
              <span className="proof-name">{quote.name}</span>
            </div>
          ))}
        </div>
        <p className="placeholder-note">
          Témoignages d&apos;exemple — à remplacer par vos avis clients réels
          avant mise en ligne.
        </p>
      </div>
    </section>
  );
}
