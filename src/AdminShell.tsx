'use client'
import type { ReactNode } from 'react'
import { brandVars, type Brand } from './brand.js'
import { KitLink, LinkContext, type LinkComponent } from './link.js'

export type NavItem = { href: string; label: string; external?: boolean }

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
          {nav.filter((item) => !item.external).slice(0, 5).map((item) => renderLink(item, 'ak-tabbar__link'))}
        </nav>
      </div>
    </LinkContext.Provider>
  )
}
