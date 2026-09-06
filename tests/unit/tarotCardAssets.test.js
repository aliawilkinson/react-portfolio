import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { tarotDeck } from '../../src/components/Tarot/data/tarotDeck'

const cardDirectory = path.resolve(process.cwd(), 'public/tarot/cards')

describe('tarot card assets', () => {
  it('bundles one PNG front for every card in the deck', () => {
    expect(tarotDeck).toHaveLength(78)

    const missingCards = tarotDeck.filter(
      card => !fs.existsSync(path.join(cardDirectory, `${card.name_short}.png`))
    )

    expect(missingCards).toEqual([])
  })

  it('has no unexpected or empty PNG files', () => {
    const pngFiles = fs.readdirSync(cardDirectory).filter(file => file.endsWith('.png'))

    expect(pngFiles).toHaveLength(78)
    for (const file of pngFiles) {
      expect(fs.statSync(path.join(cardDirectory, file)).size).toBeGreaterThan(1_000)
    }
  })
})
