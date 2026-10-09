import type { ReactNode } from 'react'
import { cx } from './cx.js'

export function List({ ordered = false, className, children }: { ordered?: boolean; className?: string; children: ReactNode }) {
  const Tag = ordered ? 'ol' : 'ul'
  return <Tag className={cx('ak-list', className)}>{children}</Tag>
}

export function Row({
  leading,
  eyebrow,
  title,
  meta,
  trailing,
  tone = 'default',
  children,
}: {
  leading?: ReactNode
  eyebrow?: string
  title: ReactNode
  meta?: ReactNode
  trailing?: ReactNode
  tone?: 'default' | 'accent'
  children?: ReactNode
}) {
  return (
    <li className={cx('ak-row', tone === 'accent' && 'ak-row--accent')}>
      <div className="ak-row__body">
        {leading}
        <div className="ak-row__content">
          {eyebrow && <p className="ak-eyebrow">{eyebrow}</p>}
          <div className="ak-row__title">{title}</div>
          {meta && <p className="ak-row__meta">{meta}</p>}
          {children}
        </div>
      </div>
      {trailing}
    </li>
  )
}
