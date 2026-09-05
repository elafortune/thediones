import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

/* --- pain points --- */

export function IconSilence(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 5h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-8l-4 4v-4H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
      <path d="M7 10.5h3.2" />
      <path d="M13.8 10.5H17" />
    </svg>
  );
}

export function IconCrackedHeart(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 20S3 14.3 3 8.3C3 5.4 5.4 3 8.3 3c1.6 0 2.9.8 3.7 2 .8-1.2 2.1-2 3.7-2C18.6 3 21 5.4 21 8.3 21 14.3 12 20 12 20Z" />
      <path d="M12 5 10.4 9l2.6 2-2 4 1 3" />
    </svg>
  );
}

export function IconSeparateDoors(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="4" width="7" height="16" rx="1" />
      <rect x="14" y="4" width="7" height="16" rx="1" />
      <circle cx="8.2" cy="12" r="0.55" fill="currentColor" stroke="none" />
      <circle cx="15.8" cy="12" r="0.55" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconUnevenScale(props: IconProps) {
  return (
    <svg {...base(props)}>
      <line x1="12" y1="3.5" x2="12" y2="19" />
      <line x1="9" y1="21" x2="15" y2="21" />
      <line x1="5" y1="7" x2="19" y2="10" />
      <line x1="5" y1="7" x2="5" y2="12" />
      <path d="M2 12a3 3 0 0 0 6 0" />
      <line x1="19" y1="10" x2="19" y2="15" />
      <path d="M16 15a3 3 0 0 0 6 0" />
    </svg>
  );
}

export function IconWindingPath(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 20c4 0 5-4.5 6-7s4-2 4-5.5S17 4 20 4" />
      <circle cx="10" cy="13" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="20" cy="4" r="1.2" />
    </svg>
  );
}

export function IconForkPath(props: IconProps) {
  return (
    <svg {...base(props)}>
      <line x1="12" y1="21" x2="12" y2="13" />
      <line x1="12" y1="13" x2="6" y2="5" />
      <line x1="12" y1="13" x2="18" y2="5" />
      <path d="M4.3 6.8 6 5l1.7 1.8" />
      <path d="M16.3 6.8 18 5l1.7 1.8" />
    </svg>
  );
}

/* --- faq --- */

export function IconQuestion(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 5h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-8l-4 4v-4H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
      <path d="M10.3 9.6c0-1.1.9-2 2.1-2s2 .8 2 1.8c0 1.2-1 1.5-1.7 2.1-.4.4-.6.7-.6 1.3" />
      <circle cx="12.1" cy="15.4" r="0.15" fill="currentColor" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.5V12l3.3 1.8" />
    </svg>
  );
}

export function IconScreen(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <line x1="9" y1="20" x2="15" y2="20" />
      <line x1="12" y1="17" x2="12" y2="20" />
      <path d="M10 9.3v5.4l4.6-2.7Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconLock(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15.2" r="1.1" />
      <line x1="12" y1="16.3" x2="12" y2="17.6" />
    </svg>
  );
}

export function IconCalendarCheck(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
      <line x1="4" y1="9.5" x2="20" y2="9.5" />
      <path d="M8.3 14.2 10.6 16.5 15.7 11.4" />
    </svg>
  );
}

/* --- seances --- */

export function IconUserSolo(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="8" r="3.3" />
      <path d="M5 20c0-4.4 3.1-6.8 7-6.8s7 2.4 7 6.8" />
    </svg>
  );
}

export function IconUserPair(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="8.6" cy="8" r="2.9" />
      <path d="M3.2 20c0-3.7 2.4-6 5.4-6" />
      <circle cx="15.6" cy="9" r="2.9" />
      <path d="M20.8 20c0-3.5-2.3-5.7-5.1-5.7" />
    </svg>
  );
}

export function IconFamily(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="4.8" cy="7.2" r="2.3" />
      <path d="M1.4 20c0-3.2 1.5-5.5 3.4-5.5s3.4 2.3 3.4 5.5" />
      <circle cx="19.2" cy="7.2" r="2.3" />
      <path d="M15.8 20c0-3.2 1.5-5.5 3.4-5.5s3.4 2.3 3.4 5.5" />
      <circle cx="12" cy="10.4" r="2" />
      <path d="M9.2 20c0-2.6 1.2-4.5 2.8-4.5s2.8 1.9 2.8 4.5" />
    </svg>
  );
}

/* --- social --- */

export function IconInstagram(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconPlay(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M10.2 8.6v6.8l5.6-3.4Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base(props)}>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

/* --- ornament --- */

export function IconSprig(props: IconProps) {
  return (
    <svg {...base(props)}>
      <line x1="12" y1="2" x2="12" y2="22" />
      <path d="M12 6c-2-1-4 0-4 2s2 3 4 2" />
      <path d="M12 6c2-1 4 0 4 2s-2 3-4 2" />
      <path d="M12 12c-2-1-4 0-4 2s2 3 4 2" />
      <path d="M12 12c2-1 4 0 4 2s-2 3-4 2" />
    </svg>
  );
}
