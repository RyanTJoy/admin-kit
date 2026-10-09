import type { ReactNode } from 'react'
import { cx } from './cx'

export type BannerTone = 'info' | 'warn' | 'danger'

export function Banner({ tone = 'info', title, action, children }: { tone?: BannerTone; title?: string; action?: ReactNode; children: ReactNode }) {
  return (
    <div role={tone === 'danger' ? 'alert' : 'status'} className={cx('ak-banner', tone !== 'info' && `ak-banner--${tone}`)}>
      <div>
        {title && <p className="ak-banner__title">{title}</p>}
        <div className="ak-banner__body">{children}</div>
      </div>
      {action}
    </div>
  )
}
