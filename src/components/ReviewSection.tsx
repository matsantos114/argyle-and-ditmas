import type { Review } from '../types/content'

type ReviewSectionProps = {
  eyebrow?: string
  title: string
  tags?: string[]
  reviews: Review[]
}

export function ReviewSection({ eyebrow, title, tags = [], reviews }: ReviewSectionProps) {
  return (
    <section className="section" id="reviews">
      <div className="section__header">
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
        </div>
        {tags.length ? (
          <div className="chip-row">
            {tags.map((tag) => (
              <button key={tag} className="chip" type="button">
                {tag}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="review-grid">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  )
}

type ReviewCardProps = {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="review-card">
      <img src={review.image} alt={review.album} loading="lazy" />
      <div className="review-card__body">
        <div className="review-card__meta">
          <span className="score">{review.score}</span>
          <p>{review.tags.join(' • ')}</p>
        </div>
        <h3>{review.title}</h3>
        <p className="muted">
          {review.artist} — {review.album} · {review.readTime}
        </p>
        <p>{review.summary}</p>
        <button className="text-btn" type="button">
          Read review →
        </button>
      </div>
    </article>
  )
}
