'use client'
import { useState, type FormEvent } from 'react'
import { Button } from './Button'
import { Field, Input } from './Field'

export function LoginGate({
  title,
  onSubmit,
  error,
  busy = false,
}: {
  title: string
  onSubmit: (password: string) => void
  error?: string | null
  busy?: boolean
}) {
  const [password, setPassword] = useState('')
  function submit(event: FormEvent) {
    event.preventDefault()
    onSubmit(password)
  }
  return (
    <form onSubmit={submit} className="ak-login">
      <h1 className="ak-login__title">{title}</h1>
      <Field label="Password" htmlFor="admin-password">
        <Input id="admin-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoFocus autoComplete="current-password" />
      </Field>
      {error && <p className="ak-error">{error}</p>}
      <Button type="submit" variant="primary" disabled={busy || !password} busy={busy} busyLabel="Unlocking…">Unlock</Button>
    </form>
  )
}
