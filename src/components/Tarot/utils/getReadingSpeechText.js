const cleanText = value => String(value || '')
  .replace(/\*\*\*(.*?)\*\*\*/g, '$1')
  .replace(/\*\*(.*?)\*\*/g, '$1')
  .replace(/\*(.*?)\*/g, '$1')
  .replace(/^\s*[-•]\s+/gm, '')
  .replace(/^\s*\d+[.)]\s+/gm, '')
  .replace(/\s+/g, ' ')
  .trim()

const joinSections = sections => sections
  .filter(Boolean)
  .map(cleanText)
  .filter(Boolean)
  .map(section => /[.!?]$/.test(section) ? section : `${section}.`)
  .join(' ')

const labeledSection = (label, value) => {
  const text = cleanText(value)
  return text ? `${label}. ${text}` : ''
}

const getFallbackSpeechText = fallback => {
  if (!fallback) return ''

  if (fallback.celticCross) {
    const { positions = [], synthesis = [] } = fallback.celticCross
    return joinSections([
      'Your Celtic Cross reading',
      ...positions.flatMap((position, index) => [
        `Position ${index + 1}, ${position.position}. ${position.name}, ${position.orientation}`,
        position.meaning,
        position.reflection,
      ]),
      'How the spread connects',
      ...synthesis,
    ])
  }

  if (fallback.threeCard) {
    const { positions = [], synthesis } = fallback.threeCard
    return joinSections([
      'Your three card reading',
      ...positions.flatMap((position, index) => [
        `Position ${index + 1}, ${position.position}. ${position.name}, ${position.orientation}`,
        position.meaning,
        position.reflection,
      ]),
      'The story between the cards',
      synthesis,
    ])
  }

  if (fallback.singleCard) {
    const card = fallback.singleCard
    return joinSections([
      'Your single card reading',
      `${card.position}. ${card.name}, ${card.orientation}`,
      `Current lean, ${card.yesNo?.value}`,
      card.yesNo?.explanation,
      card.meaning,
      'Reflection',
      card.reflection,
      'Bring it with you',
      card.integration,
    ])
  }

  return joinSections([
    'Your tarot reading',
    fallback.summary,
    'Reflections',
    ...(fallback.reflections || []),
    'Connections',
    fallback.connections,
  ])
}

export const getReadingSpeechText = turn => {
  if (turn?.interpretation) {
    const reading = turn.interpretation
    return joinSections([
      'Your tarot reading',
      labeledSection('Summary', reading.summary),
      labeledSection('Interpretation', reading.detailed),
      labeledSection('Key themes', reading.themes),
      labeledSection('Reflection questions', reading.reflectionQuestions),
      labeledSection('Actionable insights', reading.actionableInsights),
    ])
  }

  return getFallbackSpeechText(turn?.fallbackInterpretation)
}

export default getReadingSpeechText
