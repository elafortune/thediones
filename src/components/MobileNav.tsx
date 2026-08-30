"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/nav";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="mobile-nav-toggle"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={`burger${open ? " is-open" : ""}`} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      {open && (
        <>
          <button
            type="button"
            className="mobile-nav-backdrop"
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setOpen(false)}
          />
          <div className="mobile-nav-panel" id="mobile-nav-panel">
            <nav>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  transitionTypes={link.transitionTypes}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link className="btn btn-clay" href="/#seances" onClick={() => setOpen(false)}>
              Réserver une séance
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
