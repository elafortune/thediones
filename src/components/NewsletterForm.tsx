"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <p className="newsletter-note">Merci ! Vous êtes bien inscrit·e.</p>;
  }

  return (
    <form
      className="newsletter-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <input type="email" placeholder="Votre email" aria-label="Adresse email" required />
      <button className="btn btn-clay" type="submit">
        S&apos;inscrire
      </button>
    </form>
  );
}
