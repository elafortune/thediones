import { reviews } from "@/lib/reviews";
import { Stars } from "./icons";
import ReviewsModal from "./ReviewsModal";

const featured = reviews.filter((review) => review.featured);
const rated = reviews.filter((review) => review.rating !== null);
const average = rated.reduce((sum, review) => sum + (review.rating ?? 0), 0) / rated.length;

export default function Temoignages() {
  return (
    <section id="temoignages" style={{ background: "var(--cream-deep)" }}>
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow" style={{ color: "var(--forest)" }}>
            La communauté
          </span>
          <h2>Ce qu&apos;ils en disent</h2>
        </div>
        <div className="proof-row">
          {featured.map((review) => (
            <div key={review.id} className="proof-card">
              <Stars count={review.rating ?? 5} />
              <p className="proof-quote">« {review.text} »</p>
              <span className="proof-name">
                {review.author ?? "Avis Google"}
              </span>
            </div>
          ))}
        </div>

        <div className="reviews-summary">
          <span className="reviews-rating-badge">
            {average.toFixed(1).replace(".", ",")} ★ · {rated.length} avis Google
          </span>
          <ReviewsModal reviews={reviews} />
        </div>
      </div>
    </section>
  );
}
