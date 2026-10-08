import { render, screen } from '@testing-library/react'
import type { ReactNode } from 'react'
import { KitLink, LinkContext } from '../link'

describe('KitLink', () => {
  it('renders a plain anchor when no link component is provided', () => {
    render(<KitLink href="/x">go</KitLink>)
    expect(screen.getByRole('link', { name: 'go' })).toHaveAttribute('href', '/x')
  })
  it('renders the provided link component from context', () => {
    const Fake = ({ href, children }: { href: string; children?: ReactNode }) => <a href={href} data-fake="1">{children}</a>
    render(<LinkContext.Provider value={Fake}><KitLink href="/y">go</KitLink></LinkContext.Provider>)
    expect(screen.getByRole('link', { name: 'go' })).toHaveAttribute('data-fake', '1')
  })
})
