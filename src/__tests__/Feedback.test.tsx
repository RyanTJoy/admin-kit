import { render, screen } from '@testing-library/react'
import { Banner } from '../Banner'
import { EmptyState } from '../EmptyState'
import { ProgressBar } from '../ProgressBar'
import { Skeleton } from '../Skeleton'
import { Stat, StatRow } from '../Stat'

describe('feedback primitives', () => {
  it('renders stats in a row', () => {
    render(<StatRow><Stat label="Open spots" value="34" hint="across 2 breaks" /></StatRow>)
    expect(screen.getByText('Open spots')).toHaveClass('ak-eyebrow')
    expect(screen.getByText('34')).toHaveClass('ak-stat__value')
    expect(screen.getByText('across 2 breaks')).toHaveClass('ak-stat__hint')
  })
  it('renders an accessible progress bar', () => {
    render(<ProgressBar value={1} max={6} label="1 of 6 spots sold" />)
    const bar = screen.getByRole('progressbar', { name: '1 of 6 spots sold' })
    expect(bar).toHaveAttribute('aria-valuenow', '1')
    expect(bar).toHaveAttribute('aria-valuemax', '6')
  })
  it('treats max of zero as empty', () => {
    render(<ProgressBar value={0} max={0} label="none" />)
    expect(screen.getByRole('progressbar').firstChild).toHaveStyle({ width: '0%' })
  })
  it('renders banners with the right live region role', () => {
    render(<><Banner tone="danger" title="Blocked">no</Banner><Banner tone="warn">careful</Banner></>)
    expect(screen.getByRole('alert')).toHaveTextContent('Blocked')
    expect(screen.getByRole('status')).toHaveTextContent('careful')
  })
  it('renders an empty state and a labelled skeleton', () => {
    render(<><EmptyState title="No breaks yet" body="Build one." action={<button>Build</button>} /><Skeleton lines={3} label="Loading breaks" /></>)
    expect(screen.getByText('No breaks yet')).toHaveClass('ak-empty__title')
    expect(screen.getByRole('button', { name: 'Build' })).toBeInTheDocument()
    expect(screen.getByLabelText('Loading breaks').children).toHaveLength(3)
  })
})
