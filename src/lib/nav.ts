export type NavLink = {
  href: string;
  label: string;
  transitionTypes?: string[];
};

export const navLinks: NavLink[] = [
  { href: "/#histoire", label: "Faisons connaissance" },
  { href: "/#seances", label: "Nos accompagnements" },
  { href: "/#temoignages", label: "Témoignages" },
  { href: "/blog", label: "Le Journal", transitionTypes: ["nav-forward"] },
  { href: "/#faq", label: "Une question ?" },
];
