import { render, screen } from '@testing-library/react'
import { Checkbox, Field, Input, Select, Textarea } from '../Field'

describe('Field primitives', () => {
  it('labels an input through htmlFor', () => {
    render(<Field label="Title" hint="optional" htmlFor="t"><Input id="t" defaultValue="x" /></Field>)
    expect(screen.getByLabelText(/Title/)).toHaveValue('x')
    expect(screen.getByText('optional')).toHaveClass('ak-hint')
  })
  it('applies kit classes to textarea and select', () => {
    render(<><Textarea aria-label="notes" /><Select aria-label="pick"><option>a</option></Select></>)
    expect(screen.getByLabelText('notes')).toHaveClass('ak-textarea')
    expect(screen.getByLabelText('pick')).toHaveClass('ak-select')
  })
  it('renders a labelled checkbox', () => {
    render(<Checkbox label="Venmo" defaultChecked />)
    expect(screen.getByRole('checkbox', { name: 'Venmo' })).toBeChecked()
  })
})
