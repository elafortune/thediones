export type NavLink = {
  href: string;
  label: string;
  transitionTypes?: string[];
};

export const navLinks: NavLink[] = [
  { href: "/#histoire", label: "Notre histoire" },
  { href: "/#univers", label: "L'univers" },
  { href: "/#seances", label: "Séances" },
  { href: "/#temoignages", label: "Témoignages/FAQ" },
  { href: "/blog", label: "Notre journal", transitionTypes: ["nav-forward"] },
];
