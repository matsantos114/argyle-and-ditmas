import type { NavLink } from '../types/content'

type TopNavProps = {
  brand: string
  links: NavLink[]
  ctaLabel?: string
}

export function TopNav({ brand, links, ctaLabel }: TopNavProps) {
  return (
    <nav className="top-nav">
      <div className="brand">{brand}</div>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      {ctaLabel ? <button className="ghost-btn">{ctaLabel}</button> : null}
    </nav>
  )
}
