'use client'
import { useEffect, useId, useRef, type ReactNode } from 'react'
import { Button } from './Button.js'

export type ConfirmDialogTone = 'default' | 'danger'

export function ConfirmDialog({
  open,
  title,
  description,
  children,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  tone = 'default',
  busy = false,
  onConfirm,
  onCancel,
}: {
  open: boolean
  title: string
  description?: string
  children?: ReactNode
  confirmLabel?: string
  cancelLabel?: string
  tone?: ConfirmDialogTone
  busy?: boolean
  onConfirm: () => void
  onCancel: () => void
}) {
  const titleId = useId()
  const descId = useId()
  const cancelRef = useRef<HTMLButtonElement>(null)
  const hasBody = Boolean(description || children)

  useEffect(() => {
    if (!open) return
    const prev = document.activeElement as HTMLElement | null
    cancelRef.current?.focus()
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape' && !busy) onCancel()
    }
    document.addEventListener('keydown', onKey)
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = original
      prev?.focus?.()
    }
  }, [open, busy, onCancel])

  if (!open) return null
  return (
    <div
      className="ak-dialog-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !busy) onCancel()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={hasBody ? descId : undefined}
        className="ak-dialog"
      >
        <h2 id={titleId} className="ak-dialog__title">{title}</h2>
        {hasBody && (
          <div id={descId} className="ak-dialog__body">
            {description && <p>{description}</p>}
            {children}
          </div>
        )}
        <div className="ak-dialog__actions">
          <Button ref={cancelRef} onClick={onCancel} disabled={busy}>{cancelLabel}</Button>
          <Button variant={tone === 'danger' ? 'danger' : 'primary'} onClick={onConfirm} busy={busy} busyLabel="Working…">
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  )
}
