import { forwardRef, useId, type ComponentProps } from 'react'
import { cx } from './cx.js'

export type ButtonVariant = 'primary' | 'secondary' | 'quiet' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export function buttonClass(variant: ButtonVariant = 'secondary', size: ButtonSize = 'md', extra?: string): string {
  return cx('ak-btn', `ak-btn--${variant}`, `ak-btn--${size}`, extra)
}

export type ButtonProps = ComponentProps<'button'> & {
  variant?: ButtonVariant
  size?: ButtonSize
  busy?: boolean
  busyLabel?: string
  disabledReason?: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'secondary',
    size = 'md',
    busy = false,
    busyLabel = 'Working…',
    disabledReason,
    className,
    children,
    disabled,
    type = 'button',
    ...rest
  },
  ref,
) {
  const reasonId = useId()
  const showReason = Boolean(disabledReason)
  const button = (
    <button
      ref={ref}
      type={type}
      className={buttonClass(variant, size, className)}
      disabled={disabled || busy}
      aria-busy={busy || undefined}
      aria-describedby={showReason ? reasonId : undefined}
      {...rest}
    >
      {busy ? busyLabel : children}
    </button>
  )
  if (!showReason) return button
  return (
    <span className="ak-btn-wrap">
      {button}
      <span id={reasonId} className="ak-btn__reason">{disabledReason}</span>
    </span>
  )
})
