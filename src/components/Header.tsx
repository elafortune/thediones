import Link from "next/link";

const links = [
  { href: "/#univers", label: "L'univers" },
  { href: "/#histoire", label: "Notre histoire" },
  { href: "/#seances", label: "Séances" },
  { href: "/#temoignages", label: "Témoignages/FAQ" },
  { href: "/blog", label: "Notre journal" },
];

export default function Header() {
  return (
    <header>
      <div className="wrap nav-row">
        <Link className="logo" href="/#top">
          The Dione&apos;s
        </Link>
        <div className="nav-right">
          <nav className="links">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <Link className="btn btn-clay" href="/#seances" style={{ padding: "11px 22px" }}>
            Réserver
          </Link>
        </div>
      </div>
    </header>
  );
}
