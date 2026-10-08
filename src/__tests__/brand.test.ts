import { brandVars } from '../brand'

describe('brandVars', () => {
  it('maps accent and accent ink onto CSS variables', () => {
    expect(brandVars({ name: 'CardBoard', accent: '#e5b924', accentInk: '#0a1628' })).toEqual({
      '--ak-accent': '#e5b924',
      '--ak-accent-ink': '#0a1628',
    })
  })
})
