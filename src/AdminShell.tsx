'use client'
import { useEffect, useRef, type ReactNode } from 'react'
import { brandVars, type Brand } from './brand.js'
import { KitLink, LinkContext, type LinkComponent } from './link.js'

export type NavItem = { href: string; label: string; external?: boolean; phone?: boolean }

function isCurrent(item: NavItem, currentPath: string, homeHref: string): boolean {
  if (item.external) return false
  if (item.href === homeHref) return currentPath === homeHref
  return currentPath === item.href || currentPath.startsWith(item.href + '/')
}

export function AdminShell({
  brand,
  nav,
  currentPath,
  link,
  primaryAction,
  children,
}: {
  brand: Brand
  nav: NavItem[]
  currentPath: string
  link?: LinkComponent
  primaryAction?: ReactNode
  children: ReactNode
}) {
  const homeHref = nav[0]?.href ?? '/'
  const moreRef = useRef<HTMLDetailsElement>(null)
  useEffect(() => {
    function onDocClick(event: MouseEvent) {
      const el = moreRef.current
      if (el && el.open && !el.contains(event.target as Node)) el.open = false
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])
  useEffect(() => {
    if (moreRef.current) moreRef.current.open = false
  }, [currentPath])
  const internal = nav.filter((item) => !item.external)
  const flagged = internal.filter((item) => item.phone)
  const pinned = (flagged.length > 0 ? flagged : internal).slice(0, 4)
  const rest = nav.filter((item) => !pinned.includes(item))
  const restCurrent = rest.some((item) => isCurrent(item, currentPath, homeHref))
  const renderLink = (item: NavItem, className: string) => (
    <KitLink
      key={item.href}
      href={item.href}
      className={className}
      aria-current={isCurrent(item, currentPath, homeHref) ? 'page' : undefined}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noopener noreferrer' : undefined}
    >
      {item.label}
    </KitLink>
  )
  return (
    <LinkContext.Provider value={link ?? null}>
      <div className="ak-shell" style={brandVars(brand)}>
        <header className="ak-header">
          <div className="ak-header__row">
            <KitLink href={homeHref} className="ak-brand">
              {brand.logo ? <img className="ak-brand__logo" src={brand.logo} alt="" /> : <span className="ak-brand__mark" aria-hidden="true" />}
              <span className="ak-brand__name">{brand.name}</span>
              {brand.tagline && <span className="ak-brand__tag">{brand.tagline}</span>}
            </KitLink>
            {primaryAction}
          </div>
          <nav aria-label="Admin sections" className="ak-nav">
            {nav.map((item) => renderLink(item, 'ak-nav__link'))}
          </nav>
        </header>
        <main className="ak-page">{children}</main>
        <nav aria-label="Admin sections, phone" className="ak-tabbar">
          {pinned.map((item) => renderLink(item, 'ak-tabbar__link'))}
          {rest.length > 0 && (
            <details ref={moreRef} className="ak-tabbar__more">
              <summary className="ak-tabbar__link" data-current={restCurrent ? 'true' : undefined}>More</summary>
              <div className="ak-tabbar__sheet" role="menu">
                {rest.map((item) => renderLink(item, 'ak-menu__item'))}
              </div>
            </details>
          )}
        </nav>
      </div>
    </LinkContext.Provider>
  )
}
