import type { ReactNode } from 'react'
import { cx } from './cx'

export function Card({
  title,
  description,
  actions,
  tone = 'default',
  heading = 'h2',
  className,
  children,
}: {
  title?: string
  description?: string
  actions?: ReactNode
  tone?: 'default' | 'accent'
  heading?: 'h2' | 'h3'
  className?: string
  children: ReactNode
}) {
  const Heading = heading
  return (
    <section className={cx('ak-card', tone === 'accent' && 'ak-card--accent', className)}>
      {(title || actions) && (
        <div className="ak-card__head">
          <div>
            {title && <Heading className="ak-card__title">{title}</Heading>}
            {description && <p className="ak-card__desc">{description}</p>}
          </div>
          {actions}
        </div>
      )}
      {children}
    </section>
  )
}
