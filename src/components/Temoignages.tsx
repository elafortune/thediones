import { reviews } from "@/lib/reviews";
import { IconGoogle, Stars } from "./icons";
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
            Témoignages
          </span>
          <h2>Ils sont passés par la Maison</h2>
          <div className="reviews-score">
            <span className="reviews-score-number">
              {average.toFixed(1).replace(".", ",")}/5
            </span>
            <Stars count={Math.round(average)} />
            <span className="reviews-score-divider" aria-hidden="true" />
            <span className="reviews-score-google">
              <IconGoogle width={20} height={20} />
              Avis Google
            </span>
          </div>
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
          <ReviewsModal reviews={reviews} />
        </div>
      </div>
    </section>
  );
}
