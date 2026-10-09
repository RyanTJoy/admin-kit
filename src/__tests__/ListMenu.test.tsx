import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ActionGroup } from '../ActionGroup'
import { List, Row } from '../List'
import { Menu, MenuItem } from '../Menu'

describe('List and Row', () => {
  it('renders rows as list items with the eyebrow and title', () => {
    render(<List><Row eyebrow="Break #002" title={<h3>Finest</h3>} meta="1 of 6 sold" trailing={<span>t</span>} /></List>)
    const item = screen.getByRole('listitem')
    expect(item).toHaveClass('ak-row')
    expect(screen.getByText('Break #002')).toHaveClass('ak-eyebrow')
    expect(screen.getByRole('heading', { name: 'Finest' })).toBeInTheDocument()
    expect(screen.getByText('1 of 6 sold')).toHaveClass('ak-row__meta')
  })
  it('renders an ordered list when asked', () => {
    const { container } = render(<List ordered><Row title="x" /></List>)
    expect(container.querySelector('ol.ak-list')).not.toBeNull()
  })
})

describe('Menu', () => {
  it('opens on click and closes on an outside click', async () => {
    render(<div><p>outside</p><Menu label="More"><MenuItem href="/a">Go A</MenuItem><MenuItem onClick={() => {}}>Do B</MenuItem></Menu></div>)
    const summary = screen.getByText('More')
    await userEvent.click(summary)
    expect(summary.closest('details')).toHaveAttribute('open')
    expect(screen.getByRole('menuitem', { name: 'Go A' })).toHaveAttribute('href', '/a')
    expect(screen.getByRole('menuitem', { name: 'Do B' }).tagName).toBe('BUTTON')
    await userEvent.click(screen.getByText('outside'))
    expect(summary.closest('details')).not.toHaveAttribute('open')
  })
})

describe('ActionGroup', () => {
  it('wraps children in the actions row', () => {
    const { container } = render(<ActionGroup><button>a</button></ActionGroup>)
    expect(container.firstChild).toHaveClass('ak-actions')
  })
})
