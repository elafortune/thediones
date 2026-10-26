import Link from "next/link";
import { articles } from "@/lib/articles";

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

const latest = [...articles]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

export default function JournalPreview() {
  return (
    <section id="journal">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow" style={{ color: "var(--forest)" }}>
            Le Journal
          </span>
          <h2>Des réflexions à partager, des questions à explorer</h2>
        </div>
        <div className="journal-preview-grid">
          {latest.map((article, index) => (
            <Link
              key={article.slug}
              className={`blog-card journal-preview-card${index === 0 ? " is-featured" : ""}`}
              href={`/blog/${article.slug}`}
              transitionTypes={["nav-forward"]}
            >
              <span
                className="blog-card-cat"
                style={{ color: categoryColors[article.category] ?? "var(--forest)" }}
              >
                {article.category}
              </span>
              <h3 className="blog-card-title">{article.title}</h3>
              <p className="blog-card-excerpt">{article.excerpt}</p>
              <span className="blog-card-meta">
                <span>{formatDate(article.date)}</span>
                <span aria-hidden="true">·</span>
                <span>{article.readTime} de lecture</span>
              </span>
            </Link>
          ))}
        </div>
        <div className="journal-preview-cta">
          <Link className="btn btn-outline" href="/blog" transitionTypes={["nav-forward"]}>
            Lire tous les articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
