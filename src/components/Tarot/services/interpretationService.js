/**
 * Interpretation Service
 *
 * Generates tarot reading interpretations from drawn cards.
 * All output is framed as self-reflection (not prediction).
 * This is a synchronous service, no API calls.
 *
 * @module interpretationService
 */

/**
 * Generates a complete tarot reading interpretation from drawn cards.
 *
 * @param {Array<{card: {name: string, meaning_up: string, meaning_rev: string}, isReversed: boolean}>} cards
 * @param {string} [question=''] - Optional question for reflection context
 * @param {{name?: string, cardCount?: number, labels?: string[]}} [spreadPreset] - Optional positional spread context
 * @returns {{summary: string, reflections: string[], connections: string}}
 */
export const generateInterpretation = (cards, question = '', spreadPreset = null) => {
  const isCelticCross = spreadPreset?.cardCount === 10 || spreadPreset?.name === 'Celtic Cross'
  const isThreeCard = spreadPreset?.cardCount === 3 || spreadPreset?.name === 'Three Card Spread'
  const isSingleCard = spreadPreset?.cardCount === 1 || spreadPreset?.name === 'Single Card'
  const cardSummaries = cards.map((drawn, index) => {
    const meaning = drawn.isReversed ? drawn.card.meaning_rev : drawn.card.meaning_up
    return { name: drawn.card.name, meaning, isReversed: drawn.isReversed, position: spreadPreset?.labels?.[index] }
  })

  const summary = buildSummary(cardSummaries, question, Boolean(spreadPreset?.labels))
  const reflections = isCelticCross
    ? buildCelticReflections(cardSummaries, question)
    : isThreeCard
      ? buildThreeCardReflections(cardSummaries, question)
      : isSingleCard
        ? buildSingleCardReflections(cardSummaries, question)
    : buildReflections(cardSummaries, question)
  const connections = isCelticCross
    ? buildCelticConnections(cardSummaries)
    : isThreeCard
      ? buildThreeCardConnections(cardSummaries)
    : buildConnections(cardSummaries)

  const celticCross = isCelticCross ? {
    positions: cardSummaries.map((card, index) => ({
      position: card.position,
      name: card.name,
      orientation: card.isReversed ? 'Reversed' : 'Upright',
      meaning: card.meaning,
      reflection: (CELTIC_PROMPTS[index] || CELTIC_PROMPTS[0])(card).replace(/^.*?:\s*/, '')
    })),
    synthesis: connections.split('\n\n')
  } : null

  const threeCard = isThreeCard ? {
    positions: cardSummaries.map((card, index) => ({
      position: card.position,
      name: card.name,
      orientation: card.isReversed ? 'Reversed' : 'Upright',
      meaning: card.meaning,
      reflection: (THREE_CARD_PROMPTS[index] || THREE_CARD_PROMPTS[1])(card).replace(/^.*?:\s*/, '')
    })),
    synthesis: connections
  } : null

  const singleCard = isSingleCard && cardSummaries[0] ? {
    position: cardSummaries[0].position || 'Core Message',
    name: cardSummaries[0].name,
    orientation: cardSummaries[0].isReversed ? 'Reversed' : 'Upright',
    meaning: cardSummaries[0].meaning,
    reflection: buildSingleCardPrompt(cardSummaries[0]),
    yesNo: getYesNoValue(cardSummaries[0]),
    integration: question
      ? `Return to "${question}" and identify one small choice this card invites you to consider today.`
      : 'Notice where this message is already present in your day, then choose one small way to respond to it.'
  } : null

  return { summary, reflections, connections, celticCross, threeCard, singleCard }
}

/**
 * Summary: Each card, its orientation, and its meaning. Just the facts.
 */
function buildSummary(cardSummaries, question, showPositions = false) {
  let summary = question ? `Question: "${question}"\n\n` : ''

  cardSummaries.forEach(c => {
    const orientation = c.isReversed ? 'Reversed' : 'Upright'
    const position = showPositions && c.position ? `${c.position} — ` : ''
    summary += `${position}${c.name} (${orientation})\n${c.meaning}\n\n`
  })

  return summary.trim()
}

const CELTIC_PROMPTS = [
  card => `Present — ${card.name}: Consider how this energy describes the heart of the matter now.`,
  card => `Challenge — ${card.name}: Notice how this energy crosses, complicates, or asks something of the present.`,
  card => `Foundation — ${card.name}: Reflect on the underlying belief, need, or history supporting the situation.`,
  card => `Past — ${card.name}: Consider what influence is receding but still shaping your response.`,
  card => `Crown — ${card.name}: Notice the aim, possibility, or conscious thought occupying the top of the situation.`,
  card => `Future — ${card.name}: Consider the next energy emerging if the current pattern continues—not as a fixed prediction, but as a direction to notice.`,
  card => `Self — ${card.name}: Reflect on the stance, resources, or assumptions you bring to the reading.`,
  card => `Environment — ${card.name}: Notice what the people or circumstances around you may be contributing.`,
  card => `Hopes/Fears — ${card.name}: Consider where desire and anxiety may be two faces of the same concern.`,
  card => `Outcome — ${card.name}: Reflect on the likely resolution or lesson suggested by the whole pattern, while remembering that your choices remain active.`
]

function buildCelticReflections(cardSummaries, question) {
  const prompts = cardSummaries.map((card, index) => (CELTIC_PROMPTS[index] || CELTIC_PROMPTS[0])(card))
  if (question) prompts.push(`Whole spread: What tension, support, or invitation does this pattern reveal about "${question}"?`)
  return prompts
}

function cardPhrase(card) {
  return `${card.name} (${card.isReversed ? 'reversed' : 'upright'}: ${getFirstSentence(card.meaning)})`
}

function buildCelticConnections(cards) {
  if (cards.length < 10) return buildConnections(cards)

  return [
    `At the center, ${cardPhrase(cards[0])} meets the crossing influence of ${cardPhrase(cards[1])}. Together they describe the reading's immediate tension.`,
    `The deeper axis runs from the foundation of ${cardPhrase(cards[2])} toward the conscious aim or possibility of ${cardPhrase(cards[4])}.`,
    `Across time, ${cardPhrase(cards[3])} is the influence moving out, while ${cardPhrase(cards[5])} is the direction beginning to emerge.`,
    `The staff shows how the situation is being held: ${cardPhrase(cards[6])} describes your stance; ${cardPhrase(cards[7])} reflects the surrounding environment; and ${cardPhrase(cards[8])} names the hopes or fears coloring perception.`,
    `The outcome, ${cardPhrase(cards[9])}, is best read as the pattern's current resolution or lesson rather than a fixed future. Compare it with the center cards: it shows what becomes possible when their tension is recognized.`
  ].join('\n\n')
}

const THREE_CARD_PROMPTS = [
  card => `Past — ${card.name}: Reflect on the influence, pattern, or experience that set the present situation in motion.`,
  card => `Present — ${card.name}: Notice what this card reveals about the energy, choice, or tension active right now.`,
  card => `Future — ${card.name}: Consider the direction this pattern may take if it continues—not as fixed fate, but as an invitation to respond.`
]

function buildThreeCardReflections(cards, question) {
  const prompts = cards.map((card, index) => (THREE_CARD_PROMPTS[index] || THREE_CARD_PROMPTS[1])(card))
  if (question) prompts.push(`Whole spread: What changes when you view "${question}" as a movement from past influence, through present choice, toward emerging possibility?`)
  return prompts
}

function buildThreeCardConnections(cards) {
  if (cards.length < 3) return buildConnections(cards)
  return `${cardPhrase(cards[0])} describes the influence carried into this moment. ${cardPhrase(cards[1])} shows how that energy is being met now. ${cardPhrase(cards[2])} suggests what may emerge from the current response. Read together, the spread asks what can be understood from the past, chosen in the present, and redirected before the next chapter takes shape.`
}

function buildSingleCardPrompt(card) {
  return card.isReversed
    ? `Notice whether ${card.name} points to an energy that feels blocked, internalized, delayed, or ready to be reconsidered.`
    : `Consider where the energy of ${card.name} is already available to recognize, embody, or act upon.`
}

function buildSingleCardReflections(cards, question) {
  if (!cards[0]) return []
  const prompts = [buildSingleCardPrompt(cards[0])]
  if (question) prompts.push(`How does this message change or deepen the way you see "${question}"?`)
  return prompts
}

const UNCLEAR_CARDS = new Set([
  'The High Priestess', 'The Hermit', 'The Hanged Man', 'The Moon',
  'Two of Swords', 'Four of Cups', 'Seven of Cups'
])

const NO_CARDS = new Set([
  'Death', 'The Devil', 'The Tower',
  'Three of Swords', 'Five of Swords', 'Seven of Swords', 'Nine of Swords', 'Ten of Swords',
  'Five of Cups', 'Eight of Cups', 'Five of Pentacles', 'Ten of Wands'
])

function getYesNoValue(card) {
  if (UNCLEAR_CARDS.has(card.name)) {
    return {
      value: 'Unclear',
      tone: 'neutral',
      explanation: card.isReversed
        ? 'The card suggests missing information or an inner conflict that needs attention before deciding.'
        : 'The card asks for patience, intuition, or more information before reducing the situation to yes or no.'
    }
  }

  const leansNo = card.isReversed || NO_CARDS.has(card.name)
  return leansNo
    ? {
        value: 'No',
        tone: 'no',
        explanation: card.isReversed
          ? 'The reversed energy suggests resistance, delay, or conditions that are not aligned right now.'
          : 'This card points toward a boundary, ending, or difficult condition that leans away from yes.'
      }
    : {
        value: 'Yes',
        tone: 'yes',
        explanation: 'The upright energy supports movement, openness, or conditions that currently lean toward yes.'
      }
}

/**
 * Reflections: One pointed question per card. Short.
 */
function buildReflections(cardSummaries, question) {
  const prompts = cardSummaries.map(card => {
    if (card.isReversed) {
      return `${card.name}: Notice where this pattern is showing up for you.`
    }
    return `${card.name}: Consider what acting on this would look like right now.`
  })

  if (question) {
    prompts.push(`Together, what do these cards say about "${question}"?`)
  }

  return prompts
}

/**
 * Connections: A short narrative linking the cards as a story arc.
 */
function buildConnections(cardSummaries) {
  if (cardSummaries.length === 1) {
    return `${cardSummaries[0].name} stands alone. Its message is your entire focus.`
  }

  if (cardSummaries.length === 2) {
    return `${cardSummaries[0].name} sets the scene. ${cardSummaries[1].name} is where it's heading.`
  }

  // 3+ cards: beginning, middle, end arc
  const first = cardSummaries[0]
  const middle = cardSummaries[Math.floor(cardSummaries.length / 2)]
  const last = cardSummaries[cardSummaries.length - 1]

  return `${first.name} is where you're coming from. ${middle.name} is what you're moving through. ${last.name} is what's emerging.`
}

/**
 * Gets the first sentence from a meaning string.
 */
function getFirstSentence(meaning) {
  const match = meaning.match(/^[^.!?]+[.!?]/)
  return match ? match[0].trim() : meaning.split('.')[0].trim()
}
