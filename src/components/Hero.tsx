import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <Image
          src="/images/hero-solo-ai.png"
          alt="Fa Dione, conseillère conjugale et familiale"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "75% 25%" }}
          priority
        />
      </div>
      <div className="wrap hero-content">
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
    </section>
  );
}
