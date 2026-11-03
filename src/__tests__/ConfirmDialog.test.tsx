import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ConfirmDialog } from '../ConfirmDialog'

describe('ConfirmDialog', () => {
  it('does not render when closed', () => {
    render(<ConfirmDialog open={false} title="Delete order" onConfirm={() => {}} onCancel={() => {}} />)
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('confirms, cancels, and uses the danger button when asked', async () => {
    const onConfirm = vi.fn()
    const onCancel = vi.fn()
    render(
      <ConfirmDialog
        open
        title="Mark this order paid?"
        description="The pay link closes and the draft order is marked paid."
        confirmLabel="Mark paid"
        tone="danger"
        onConfirm={onConfirm}
        onCancel={onCancel}
      />,
    )
    const dialog = screen.getByRole('dialog', { name: 'Mark this order paid?' })
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(screen.getByText('The pay link closes and the draft order is marked paid.')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Mark paid' })).toHaveClass('ak-btn--danger')
    await userEvent.click(screen.getByRole('button', { name: 'Mark paid' }))
    expect(onConfirm).toHaveBeenCalledTimes(1)
    await userEvent.click(screen.getByRole('button', { name: 'Cancel' }))
    expect(onCancel).toHaveBeenCalledTimes(1)
  })

  it('closes on Escape and on a backdrop click', async () => {
    const onCancel = vi.fn()
    const { container } = render(
      <ConfirmDialog open title="Delete order" onConfirm={() => {}} onCancel={onCancel} />,
    )
    await userEvent.keyboard('{Escape}')
    expect(onCancel).toHaveBeenCalledTimes(1)
    fireEvent.mouseDown(container.querySelector('.ak-dialog-backdrop') as HTMLElement)
    expect(onCancel).toHaveBeenCalledTimes(2)
  })
})
