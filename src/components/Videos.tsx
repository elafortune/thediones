"use client";

import { useEffect, useRef, useState } from "react";
import { IconChevronLeft, IconChevronRight, IconPlay, IconClose } from "./icons";

const videos = [
  { src: "/videos/video-1.mp4", poster: "/videos/video-1-poster.jpg" },
  { src: "/videos/video-2.mp4", poster: "/videos/video-2-poster.jpg" },
  { src: "/videos/video-3.mp4", poster: "/videos/video-3-poster.jpg" },
  { src: "/videos/video-4.mp4", poster: "/videos/video-4-poster.jpg" },
];

export default function Videos() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (openIndex === null) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenIndex(null);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openIndex]);

  function scrollByCard(direction: 1 | -1) {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector<HTMLElement>(".video-card");
    const amount = card ? card.offsetWidth + 14 : container.clientWidth * 0.8;
    container.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <section id="videos">
      <div className="wrap">
        <div className="video-scroll-wrap">
          <button
            type="button"
            className="video-scroll-nav video-scroll-prev"
            aria-label="Vidéo précédente"
            onClick={() => scrollByCard(-1)}
          >
            <IconChevronLeft />
          </button>
          <div className="video-grid" ref={scrollRef}>
            {videos.map((video, index) => (
              <button
                type="button"
                className="video-card"
                key={video.src}
                onClick={() => setOpenIndex(index)}
                aria-label={`Lire la vidéo ${index + 1}`}
              >
                <video
                  src={video.src}
                  poster={video.poster}
                  preload="none"
                  muted
                  playsInline
                  aria-hidden="true"
                />
                <span className="video-play">
                  <IconPlay />
                </span>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="video-scroll-nav video-scroll-next"
            aria-label="Vidéo suivante"
            onClick={() => scrollByCard(1)}
          >
            <IconChevronRight />
          </button>
        </div>
      </div>

      {openIndex !== null && (
        <div className="lightbox" onClick={() => setOpenIndex(null)}>
          <button
            type="button"
            className="lightbox-close"
            aria-label="Fermer la vidéo"
            onClick={() => setOpenIndex(null)}
          >
            <IconClose />
          </button>
          <video
            className="video-lightbox-player"
            src={videos[openIndex].src}
            controls
            autoPlay
            playsInline
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
