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
    expect(buttonClass('ghost')).toBe('ak-btn ak-btn--ghost ak-btn--md')
  })
  it('shows disabledReason as helper text and describes the button with it', () => {
    render(<Button disabled disabledReason="Add a title first">Next</Button>)
    const reason = screen.getByText('Add a title first')
    expect(reason).toHaveClass('ak-btn__reason')
    expect(screen.getByRole('button', { name: 'Next' })).toHaveAttribute('aria-describedby', reason.id)
  })
})
