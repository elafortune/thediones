const defis = [
  {
    title: "On ne se parle plus, on se défend",
    desc: "Chaque discussion tourne au reproche, ou pire : à un mur de silence qui s'installe et dont on ne sait plus comment sortir.",
  },
  {
    title: "La confiance a pris un coup",
    desc: "Une infidélité, un mensonge, un secret financier découvert : la base du lien a été fragilisée, et c'est difficile à réparer seul·e.",
  },
  {
    title: "On vit comme des colocataires",
    desc: "Le quotidien a pris toute la place. La tendresse, le désir, l'attention à l'autre se sont effacés sans qu'on l'ait vraiment décidé.",
  },
  {
    title: "La charge n'est plus équitable",
    desc: "Tâches, enfants, belle-famille, argent : un sentiment d'injustice s'est installé, et personne n'ose vraiment le nommer.",
  },
  {
    title: "La vie a basculé, pas vous deux ensemble",
    desc: "Un enfant qui arrive ou qui part, une reconversion, un déménagement : les grandes étapes ont creusé un décalage entre vous.",
  },
  {
    title: "Réparer, ou se dire au revoir ?",
    desc: "Vous avez besoin d'un regard extérieur, neutre, pour savoir ce qui est encore possible — ou pour vous séparer plus sereinement.",
  },
];

export default function Defis() {
  return (
    <section className="defis-section" id="defis">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow" style={{ color: "var(--marigold)" }}>
            Vous vous reconnaissez peut-être
          </span>
          <h2>Ce que beaucoup de couples n&apos;osent pas dire</h2>
          <p className="lede defis-lede">
            Nous ne recevons pas que des couples en crise ouverte. Voici ce
            que nous entendons le plus souvent, sous des formes différentes —
            peut-être reconnaîtrez-vous une part de votre histoire.
          </p>
        </div>

        <div className="defis-grid">
          {defis.map((item) => (
            <div className="defis-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="defis-hint">Ça vous parle ? →</span>
            </div>
          ))}
        </div>

        <div className="defis-cta">
          <p>
            Aucune de ces situations n&apos;est une fatalité. C&apos;est
            précisément pour ça que nous existons.
          </p>
          <a className="btn btn-clay" href="#seances">
            Voir comment nous pouvons vous aider
          </a>
        </div>
      </div>
    </section>
  );
}
