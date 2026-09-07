"use client";

import { useEffect, useState } from "react";
import type { Review } from "@/lib/reviews";
import { IconChevronLeft, IconChevronRight, IconClose, IconHeart, Stars } from "./icons";

export default function ReviewsModal({ reviews }: { reviews: Review[] }) {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    if (index === null) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIndex(null);
      if (event.key === "ArrowLeft") setIndex((value) => (value === null ? value : (value - 1 + reviews.length) % reviews.length));
      if (event.key === "ArrowRight") setIndex((value) => (value === null ? value : (value + 1) % reviews.length));
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [index, reviews.length]);

  return (
    <>
      <button type="button" className="reviews-more" onClick={() => setIndex(0)}>
        Voir les {reviews.length} témoignages →
      </button>

      {index !== null && (
        <div className="lightbox" onClick={() => setIndex(null)}>
          <button
            type="button"
            className="lightbox-close"
            aria-label="Fermer"
            onClick={() => setIndex(null)}
          >
            <IconClose />
          </button>

          <button
            type="button"
            className="reviews-modal-nav reviews-modal-prev"
            aria-label="Avis précédent"
            onClick={(event) => {
              event.stopPropagation();
              setIndex((value) => (value === null ? value : (value - 1 + reviews.length) % reviews.length));
            }}
          >
            <IconChevronLeft />
          </button>

          <div className="reviews-modal-card" onClick={(event) => event.stopPropagation()}>
            {reviews[index].type === "google" ? (
              <div className="reviews-modal-badge">
                <Stars count={reviews[index].rating ?? 5} />
                <span>{reviews[index].author ?? "Avis Google"}</span>
              </div>
            ) : (
              <div className="reviews-modal-badge">
                <IconHeart className="reviews-modal-heart" />
                <span>Message reçu</span>
              </div>
            )}
            <p className="reviews-modal-text">{reviews[index].text}</p>
            <span className="reviews-modal-counter">
              {index + 1} / {reviews.length}
            </span>
          </div>

          <button
            type="button"
            className="reviews-modal-nav reviews-modal-next"
            aria-label="Avis suivant"
            onClick={(event) => {
              event.stopPropagation();
              setIndex((value) => (value === null ? value : (value + 1) % reviews.length));
            }}
          >
            <IconChevronRight />
          </button>
        </div>
      )}
    </>
  );
}
