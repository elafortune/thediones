import Link from "next/link";
import { navLinks } from "@/lib/nav";
import MobileNav from "./MobileNav";
import CalendlyButton from "./CalendlyButton";

export default function Header() {
  return (
    <header style={{ viewTransitionName: "site-header" }}>
      <div className="wrap nav-row">
        <Link className="logo" href="/#top">
          The Dione&apos;s
          <span className="logo-sub">Maison de conseil relationnel</span>
        </Link>
        <div className="nav-right">
          <nav className="links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} transitionTypes={link.transitionTypes}>
                {link.label}
              </Link>
            ))}
          </nav>
          <CalendlyButton className="btn btn-clay" style={{ padding: "11px 22px" }}>
            Réserver
          </CalendlyButton>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
