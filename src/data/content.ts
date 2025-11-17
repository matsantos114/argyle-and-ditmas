import type { EditorialNote, HeroContent, Playlist, Review } from '../types/content'

export const heroContent: HeroContent = {
  eyebrow: 'Weekly issue / 002',
  headline: 'Long-form music criticism for late-night listeners.',
  lede:
    'Argyle & Ditmas surfaces small label gems, vivid essays, and playlists scored for every subway transfer.',
  primaryCta: 'Read the feature',
  secondaryCta: 'Latest issue'
}

export const featuredReview: Review = {
  id: 'feature-01',
  title: 'Neon Alleys & Late Night Cabs',
  artist: 'Zadie Flux',
  album: 'Transit Lines',
  image:
    'https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=1400&q=80',
  score: 8.7,
  tags: ['Electronic', 'Downtempo', 'Editorial'],
  readTime: '9 min read',
  summary:
    'An immersive survey of the synth auteur’s third record and its obsession with liminal city corners.'
}

export const reviews: Review[] = [
  {
    id: 'review-01',
    title: 'Steelbirds of Havana',
    artist: 'Marisol Arte',
    album: 'Volando',
    image:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80',
    score: 9.1,
    tags: ['Afro-Cuban', 'Feature'],
    readTime: '7 min read',
    summary: 'Heat-warped horn lines meet vaporwave pads in a glorious collision.'
  },
  {
    id: 'review-02',
    title: 'Quiet Hours',
    artist: 'Low Ember Collective',
    album: 'Afterglow Index',
    image:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80',
    score: 7.8,
    tags: ['Ambient', 'Field Recordings'],
    readTime: '6 min read',
    summary: 'A diary of subway static and whispered folk refrains.'
  },
  {
    id: 'review-03',
    title: 'Borrowed Satellites',
    artist: 'Occam Bloom',
    album: 'Night Census',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    score: 8.3,
    tags: ['Indie', 'Concept Album'],
    readTime: '5 min read',
    summary: 'A concept record about urban planning with surprising heart.'
  }
]

export const playlists: Playlist[] = [
  {
    id: 'playlist-01',
    title: 'Fragments of Glow',
    description: 'A 12-track glide through nu-jazz, glitch soul, and late-night edits.',
    curator: 'Argyle Editors',
    cover:
      'https://images.unsplash.com/photo-1454922915609-78549ad709bb?auto=format&fit=crop&w=800&q=80',
    link: '#fragments'
  },
  {
    id: 'playlist-02',
    title: 'Signal Boost: Brooklyn',
    description: 'Neighborhood field recordings meet club heat.',
    curator: 'Resident DJ Liv Moss',
    cover:
      'https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=800&q=80',
    link: '#signal'
  }
]

export const editorialNotes: EditorialNote[] = [
  {
    id: 'note-01',
    label: 'Column',
    title: 'Dispatches from Ditmas Park',
    description: 'A weekly digest of neighborhood listening parties and DIY venues.'
  },
  {
    id: 'note-02',
    label: 'Interview',
    title: 'Studio hours with Komiko',
    description: 'On modular rigs, third-culture nostalgia, and scoring night buses.'
  }
]

export const trendingTags = ['Electronic', 'Indie Folk', 'Ambient', 'Latin Groove', 'New Voices']
