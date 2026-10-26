import {
  IconCalendarCheck,
  IconUserSolo,
  IconScreen,
  IconClock,
  IconQuestion,
} from "./icons";

const faqs = [
  {
    question: "Comment se déroule une première consultation ?",
    answer:
      "La première consultation dure 2 heures. Je prends le temps de comprendre votre demande, votre histoire et vos objectifs, pour définir ensemble le rythme et la formule les plus adaptés à votre situation.",
    Icon: IconCalendarCheck,
  },
  {
    question: "Puis-je consulter seul(e), même si ma difficulté concerne mon couple ?",
    answer:
      "Bien sûr. Il n'est pas nécessaire de venir à deux pour parler de son couple. La dynamique d'un couple peut évoluer sous l'effet des changements de l'un, de l'autre ou des deux partenaires.",
    Icon: IconUserSolo,
  },
  {
    question: "Les consultations ont-elles lieu en visioconférence ou en présentiel ?",
    answer:
      "Les consultations se déroulent généralement en visioconférence afin de vous permettre d'échanger depuis le lieu de votre choix, sans pression logistique et en toute confidentialité. Cependant, le présentiel reste possible sur demande et selon la distance.",
    Icon: IconScreen,
  },
  {
    question: "Comment fonctionne l'accompagnement de 10 heures ?",
    answer:
      "Cet accompagnement plus long vous permet de prendre le temps d'approfondir vos questionnements, à votre rythme sur une période de trois mois. Cette formule est proposée à l'issue d'une première consultation, après avoir échangé sur votre situation et vos attentes.",
    Icon: IconClock,
  },
  {
    question: "Comment prendre ou modifier un rendez-vous ?",
    answer:
      "Vous pouvez prendre rendez-vous directement depuis notre site, en consultant les créneaux disponibles et en choisissant celui qui vous convient. Le règlement s'effectue en ligne, au moment de la réservation.",
    Icon: IconQuestion,
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

        <div className="faq-contact">
          <p className="faq-contact-title">Une question ? Écrivez-nous.</p>
          <p className="faq-contact-desc">
            Vous n&apos;avez pas trouvé la réponse à votre question ? Vous
            souhaitez obtenir une précision avant de prendre rendez-vous ?
            Nous sommes à votre écoute.
          </p>
          <a
            className="btn btn-outline"
            href="https://www.instagram.com/the.diones/?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}
