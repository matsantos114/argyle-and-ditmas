export type Review = {
  id: string
  title: string
  artist: string
  album: string
  image: string
  score: number
  tags: string[]
  readTime: string
  summary: string
}

export type Playlist = {
  id: string
  title: string
  description: string
  curator: string
  cover: string
  link: string
}

export type EditorialNote = {
  id: string
  label: string
  title: string
  description: string
}

export type NavLink = {
  href: string
  label: string
}

export type HeroContent = {
  eyebrow: string
  headline: string
  lede: string
  primaryCta: string
  secondaryCta: string
}
