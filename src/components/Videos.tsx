"use client";

import { useEffect, useState } from "react";
import { IconPlay, IconClose } from "./icons";

const videos = [
  { src: "/videos/video-1.mp4" },
  { src: "/videos/video-2.mp4" },
  { src: "/videos/video-3.mp4" },
  { src: "/videos/video-4.mp4" },
];

export default function Videos() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenIndex(null);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openIndex]);

  return (
    <section id="videos">
      <div className="wrap">
        <div className="video-grid">
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
                preload="metadata"
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
      </div>

      {openIndex !== null && (
        <div className="video-lightbox" onClick={() => setOpenIndex(null)}>
          <button
            type="button"
            className="video-lightbox-close"
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
