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

const eight = [
  { href: '/admin', label: 'Breaks' },
  { href: '/admin/orders', label: 'Orders' },
  { href: '/admin/seller', label: 'Card seller' },
  { href: '/admin/checklist', label: 'Checklist odds' },
  { href: '/admin/buying', label: 'Buying' },
  { href: '/admin/money', label: 'Money' },
  { href: '/admin/live', label: 'Live control' },
  { href: 'https://admin.shopify.com', label: 'Shopify inventory ↗', external: true },
]

describe('AdminShell phone tab bar', () => {
  it('pins the first 4 non-external items and puts the rest, external included, under More', () => {
    render(<AdminShell brand={brand} nav={eight} currentPath="/admin">x</AdminShell>)
    const phone = screen.getByRole('navigation', { name: 'Admin sections, phone' })
    const sheet = phone.querySelector('.ak-tabbar__sheet') as HTMLElement
    expect(sheet).not.toBeNull()
    const pinned = Array.from(phone.querySelectorAll('a')).filter((a) => !sheet.contains(a))
    expect(pinned.map((a) => a.textContent)).toEqual(['Breaks', 'Orders', 'Card seller', 'Checklist odds'])
    expect(phone.querySelector('summary')).toHaveTextContent('More')
    const inSheet = Array.from(sheet.querySelectorAll('a')).map((a) => a.textContent)
    expect(inSheet).toEqual(['Buying', 'Money', 'Live control', 'Shopify inventory ↗'])
    expect(sheet.querySelector('a[href="https://admin.shopify.com"]')).toHaveAttribute('target', '_blank')
  })
  it('pins exactly the items flagged phone', () => {
    const flagged = eight.map((item) => (['Orders', 'Money', 'Live control'].includes(item.label) ? { ...item, phone: true } : item))
    render(<AdminShell brand={brand} nav={flagged} currentPath="/admin">x</AdminShell>)
    const phone = screen.getByRole('navigation', { name: 'Admin sections, phone' })
    const sheet = phone.querySelector('.ak-tabbar__sheet') as HTMLElement
    const pinned = Array.from(phone.querySelectorAll('a')).filter((a) => !sheet.contains(a))
    expect(pinned.map((a) => a.textContent)).toEqual(['Orders', 'Money', 'Live control'])
    expect(sheet.querySelectorAll('a')).toHaveLength(5)
  })
  it('marks More current when the current path is inside it', () => {
    render(<AdminShell brand={brand} nav={eight} currentPath="/admin/money/2026">x</AdminShell>)
    const phone = screen.getByRole('navigation', { name: 'Admin sections, phone' })
    expect(phone.querySelector('summary')).toHaveAttribute('data-current', 'true')
    expect(phone.querySelector('.ak-tabbar__sheet a[href="/admin/money"]')).toHaveAttribute('aria-current', 'page')
  })
  it('closes the More sheet on an outside click', async () => {
    render(<AdminShell brand={brand} nav={eight} currentPath="/admin">x</AdminShell>)
    const phone = screen.getByRole('navigation', { name: 'Admin sections, phone' })
    const details = phone.querySelector('details') as HTMLDetailsElement
    await userEvent.click(phone.querySelector('summary') as HTMLElement)
    expect(details.open).toBe(true)
    await userEvent.click(screen.getByRole('main'))
    expect(details.open).toBe(false)
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
  it('disables Unlock when the password is empty, and shows the busy label while unlocking', () => {
    const { rerender } = render(<LoginGate title="x" onSubmit={() => {}} />)
    expect(screen.getByRole('button', { name: 'Unlock' })).toBeDisabled()
    rerender(<LoginGate title="x" onSubmit={() => {}} busy />)
    expect(screen.getByRole('button', { name: 'Unlocking…' })).toBeDisabled()
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
