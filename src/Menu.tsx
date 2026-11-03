'use client'
import { useEffect, useRef, type ComponentProps, type ReactNode } from 'react'
import { buttonClass, type ButtonSize, type ButtonVariant } from './Button.js'
import { KitLink } from './link.js'
import { cx } from './cx.js'

export function Menu({
  label = 'More',
  variant = 'secondary',
  size = 'md',
  icon = false,
  ariaLabel,
  children,
}: {
  label?: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: boolean
  ariaLabel?: string
  children: ReactNode
}) {
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
      <summary className={buttonClass(variant, size, icon ? 'ak-btn--icon' : undefined)} aria-label={ariaLabel}>
        {label}
      </summary>
      <div className="ak-menu__list" role="menu">{children}</div>
    </details>
  )
}

export function MenuItem({
  href,
  danger = false,
  children,
  ...rest
}: ComponentProps<'button'> & { href?: string; danger?: boolean }) {
  const className = cx('ak-menu__item', danger && 'ak-menu__item--danger')
  if (href) return <KitLink href={href} role="menuitem" className={className}>{children}</KitLink>
  return <button type="button" role="menuitem" className={className} {...rest}>{children}</button>
}
