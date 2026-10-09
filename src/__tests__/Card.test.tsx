import { render, screen } from '@testing-library/react'
import { Card } from '../Card'

describe('Card', () => {
  it('renders a title as an h2 by default with description and actions', () => {
    render(<Card title="Run control" description="What the studio shows" actions={<button>Open</button>}>body</Card>)
    expect(screen.getByRole('heading', { level: 2, name: 'Run control' })).toBeInTheDocument()
    expect(screen.getByText('What the studio shows')).toHaveClass('ak-card__desc')
    expect(screen.getByRole('button', { name: 'Open' })).toBeInTheDocument()
    expect(screen.getByText('body')).toBeInTheDocument()
  })
  it('supports h3 and the accent tone', () => {
    const { container } = render(<Card title="Live now" heading="h3" tone="accent">x</Card>)
    expect(screen.getByRole('heading', { level: 3, name: 'Live now' })).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('ak-card--accent')
  })
})
