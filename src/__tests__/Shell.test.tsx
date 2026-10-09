import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AdminShell } from '../AdminShell'
import { LoginGate } from '../LoginGate'
import { PageHeader } from '../PageHeader'
import { SectionHeader } from '../SectionHeader'

const brand = { name: 'CardBoard', tagline: 'Operations', accent: '#e5b924', accentInk: '#0a1628' }
const nav = [
  { href: '/admin', label: 'Breaks' },
  { href: '/admin/orders', label: 'Orders' },
  { href: 'https://admin.shopify.com', label: 'Shopify inventory ↗', external: true },
]

describe('AdminShell', () => {
  it('marks the current section and opens external links in a new tab', () => {
    render(<AdminShell brand={brand} nav={nav} currentPath="/admin/orders/new">page</AdminShell>)
    const top = screen.getByRole('navigation', { name: 'Admin sections' })
    const orders = top.querySelector('a[href="/admin/orders"]')
    expect(orders).toHaveAttribute('aria-current', 'page')
    expect(top.querySelector('a[href="/admin"]')).not.toHaveAttribute('aria-current')
    expect(top.querySelector('a[href="https://admin.shopify.com"]')).toHaveAttribute('target', '_blank')
    expect(screen.getByText('CardBoard')).toBeInTheDocument()
    expect(screen.getByText('Operations')).toBeInTheDocument()
    expect(screen.getByRole('main')).toHaveTextContent('page')
  })
  it('matches the first nav item only exactly', () => {
    render(<AdminShell brand={brand} nav={nav} currentPath="/admin">page</AdminShell>)
    const top = screen.getByRole('navigation', { name: 'Admin sections' })
    expect(top.querySelector('a[href="/admin"]')).toHaveAttribute('aria-current', 'page')
  })
  it('sets the brand accent as a CSS variable on the shell', () => {
    const { container } = render(<AdminShell brand={brand} nav={nav} currentPath="/admin">x</AdminShell>)
    expect((container.firstChild as HTMLElement).style.getPropertyValue('--ak-accent')).toBe('#e5b924')
  })
})

describe('LoginGate', () => {
  it('submits the password and shows errors', async () => {
    const onSubmit = vi.fn()
    const { rerender } = render(<LoginGate title="CardBoard Admin" onSubmit={onSubmit} />)
    await userEvent.type(screen.getByLabelText('Password'), 'letsrip')
    await userEvent.click(screen.getByRole('button', { name: 'Unlock' }))
    expect(onSubmit).toHaveBeenCalledWith('letsrip')
    rerender(<LoginGate title="CardBoard Admin" onSubmit={onSubmit} error="Wrong password. Try again." />)
    expect(screen.getByText(/wrong password/i)).toHaveClass('ak-error')
  })
  it('disables Unlock when empty or busy', () => {
    render(<LoginGate title="x" onSubmit={() => {}} busy />)
    expect(screen.getByRole('button', { name: 'Unlock' })).toBeDisabled()
  })
})

describe('headers', () => {
  it('renders PageHeader with h1, back link, and actions', () => {
    render(<PageHeader eyebrow="Break operations" title="Tonight's run order" description="d" back={{ href: '/admin', label: 'All breaks' }} actions={<button>New</button>} />)
    expect(screen.getByRole('heading', { level: 1, name: "Tonight's run order" })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '← All breaks' })).toHaveAttribute('href', '/admin')
    expect(screen.getByRole('button', { name: 'New' })).toBeInTheDocument()
  })
  it('renders SectionHeader at h2 by default and h3 when asked, with a count', () => {
    render(<><SectionHeader title="Available to buy" count={2} /><SectionHeader title="On deck" level="h3" /></>)
    expect(screen.getByRole('heading', { level: 2, name: 'Available to buy' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'On deck' })).toBeInTheDocument()
    expect(screen.getByText('2')).toHaveClass('ak-section__count')
  })
})
