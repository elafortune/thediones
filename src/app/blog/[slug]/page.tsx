import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";

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

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    return { title: "Article introuvable — The Dione's" };
  }
  return {
    title: `${article.title} — Le Journal des Dione's`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <article className="article-section">
        <div className="wrap">
          <Link href="/blog" className="article-back">
            ← Le Journal
          </Link>
          <span
            className="blog-card-cat"
            style={{ color: categoryColors[article.category] ?? "var(--forest)" }}
          >
            {article.category}
          </span>
          <h1 className="article-title">{article.title}</h1>
          <span className="blog-card-meta">
            <span>{formatDate(article.date)}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime} de lecture</span>
          </span>

          <div className="article-body">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="article-cta">
            <h2>Envie d&apos;en parler à deux ?</h2>
            <p className="lede">
              Une séance permet de poser ce que vous vivez et de voir, ensemble,
              ce qui peut être différent.
            </p>
            <Link className="btn btn-clay" href="/#seances">
              Réserver une séance
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
