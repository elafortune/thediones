import Image from "next/image";

export default function Histoire() {
  return (
    <section id="histoire">
      <div className="wrap histoire">
        <div className="histoire-frame">
          <Image
            src="/images/the-diones-couple.jpg"
            alt="Fa Dione et Kader"
            fill
            sizes="(max-width: 860px) 100vw, 45vw"
            style={{ objectFit: "cover", objectPosition: "85% 50%" }}
          />
        </div>
        <div>
          <span className="eyebrow" style={{ color: "var(--forest)" }}>
            Notre histoire
          </span>
          <h2 style={{ marginTop: 14 }}>Faisons connaissance</h2>
          <p className="pull">
            « De mon expérience de vie est née une conviction, devenue au fil
            du temps une vocation. »
          </p>
          <p className="lede" style={{ maxWidth: "56ch" }}>
            J&apos;ai choisi de lui donner un cadre professionnel en me
            formant au conseil conjugal et familial et en créant la Maison
            Dione.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: "56ch" }}>
            <p style={{ fontWeight: 600, fontSize: "1.1rem" }}>
              Je suis Fa Dione.
            </p>
            <p>
              J&apos;entretiens avec la vie familiale et conjugale une
              relation toute particulière. Mon parcours m&apos;en a fait
              connaître les difficultés et les contradictions, mais aussi les
              joies et les possibilités de reconstruction.
            </p>
            <p>
              Il y a plus de vingt ans, Kader et moi avons échangé pour la
              première fois dans des circonstances inattendues : nous
              tentions de réconcilier deux amis qui venaient de rompre leurs
              fiançailles.
            </p>
            <p>
              De cette première conversation est née une estime réciproque,
              puis une amitié, rapidement devenue une histoire d&apos;amour.
            </p>
            <p>
              Aujourd&apos;hui, nous partageons une famille de trois enfants
              et collaborons au sein de la Maison Dione. Kader peut notamment
              se joindre à certaines consultations de couple pour des
              échanges à quatre, lorsque cela est souhaité et pertinent.
            </p>
            <p>
              Mon parcours m&apos;a appris combien les relations familiales,
              conjugales ou sociales peuvent nous fragiliser, mais aussi nous
              soutenir et nous aider à nous reconstruire. Il m&apos;a surtout
              fait mesurer combien il peut être difficile, même lorsqu&apos;on
              est entouré, de trouver quelqu&apos;un à qui se confier
              librement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
