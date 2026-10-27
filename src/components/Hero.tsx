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
        <span className="eyebrow hero-eyebrow">
          THE DIONE&apos;S - MAISON DE CONSEIL RELATIONNEL
        </span>
        <h1>
          Couple, Relations,
          <br />
          Famille, Choix
        </h1>
        <p className="lede">
          Chez les Dione, nous vous accueillons dans un espace d&apos;écoute
          et d&apos;échange, sans jugement ni modèle à suivre. Un temps pour
          parler de ce que vous vivez, prendre du recul et explorer les
          possibilités qui s&apos;offrent à vous.
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
