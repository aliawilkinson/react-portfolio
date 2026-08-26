import { describe, it, expect } from 'vitest'
import { generateInterpretation } from '../../src/components/Tarot/services/interpretationService'

// Helper to create a drawn card object matching the expected structure
function makeCard({ name = 'The Fool', meaning_up = 'New beginnings and trust.', meaning_rev = 'Recklessness or fear of change.', isReversed = false } = {}) {
  return {
    card: {
      name,
      name_short: 'ar00',
      type: 'major',
      suit: null,
      desc: 'A wanderer steps off a cliff.',
      meaning_up,
      meaning_rev,
    },
    isReversed,
  }
}

describe('interpretationService', () => {
  describe('generateInterpretation', () => {
    it('returns an object with summary, reflections, and connections', () => {
      const cards = [makeCard()]
      const result = generateInterpretation(cards)

      expect(result).toHaveProperty('summary')
      expect(result).toHaveProperty('reflections')
      expect(result).toHaveProperty('connections')
    })

    it('summary is a non-empty string', () => {
      const cards = [makeCard()]
      const result = generateInterpretation(cards)

      expect(typeof result.summary).toBe('string')
      expect(result.summary.length).toBeGreaterThan(0)
    })

    it('reflections is an array with at least one element', () => {
      const cards = [makeCard()]
      const result = generateInterpretation(cards)

      expect(Array.isArray(result.reflections)).toBe(true)
      expect(result.reflections.length).toBeGreaterThanOrEqual(1)
      result.reflections.forEach(r => {
        expect(typeof r).toBe('string')
        expect(r.length).toBeGreaterThan(0)
      })
    })

    it('connections is a non-empty string', () => {
      const cards = [makeCard()]
      const result = generateInterpretation(cards)

      expect(typeof result.connections).toBe('string')
      expect(result.connections.length).toBeGreaterThan(0)
    })

    it('incorporates the question into the summary when provided', () => {
      const cards = [makeCard()]
      const question = 'What should I focus on this week?'
      const result = generateInterpretation(cards, question)

      expect(result.summary).toContain(question)
    })

    it('works without a question (optional)', () => {
      const cards = [makeCard()]
      const result = generateInterpretation(cards)

      expect(result.summary.length).toBeGreaterThan(0)
      expect(result.reflections.length).toBeGreaterThanOrEqual(1)
      expect(result.connections.length).toBeGreaterThan(0)
    })

    it('uses meaning_up for upright cards', () => {
      const cards = [makeCard({ name: 'The Magician', meaning_up: 'Directed will and focus.', meaning_rev: 'Manipulation or inaction.', isReversed: false })]
      const result = generateInterpretation(cards)

      // The upright meaning should appear somewhere in the output
      expect(result.summary).toContain('Directed will and focus')
    })

    it('uses meaning_rev for reversed cards', () => {
      const cards = [makeCard({ name: 'The Magician', meaning_up: 'Directed will and focus.', meaning_rev: 'Manipulation or inaction.', meaning_rev: 'Manipulation or inaction.', isReversed: true })]
      const result = generateInterpretation(cards)

      // The reversed meaning should appear somewhere in the output
      expect(result.summary).toContain('Manipulation or inaction')
    })

    it('references each card name in the summary', () => {
      const cards = [
        makeCard({ name: 'The Fool', isReversed: false }),
        makeCard({ name: 'The Magician', isReversed: true }),
      ]
      const result = generateInterpretation(cards)

      expect(result.summary).toContain('The Fool')
      expect(result.summary).toContain('The Magician')
    })

    it('references each card name in reflections', () => {
      const cards = [
        makeCard({ name: 'The Empress', isReversed: false }),
        makeCard({ name: 'The Emperor', isReversed: true }),
      ]
      const result = generateInterpretation(cards)

      const allReflections = result.reflections.join(' ')
      expect(allReflections).toContain('The Empress')
      expect(allReflections).toContain('The Emperor')
    })

    it('references each card name in connections', () => {
      const cards = [
        makeCard({ name: 'The Star', isReversed: false }),
        makeCard({ name: 'The Moon', isReversed: true }),
      ]
      const result = generateInterpretation(cards)

      expect(result.connections).toContain('The Star')
      expect(result.connections).toContain('The Moon')
    })

    it('handles a single card correctly', () => {
      const cards = [makeCard({ name: 'The Sun' })]
      const result = generateInterpretation(cards)

      expect(result.summary).toContain('The Sun')
      expect(result.connections).toContain('The Sun')
      expect(result.reflections.length).toBeGreaterThanOrEqual(1)
    })

    it('handles multiple cards (3-card spread)', () => {
      const cards = [
        makeCard({ name: 'The Fool', isReversed: false }),
        makeCard({ name: 'The Tower', isReversed: true }),
        makeCard({ name: 'The Star', isReversed: false }),
      ]
      const result = generateInterpretation(cards)

      expect(result.summary).toContain('The Fool')
      expect(result.summary).toContain('The Tower')
      expect(result.summary).toContain('The Star')
      expect(result.reflections.length).toBeGreaterThanOrEqual(3)
      expect(result.connections).toContain('The Fool')
      expect(result.connections).toContain('The Tower')
      expect(result.connections).toContain('The Star')
    })

    it('handles many cards (5+)', () => {
      const cards = Array.from({ length: 5 }, (_, i) =>
        makeCard({ name: `Card ${i + 1}`, isReversed: i % 2 === 0 })
      )
      const result = generateInterpretation(cards)

      expect(result.summary.length).toBeGreaterThan(0)
      expect(result.reflections.length).toBeGreaterThanOrEqual(5)
      expect(result.connections.length).toBeGreaterThan(0)
    })

    it('frames output as self-reflection, not prediction', () => {
      const cards = [makeCard({ name: 'Death', meaning_up: 'Something is ending so something new can exist.' })]
      const result = generateInterpretation(cards)

      const fullText = result.summary + ' ' + result.reflections.join(' ') + ' ' + result.connections

      // Should NOT contain future-prediction language
      expect(fullText).not.toMatch(/\byou will\b/i)
      expect(fullText).not.toMatch(/\byour future\b/i)
      expect(fullText).not.toMatch(/\bwill happen\b/i)

      // Should contain reflective language
      expect(fullText).toMatch(/reflect|consider|ask|invite|notice|resonat/i)
    })

    it('adds question to reflections when provided', () => {
      const cards = [makeCard()]
      const question = 'Should I change careers?'
      const result = generateInterpretation(cards, question)

      const allReflections = result.reflections.join(' ')
      expect(allReflections).toContain(question)
    })

    it('interprets a Celtic Cross by its traditional positions', () => {
      const labels = ['Present', 'Challenge', 'Foundation', 'Past', 'Crown', 'Future', 'Self', 'Environment', 'Hopes/Fears', 'Outcome']
      const cards = labels.map((_, index) => makeCard({ name: `Card ${index + 1}`, isReversed: index % 2 === 1 }))
      const result = generateInterpretation(cards, 'What pattern am I moving through?', {
        name: 'Celtic Cross',
        cardCount: 10,
        labels
      })

      expect(result.summary).toContain('Present — Card 1')
      expect(result.summary).toContain('Outcome — Card 10')
      expect(result.reflections).toHaveLength(11)
      expect(result.reflections[1]).toContain('Challenge')
      expect(result.reflections[8]).toContain('Hopes/Fears')
      expect(result.connections).toContain('crossing influence')
      expect(result.connections).toContain('The staff')
      expect(result.connections).toContain('Card 10')
      expect(result.connections).not.toMatch(/\byou will\b|\bwill happen\b/i)
      expect(result.celticCross.positions).toHaveLength(10)
      expect(result.celticCross.positions[1]).toMatchObject({ position: 'Challenge', name: 'Card 2', orientation: 'Reversed' })
      expect(result.celticCross.synthesis).toHaveLength(5)
    })

    it('interprets a three-card spread as a past-present-future progression', () => {
      const cards = [
        makeCard({ name: 'The Hermit' }),
        makeCard({ name: 'Strength', isReversed: true }),
        makeCard({ name: 'The Star' })
      ]
      const result = generateInterpretation(cards, 'What am I learning?', {
        name: 'Three Card Spread',
        cardCount: 3,
        labels: ['Past', 'Present', 'Future']
      })

      expect(result.threeCard.positions).toHaveLength(3)
      expect(result.threeCard.positions[0]).toMatchObject({ position: 'Past', name: 'The Hermit' })
      expect(result.threeCard.positions[1]).toMatchObject({ position: 'Present', orientation: 'Reversed' })
      expect(result.threeCard.positions[2].reflection).toContain('direction')
      expect(result.threeCard.synthesis).toContain('The Hermit')
      expect(result.threeCard.synthesis).toContain('Strength')
      expect(result.threeCard.synthesis).toContain('The Star')
      expect(result.threeCard.synthesis).not.toMatch(/\byou will\b|\bwill happen\b/i)
    })

    it('interprets a single-card spread as focused reflective guidance', () => {
      const result = generateInterpretation(
        [makeCard({ name: 'The Moon', isReversed: true })],
        'What needs my attention?',
        { name: 'Single Card', cardCount: 1, labels: ['Core Message'] }
      )

      expect(result.singleCard).toMatchObject({
        position: 'Core Message',
        name: 'The Moon',
        orientation: 'Reversed'
      })
      expect(result.singleCard.reflection).toContain('blocked')
      expect(result.singleCard.integration).toContain('What needs my attention?')
      expect(result.singleCard.integration).not.toMatch(/\byou will\b|\bwill happen\b/i)
      expect(result.singleCard.yesNo).toMatchObject({ value: 'Unclear', tone: 'neutral' })
    })

    it('provides yes and no values for decisive single cards', () => {
      const preset = { name: 'Single Card', cardCount: 1, labels: ['Core Message'] }
      const yes = generateInterpretation([makeCard({ name: 'The Sun' })], '', preset)
      const no = generateInterpretation([makeCard({ name: 'The Tower' })], '', preset)
      const reversed = generateInterpretation([makeCard({ name: 'The Sun', isReversed: true })], '', preset)

      expect(yes.singleCard.yesNo.value).toBe('Yes')
      expect(no.singleCard.yesNo.value).toBe('No')
      expect(reversed.singleCard.yesNo.value).toBe('No')
    })
  })
})
