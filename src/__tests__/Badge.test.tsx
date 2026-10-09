import { render, screen } from '@testing-library/react'
import { Badge } from '../Badge'

describe('Badge', () => {
  it('applies the tone class', () => {
    render(<Badge tone="ok">Paid</Badge>)
    expect(screen.getByText('Paid').className).toBe('ak-badge ak-badge--ok')
  })
  it('defaults to neutral', () => {
    render(<Badge>Draft</Badge>)
    expect(screen.getByText('Draft').className).toBe('ak-badge')
  })
})
