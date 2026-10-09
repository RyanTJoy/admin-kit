import type { ReactNode } from 'react'
import { cx } from './cx'

export function SectionHeader({
  title,
  description,
  count,
  level = 'h2',
  actions,
}: {
  title: string
  description?: string
  count?: number
  level?: 'h2' | 'h3'
  actions?: ReactNode
}) {
  const Heading = level
  return (
    <div className={cx('ak-section', level === 'h3' && 'ak-section--sub')}>
      <div>
        <Heading className="ak-section__title">{title}</Heading>
        {description && <p className="ak-section__desc">{description}</p>}
      </div>
      {actions ?? (count !== undefined && <span className="ak-section__count">{count}</span>)}
    </div>
  )
}
