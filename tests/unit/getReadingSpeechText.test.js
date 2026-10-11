import { describe, expect, it } from 'vitest'
import { getReadingSpeechText } from '../../src/components/Tarot/utils/getReadingSpeechText'

describe('getReadingSpeechText', () => {
  it('turns an AI interpretation into clean, structured speech', () => {
    const text = getReadingSpeechText({
      interpretation: {
        summary: '**The Star** invites hope.',
        detailed: 'Let the next step be small.',
        themes: '- Renewal\n- Trust',
        reflectionQuestions: '1. What feels possible?',
        actionableInsights: '*Write it down.*',
      },
    })

    expect(text).toContain('Summary. The Star invites hope.')
    expect(text).toContain('Key themes. Renewal Trust')
    expect(text).toContain('Reflection questions. What feels possible?')
    expect(text).not.toContain('*')
  })

  it('reads every Celtic Cross position and its synthesis', () => {
    const text = getReadingSpeechText({
      fallbackInterpretation: {
        celticCross: {
          positions: [
            { position: 'The Present', name: 'The Sun', orientation: 'upright', meaning: 'Clarity.', reflection: 'Notice what is visible.' },
            { position: 'The Challenge', name: 'The Moon', orientation: 'reversed', meaning: 'Uncertainty.', reflection: 'Name what is unclear.' },
          ],
          synthesis: ['Clarity and uncertainty can coexist.'],
        },
      },
    })

    expect(text).toContain('Position 1, The Present. The Sun, upright')
    expect(text).toContain('Position 2, The Challenge. The Moon, reversed')
    expect(text).toContain('How the spread connects')
    expect(text).toContain('Clarity and uncertainty can coexist.')
  })

  it('includes the yes or no lean in a single-card reading', () => {
    const text = getReadingSpeechText({
      fallbackInterpretation: {
        singleCard: {
          position: 'Your Focus',
          name: 'The Fool',
          orientation: 'upright',
          yesNo: { value: 'Yes', explanation: 'The path is open.' },
          meaning: 'Begin with curiosity.',
          reflection: 'What would you try?',
          integration: 'Take one small step.',
        },
      },
    })

    expect(text).toContain('Current lean, Yes')
    expect(text).toContain('The path is open.')
    expect(text).toContain('Take one small step.')
  })
})
