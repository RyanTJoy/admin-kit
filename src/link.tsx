'use client'
import { createContext, useContext, type ComponentType, type ReactNode } from 'react'

export type KitLinkProps = {
  href: string
  className?: string
  children?: ReactNode
  target?: string
  rel?: string
  role?: string
  'aria-current'?: 'page'
  'aria-label'?: string
}

export type LinkComponent = ComponentType<KitLinkProps>

export const LinkContext = createContext<LinkComponent | null>(null)

export function KitLink(props: KitLinkProps) {
  const Component = useContext(LinkContext)
  if (Component) return <Component {...props} />
  const { children, ...rest } = props
  return <a {...rest}>{children}</a>
}
