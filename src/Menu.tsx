'use client'
import { useEffect, useRef, type ComponentProps, type ReactNode } from 'react'
import { KitLink } from './link'

export function Menu({ label = 'More', children }: { label?: string; children: ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null)
  useEffect(() => {
    function onDocClick(event: MouseEvent) {
      const el = ref.current
      if (el && el.open && !el.contains(event.target as Node)) el.open = false
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])
  return (
    <details ref={ref} className="ak-menu">
      <summary className="ak-btn ak-btn--secondary ak-btn--md">{label}</summary>
      <div className="ak-menu__list" role="menu">{children}</div>
    </details>
  )
}

export function MenuItem({ href, children, ...rest }: ComponentProps<'button'> & { href?: string }) {
  if (href) return <KitLink href={href} role="menuitem" className="ak-menu__item">{children}</KitLink>
  return <button type="button" role="menuitem" className="ak-menu__item" {...rest}>{children}</button>
}
