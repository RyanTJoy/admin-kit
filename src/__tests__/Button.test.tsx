import { render, screen } from '@testing-library/react'
import { Button, buttonClass } from '../Button'

describe('Button', () => {
  it('defaults to a secondary medium button of type button', () => {
    render(<Button>Save</Button>)
    const b = screen.getByRole('button', { name: 'Save' })
    expect(b).toHaveAttribute('type', 'button')
    expect(b.className).toBe('ak-btn ak-btn--secondary ak-btn--md')
  })
  it('swaps the label and disables itself while busy', () => {
    render(<Button busy busyLabel="Updating…">Save</Button>)
    const b = screen.getByRole('button', { name: 'Updating…' })
    expect(b).toBeDisabled()
    expect(b).toHaveAttribute('aria-busy', 'true')
  })
  it('exposes buttonClass for links', () => {
    expect(buttonClass('primary', 'sm')).toBe('ak-btn ak-btn--primary ak-btn--sm')
    expect(buttonClass()).toBe('ak-btn ak-btn--secondary ak-btn--md')
  })
})
