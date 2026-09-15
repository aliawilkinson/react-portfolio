import { describe, expect, it } from 'vitest'
import { buildCurrentMessage, getResponseGuidance } from '../../src/components/Tarot/services/geminiHandler'

describe('Gemini tarot response guidance', () => {
  it('treats a Celtic Cross as an expected ten-card spread', () => {
    const guidance = getResponseGuidance('Celtic Cross', 10)

    expect(guidance).toContain('standard Celtic Cross')
    expect(guidance).toContain('350 to 500 word reading')
    expect(guidance).toContain('do not comment on the number of cards')
  })

  it('adds spread-specific guidance to the current message', () => {
    const cards = Array.from({ length: 10 }, (_, index) => ({
      name: `Card ${index + 1}`,
      reversed: false,
      position: `Position ${index + 1}`
    }))

    const message = buildCurrentMessage('What should I understand?', cards, 'Celtic Cross')

    expect(message).toContain('Response guidance: This is a standard Celtic Cross.')
    expect(message).toContain('10. Position 10: Card 10 (Upright)')
  })

  it('keeps smaller spreads proportionately concise', () => {
    expect(getResponseGuidance('Single Card', 1)).toContain('100 to 180 word reading')
    expect(getResponseGuidance('Three Card Spread', 3)).toContain('180 to 300 word reading')
  })
})
