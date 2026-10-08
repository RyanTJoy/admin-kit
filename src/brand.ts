import type { CSSProperties } from 'react'

export type Brand = {
  name: string
  tagline?: string
  logo?: string
  accent: string
  accentInk: string
}

export function brandVars(brand: Brand): CSSProperties {
  return { '--ak-accent': brand.accent, '--ak-accent-ink': brand.accentInk } as CSSProperties
}
