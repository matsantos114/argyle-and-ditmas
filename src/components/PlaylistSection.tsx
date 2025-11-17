import type { Playlist } from '../types/content'

type PlaylistSectionProps = {
  eyebrow: string
  title: string
  description: string
  playlists: Playlist[]
}

export function PlaylistSection({ eyebrow, title, description, playlists }: PlaylistSectionProps) {
  return (
    <section className="section dual" id="playlists">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="lede">{description}</p>
      </div>
      <div className="playlist-grid">
        {playlists.map((playlist) => (
          <article key={playlist.id} className="playlist-card">
            <img src={playlist.cover} alt={playlist.title} loading="lazy" />
            <div>
              <p className="subtle">{playlist.curator}</p>
              <h3>{playlist.title}</h3>
              <p>{playlist.description}</p>
              <a href={playlist.link}>Listen now ↗</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
