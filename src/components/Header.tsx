import Link from "next/link";
import { navLinks } from "@/lib/nav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header style={{ viewTransitionName: "site-header" }}>
      <div className="wrap nav-row">
        <Link className="logo" href="/#top">
          The Dione&apos;s
        </Link>
        <div className="nav-right">
          <nav className="links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} transitionTypes={link.transitionTypes}>
                {link.label}
              </Link>
            ))}
          </nav>
          <Link className="btn btn-clay" href="/#seances" style={{ padding: "11px 22px" }}>
            Réserver
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
