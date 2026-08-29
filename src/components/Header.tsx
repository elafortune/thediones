import Link from "next/link";

const links = [
  { href: "#univers", label: "L'univers" },
  { href: "#seances", label: "Séances" },
  { href: "#histoire", label: "Notre histoire" },
  { href: "#lettre", label: "La Lettre" },
];

export default function Header() {
  return (
    <header>
      <div className="wrap nav-row">
        <Link className="logo" href="#top">
          The Dione&apos;s
        </Link>
        <div className="nav-right">
          <nav className="links">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-clay" href="#seances" style={{ padding: "11px 22px" }}>
            Réserver
          </a>
        </div>
      </div>
    </header>
  );
}
