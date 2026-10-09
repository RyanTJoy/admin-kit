import type { ReactNode } from 'react'

export function StatRow({ children }: { children: ReactNode }) {
  return <div className="ak-statrow">{children}</div>
}

export function Stat({ label, value, hint }: { label: string; value: ReactNode; hint?: string }) {
  return (
    <div className="ak-stat">
      <p className="ak-eyebrow">{label}</p>
      <p className="ak-stat__value">{value}</p>
      {hint && <p className="ak-stat__hint">{hint}</p>}
    </div>
  )
}
