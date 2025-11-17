import './App.css'
import { EditorialGrid } from './components/EditorialGrid'
import { Hero } from './components/Hero'
import { PlaylistSection } from './components/PlaylistSection'
import { ReviewSection } from './components/ReviewSection'
import { SiteFooter } from './components/SiteFooter'
import { TopNav } from './components/TopNav'
import { editorialNotes, featuredReview, heroContent, playlists, reviews, trendingTags } from './data/content'

const navLinks = [
  { href: '#reviews', label: 'Reviews' },
  { href: '#artists', label: 'Artists' },
  { href: '#playlists', label: 'Playlists' },
  { href: '#columns', label: 'Columns' }
]

function App() {
  return (
    <div className="site-shell">
      <TopNav brand="Argyle & Ditmas" links={navLinks} ctaLabel="Subscribe" />
      <Hero content={heroContent} featured={featuredReview} />
      <ReviewSection eyebrow="Filters" title="Latest reviews" tags={trendingTags} reviews={reviews} />
      <PlaylistSection
        eyebrow="Curation Desk"
        title="Playlists & Signals"
        description="Short-form mixes and neighborhood transmissions for when albums are too linear."
        playlists={playlists}
      />
      <EditorialGrid notes={editorialNotes} />
      <SiteFooter />
    </div>
  )
}

export default App
