import Image from "next/image";

export default function Histoire() {
  return (
    <section id="histoire">
      <div className="wrap histoire">
        <div className="histoire-frame">
          <Image
            src="/images/thediones-solo.jpeg"
            alt="Madame Dione, conseillère conjugale et familiale"
            fill
            sizes="(max-width: 860px) 100vw, 45vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <span className="eyebrow" style={{ color: "var(--forest)" }}>
            Notre histoire
          </span>
          <h2 style={{ marginTop: 14 }}>
            Aimer à deux, dans un monde qui va trop vite.
          </h2>
          <p className="pull">
            « Un couple qui dure aujourd&apos;hui n&apos;est pas un couple qui
            n&apos;a jamais douté. C&apos;est un couple qui a appris à se
            retrouver, malgré tout. »
          </p>
          <p className="lede" style={{ maxWidth: "56ch" }}>
            Charge mentale, journées qui s&apos;enchaînent, notifications qui
            s&apos;invitent jusque dans la chambre, injonction à être un
            couple parfait sur papier glacé : être en couple aujourd&apos;hui
            demande un travail que nos parents n&apos;ont pas eu à faire de la
            même façon. Nous le savons parce que nous l&apos;avons vécu, avant
            même de l&apos;accompagner chez les autres — avec nos propres
            désaccords, nos propres silences, nos propres recommencements.
            C&apos;est cette traversée qui nous a menés vers le conseil
            conjugal et familial, et qui nourrit aujourd&apos;hui chaque
            séance que nous animons ensemble.
          </p>
        </div>
      </div>
    </section>
  );
}
