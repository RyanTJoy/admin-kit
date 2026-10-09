import type { ReactNode } from 'react'
import { KitLink } from './link'

export function PageHeader({
  eyebrow,
  title,
  description,
  back,
  actions,
}: {
  eyebrow?: string
  title: string
  description?: string
  back?: { href: string; label: string }
  actions?: ReactNode
}) {
  return (
    <div className="ak-pagehead">
      <div>
        {back && <KitLink href={back.href} className="ak-pagehead__back">← {back.label}</KitLink>}
        {eyebrow && <p className="ak-eyebrow">{eyebrow}</p>}
        <h1 className="ak-pagehead__title">{title}</h1>
        {description && <p className="ak-pagehead__desc">{description}</p>}
      </div>
      {actions && <div className="ak-actions">{actions}</div>}
    </div>
  )
}
