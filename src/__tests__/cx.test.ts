import { cx } from '../cx'

describe('cx', () => {
  it('joins truthy parts with one space', () => {
    expect(cx('a', false, null, undefined, 'b')).toBe('a b')
  })
  it('returns an empty string for no parts', () => {
    expect(cx()).toBe('')
  })
})
