import type { Metadata } from "next";
import { ViewTransition } from "react";
import Link from "next/link";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Le Journal — The Dione's",
  description:
    "Nos articles sur la vie de couple, la parentalité et les étapes qui traversent une famille.",
};

const categoryColors: Record<string, string> = {
  Communication: "var(--forest)",
  Parentalité: "var(--clay)",
  "Vie de couple": "var(--bark)",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndex() {
  return (
    <main>
      <ViewTransition
        enter={{
          "nav-forward": "nav-forward",
          "nav-back": "nav-back",
          default: "none",
        }}
        exit={{
          "nav-forward": "nav-forward",
          "nav-back": "nav-back",
          default: "none",
        }}
        default="none"
      >
        <section className="blog-hero">
          <div className="wrap">
            <span className="eyebrow" style={{ color: "var(--forest)" }}>
              Le Journal
            </span>
            <h1 style={{ marginTop: 14 }}>Le Journal des Dione&apos;s</h1>
            <p className="lede" style={{ marginTop: 16, maxWidth: "56ch" }}>
              Des repères et des réflexions sur la vie de couple et de
              famille, écrits avec le même regard que celui que nous portons
              en séance.
            </p>
          </div>
        </section>

        <section style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="blog-list">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  className="blog-card"
                  href={`/blog/${article.slug}`}
                  transitionTypes={["nav-forward"]}
                >
                  <span
                    className="blog-card-cat"
                    style={{ color: categoryColors[article.category] ?? "var(--forest)" }}
                  >
                    {article.category}
                  </span>
                  <h2 className="blog-card-title">{article.title}</h2>
                  <p className="blog-card-excerpt">{article.excerpt}</p>
                  <span className="blog-card-meta">
                    <span>{formatDate(article.date)}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime} de lecture</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ViewTransition>
    </main>
  );
}
