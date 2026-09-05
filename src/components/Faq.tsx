import {
  IconQuestion,
  IconClock,
  IconScreen,
  IconLock,
  IconCalendarCheck,
} from "./icons";

const faqs = [
  {
    question: "Comment savoir si un accompagnement est fait pour nous ?",
    answer:
      "Si vous ressentez de la distance, des conflits qui reviennent ou simplement l'envie de faire le point à deux, une première séance permet de clarifier ensemble votre demande et le cadre le plus adapté. Consulter n'est pas réservé aux périodes de crise.",
    Icon: IconQuestion,
  },
  {
    question: "Combien de temps dure un accompagnement ?",
    answer:
      "Cela dépend de votre situation : certains couples avancent en quelques séances, d'autres préfèrent un suivi plus long, à raison d'une séance toutes les deux à trois semaines. Nous en discutons ensemble dès le premier échange.",
    Icon: IconClock,
  },
  {
    question: "Les séances se passent-elles en cabinet ou en visio ?",
    answer:
      "Les deux formats sont possibles et ont la même valeur. Vous choisissez librement au moment de la réservation, et pouvez alterner selon vos disponibilités.",
    Icon: IconScreen,
  },
  {
    question: "Est-ce confidentiel ?",
    answer:
      "Oui. Nous sommes tenus au secret professionnel, comme l'ensemble des conseillers conjugaux et familiaux formés et certifiés.",
    Icon: IconLock,
  },
  {
    question: "Comment se déroule la première séance ?",
    answer:
      "Nous prenons le temps de comprendre votre demande, votre histoire et vos objectifs, pour définir ensemble le rythme et la formule les plus adaptés à votre situation.",
    Icon: IconCalendarCheck,
  },
];

export default function Faq() {
  return (
    <section className="faq-section" id="faq">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow" style={{ color: "var(--marigold)" }}>
            Questions fréquentes
          </span>
          <h2>Tout ce qu&apos;on nous demande avant de se lancer</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <details className="faq-item" key={item.question} open={index === 0}>
              <summary>
                <span className="faq-summary-text">
                  <item.Icon className="faq-icon" />
                  {item.question}
                </span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
