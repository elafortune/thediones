"use client";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CALENDLY_URL = "https://calendly.com/thediones/thedionesconseilconjugaletfamilial";

export default function CalendlyButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.Calendly?.initPopupWidget({ url: CALENDLY_URL })}
    >
      {children}
    </button>
  );
}
