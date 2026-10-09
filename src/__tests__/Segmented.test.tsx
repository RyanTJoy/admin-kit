import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Segmented } from '../Segmented'

describe('Segmented', () => {
  it('marks the current value pressed and reports changes', async () => {
    const onChange = vi.fn()
    render(<Segmented label="Layout" value="focus" options={[{ value: 'focus', label: 'Focus' }, { value: 'stack', label: 'Stack' }]} onChange={onChange} />)
    expect(screen.getByRole('group', { name: 'Layout' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Focus' })).toHaveAttribute('aria-pressed', 'true')
    await userEvent.click(screen.getByRole('button', { name: 'Stack' }))
    expect(onChange).toHaveBeenCalledWith('stack')
  })
})
