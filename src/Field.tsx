import type { ComponentProps, ReactNode } from 'react'
import { cx } from './cx.js'

export function Field({ label, hint, htmlFor, children }: { label: string; hint?: string; htmlFor: string; children: ReactNode }) {
  return (
    <div className="ak-field">
      <label className="ak-label" htmlFor={htmlFor}>
        {label}
        {hint && <span className="ak-hint">{hint}</span>}
      </label>
      {children}
    </div>
  )
}

export function Input({ className, ...rest }: ComponentProps<'input'>) {
  return <input className={cx('ak-input', className)} {...rest} />
}

export function Textarea({ className, ...rest }: ComponentProps<'textarea'>) {
  return <textarea className={cx('ak-textarea', className)} {...rest} />
}

export function Select({ className, ...rest }: ComponentProps<'select'>) {
  return <select className={cx('ak-select', className)} {...rest} />
}

export function Checkbox({ label, className, ...rest }: ComponentProps<'input'> & { label: string }) {
  return (
    <label className={cx('ak-check', className)}>
      <input type="checkbox" {...rest} />
      <span>{label}</span>
    </label>
  )
}
