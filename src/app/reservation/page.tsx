import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réserver une séance — The Dione's",
  description:
    "Choisissez votre créneau pour une consultation ponctuelle de 2 heures (160 €), paiement en ligne au moment de la réservation.",
};

const CALENDLY_URL =
  "https://calendly.com/thediones/thedionesconseilconjugaletfamilial";

export default function ReservationPage() {
  return (
    <main>
      <section className="blog-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: "var(--forest)" }}>
            Prendre rendez-vous
          </span>
          <h1 style={{ marginTop: 14 }}>Réservez votre séance</h1>
          <p className="lede" style={{ marginTop: 16, maxWidth: "56ch" }}>
            Consultation ponctuelle de 2 heures — 160 €. Choisissez un
            créneau ci-dessous, le règlement s&apos;effectue en ligne au
            moment de la réservation.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ minWidth: 320, height: 700 }}
          />
        </div>
      </section>
    </main>
  );
}
