import {
  IconSilence,
  IconCrackedHeart,
  IconSeparateDoors,
  IconUnevenScale,
  IconWindingPath,
  IconForkPath,
} from "./icons";

const defis = [
  {
    title: "Vous avez du mal à trouver votre place dans vos relations.",
    desc: "Vous vous interrogez sur la place que vous occupez auprès de l'autre (des autres), sur vos besoins, vos limites et sur la manière de les faire exister dans vos relations.",
    Icon: IconSilence,
  },
  {
    title: "Vous vous aimez, mais vous ne vous comprenez plus.",
    desc: "Les discussions tournent en rond, les malentendus s'accumulent ou le silence s'est installé. Vous avez le sentiment de ne plus réussir à vous entendre.",
    Icon: IconCrackedHeart,
  },
  {
    title: "Vous êtes face à un choix important.",
    desc: "Rester, partir, vous engager, prendre de la distance, poser des limites… Vous souhaitez prendre le temps de réfléchir aux différentes possibilités avant de faire votre choix.",
    Icon: IconSeparateDoors,
  },
  {
    title: "Vous vous interrogez sur vos relations familiales.",
    desc: "Des attentes différentes, des incompréhensions, des tensions ou des non-dits… Vous souhaitez prendre du recul sur certaines relations et réfléchir à la place que vous souhaitez leur donner dans votre vie.",
    Icon: IconUnevenScale,
  },
  {
    title: "Vous avez l'impression de revivre les mêmes histoires.",
    desc: "Dans vos relations amoureuses, familiales ou amicales, certaines situations semblent se répéter. Vous aimeriez prendre du recul sur ces expériences et comprendre ce qui s'y joue ou se rejoue.",
    Icon: IconWindingPath,
  },
  {
    title: "Vous avez besoin d'un espace pour faire le point.",
    desc: "Vous ne traversez pas nécessairement une crise et n'avez pas forcément de grandes décisions à prendre. Vous souhaitez simplement parler de vos relations, partager vos questionnements et prendre du recul...",
    Icon: IconForkPath,
  },
];

export default function Defis() {
  return (
    <section className="defis-section" id="defis">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow" style={{ color: "#e0a81f" }}>
            Vous vous reconnaissez peut-être
          </span>
          <h2>Ce que beaucoup n&apos;osent pas dire</h2>
          <p className="lede defis-lede">
            Nous ne recevons pas que des couples en crise ouverte. Voici ce
            que nous entendons le plus souvent, sous des formes différentes,
            peut-être reconnaîtrez-vous une part de votre histoire.
          </p>
        </div>

        <div className="defis-grid">
          {defis.map((item) => (
            <div className="defis-card" key={item.title}>
              <item.Icon className="defis-icon" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="defis-cta">
          <p>
            Pas besoin d&apos;attendre que tout déborde pour prendre le temps
            d&apos;en parler.
          </p>
          <a className="btn btn-clay" href="#seances">
            Découvrir nos accompagnements
          </a>
        </div>
      </div>
    </section>
  );
}
