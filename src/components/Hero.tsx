import type { HeroContent, Review } from '../types/content'

type HeroProps = {
  content: HeroContent
  featured: Review
}

export function Hero({ content, featured }: HeroProps) {
  return (
    <header className="hero">
      <div className="hero__content">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>{content.headline}</h1>
        <p className="lede">{content.lede}</p>
        <div className="hero__actions">
          <button className="primary-btn" type="button">
            {content.primaryCta}
          </button>
          <button className="secondary-btn" type="button">
            {content.secondaryCta}
          </button>
        </div>
        <div className="hero__meta">
          <span>{featured.readTime}</span>
          <span>Score {featured.score}</span>
          <span>{featured.tags.join(' • ')}</span>
        </div>
      </div>
      <div className="hero__feature-card">
        <img src={featured.image} alt={`${featured.album} cover artwork`} />
        <div>
          <p className="subtle">Feature review</p>
          <h3>{featured.title}</h3>
          <p className="muted">
            {featured.artist} — {featured.album}
          </p>
          <p>{featured.summary}</p>
        </div>
      </div>
    </header>
  )
}
