import type { ReactNode } from 'react'

export function EmptyState({ title, body, action }: { title: string; body?: string; action?: ReactNode }) {
  return (
    <div className="ak-empty">
      <p className="ak-empty__title">{title}</p>
      {body && <p className="ak-empty__body">{body}</p>}
      {action}
    </div>
  )
}
