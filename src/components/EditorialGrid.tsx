import type { EditorialNote } from '../types/content'

type EditorialGridProps = {
  notes: EditorialNote[]
}

export function EditorialGrid({ notes }: EditorialGridProps) {
  return (
    <section className="section grid" id="columns">
      {notes.map((note) => (
        <article key={note.id} className="editorial-card">
          <p className="subtle">{note.label}</p>
          <h3>{note.title}</h3>
          <p>{note.description}</p>
          <button className="text-btn" type="button">
            Open story →
          </button>
        </article>
      ))}
      <NewsletterCard />
    </section>
  )
}

function NewsletterCard() {
  return (
    <article className="newsletter-card">
      <p className="eyebrow">Newsletter</p>
      <h3>Stay in the loop</h3>
      <p>Thursday dispatch with exclusive session notes, advance streams, and reading lists.</p>
      <form className="newsletter-form">
        <input type="email" placeholder="you@email.com" aria-label="Email" />
        <button type="submit" className="primary-btn">
          Subscribe
        </button>
      </form>
      <p className="muted small">No spam. Cancel anytime.</p>
    </article>
  )
}
