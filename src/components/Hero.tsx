import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow hero-eyebrow">The Dione&apos;s</span>
          <h1>
            Culture. Famille.
            <br />
            Lifestyle. Business.
          </h1>
          <p className="lede">
            Un couple, un cabinet, un univers : celui de la vie à deux qui
            dure. Des séances de conseil conjugal et familial, un journal pour
            nourrir votre relation, une lettre pour ne rien manquer.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-clay" href="#seances">
              Réserver une séance
            </a>
            <a className="btn btn-outline-cream" href="#univers">
              Découvrir l&apos;univers
            </a>
          </div>
        </div>
        <div className="hero-frame">
          <Image
            src="/images/the-diones-couple.jpg"
            alt="Monsieur et Madame Dione, conseillers conjugaux et familiaux"
            fill
            sizes="(max-width: 880px) 320px, 45vw"
            style={{ objectFit: "cover", objectPosition: "72% center" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
