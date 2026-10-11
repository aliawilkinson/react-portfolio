import css from './Tarot.module.scss'
import Spread from './Spread'
import useReadAloud from './hooks/useReadAloud'
import getReadingSpeechText from './utils/getReadingSpeechText'

/**
 * Simple markdown-to-JSX renderer for Gemini responses.
 * Handles bold, italic, bullet lists, numbered lists, and line breaks.
 */
const renderMarkdown = (text) => {
  if (!text) return null

  const lines = text.split('\n')
  const elements = []
  let listItems = []
  let listType = null

  const flushList = () => {
    if (listItems.length > 0) {
      const Tag = listType === 'ol' ? 'ol' : 'ul'
      elements.push(<Tag key={`list-${elements.length}`}>{listItems}</Tag>)
      listItems = []
      listType = null
    }
  }

  const formatInline = (str) => {
    // Bold + italic
    return str
      .replace(/\*\*\*(.*?)\*\*\*/g, '<b><em>$1</em></b>')
      .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
  }

  lines.forEach((line, i) => {
    const trimmed = line.trim()

    // Bullet list item
    if (/^[-•]\s+/.test(trimmed)) {
      if (listType !== 'ul') flushList()
      listType = 'ul'
      const content = trimmed.replace(/^[-•]\s+/, '')
      listItems.push(
        <li key={`li-${i}`} dangerouslySetInnerHTML={{ __html: formatInline(content) }} />
      )
      return
    }

    // Numbered list item
    if (/^\d+[.)]\s+/.test(trimmed)) {
      if (listType !== 'ol') flushList()
      listType = 'ol'
      const content = trimmed.replace(/^\d+[.)]\s+/, '')
      listItems.push(
        <li key={`li-${i}`} dangerouslySetInnerHTML={{ __html: formatInline(content) }} />
      )
      return
    }

    // Not a list item - flush any pending list
    flushList()

    if (trimmed === '') {
      return // skip empty lines
    }

    elements.push(
      <p key={`p-${i}`} dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }} />
    )
  })

  flushList()
  return elements
}

const ConversationTurn = ({ turn }) => {
  const hasFallback = !turn.interpretation && turn.fallbackInterpretation
  const celticFallback = turn.fallbackInterpretation?.celticCross
  const threeCardFallback = turn.fallbackInterpretation?.threeCard
  const singleCardFallback = turn.fallbackInterpretation?.singleCard
  const speechText = getReadingSpeechText(turn)
  const { supported: speechSupported, status: speechStatus, play, pause, stop } = useReadAloud(speechText)
  const isSpeaking = speechStatus === 'playing'
  const isPaused = speechStatus === 'paused'

  return (
    <div className={css.convTurn}>
      <div className={css.convTurnQuestion}>
        <strong>You asked:</strong> {turn.question}
      </div>
      <Spread drawnCards={turn.cards} spreadPreset={turn.spreadPreset} />
      <div className={css.convTurnInterpretation}>
        {speechSupported && speechText && (
          <div className={css.readingAudioControls}>
            <button
              type="button"
              className={css.readingAudioPrimary}
              onClick={isSpeaking ? pause : play}
              aria-label={isSpeaking ? 'Pause reading aloud' : isPaused ? 'Resume reading aloud' : 'Read this reading aloud'}
            >
              <span aria-hidden="true">{isSpeaking ? 'Ⅱ' : '▶'}</span>
              {isSpeaking ? 'Pause' : isPaused ? 'Resume' : 'Read aloud'}
            </button>
            {(isSpeaking || isPaused) && (
              <button type="button" onClick={stop} aria-label="Stop reading aloud">
                <span aria-hidden="true">■</span> Stop
              </button>
            )}
            <span className={css.readingAudioStatus} role="status" aria-live="polite">
              {speechStatus === 'playing' && 'Reading aloud'}
              {speechStatus === 'paused' && 'Reading paused'}
              {speechStatus === 'error' && 'Voice playback is unavailable. Try again.'}
            </span>
          </div>
        )}
        {hasFallback && (
          <>
            <p><em>The oracle is sleeping. Here is a manual interpretation instead:</em></p>
            {celticFallback ? (
              <div className={css.celticInterpretation}>
                <section>
                  <h4>The Ten Positions</h4>
                  <div className={css.positionReadings}>
                    {celticFallback.positions.map((position, index) => (
                      <article className={css.positionReading} key={`${position.position}-${index}`}>
                        <div className={css.positionReadingHeader}>
                          <span>{index + 1}</span>
                          <div>
                            <h5>{position.position}</h5>
                            <p>{position.name} <small>{position.orientation}</small></p>
                          </div>
                        </div>
                        <p className={css.positionMeaning}>{position.meaning}</p>
                        <p className={css.positionReflection}>{position.reflection}</p>
                      </article>
                    ))}
                  </div>
                </section>
                <section className={css.celticSynthesis}>
                  <h4>How the Spread Connects</h4>
                  {celticFallback.synthesis.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                </section>
              </div>
            ) : threeCardFallback ? (
              <div className={css.threeCardInterpretation}>
                <section>
                  <h4>Situation · Challenge · Guidance</h4>
                  <div className={css.threePositionReadings}>
                    {threeCardFallback.positions.map((position, index) => (
                      <article className={css.positionReading} key={`${position.position}-${index}`}>
                        <div className={css.positionReadingHeader}>
                          <span>{index + 1}</span>
                          <div>
                            <h5>{position.position}</h5>
                            <p>{position.name} <small>{position.orientation}</small></p>
                          </div>
                        </div>
                        <p className={css.positionMeaning}>{position.meaning}</p>
                        <p className={css.positionReflection}>{position.reflection}</p>
                      </article>
                    ))}
                  </div>
                </section>
                <section className={css.celticSynthesis}>
                  <h4>The Story Between the Cards</h4>
                  <p>{threeCardFallback.synthesis}</p>
                </section>
              </div>
            ) : singleCardFallback ? (
              <div className={css.singleCardInterpretation}>
                <section className={css.singleCardMessage}>
                  <div className={css.positionReadingHeader}>
                    <span>✦</span>
                    <div>
                      <h5>{singleCardFallback.position}</h5>
                      <p>{singleCardFallback.name} <small>{singleCardFallback.orientation}</small></p>
                    </div>
                  </div>
                  <div className={`${css.yesNoReading} ${css[`yesNo${singleCardFallback.yesNo.tone}`]}`}>
                    <span>Current lean</span>
                    <strong>{singleCardFallback.yesNo.value}</strong>
                    <p>{singleCardFallback.yesNo.explanation}</p>
                  </div>
                  <p className={css.singleCardMeaning}>{singleCardFallback.meaning}</p>
                </section>
                <section className={css.singleCardGuidance}>
                  <div>
                    <h4>Reflection</h4>
                    <p>{singleCardFallback.reflection}</p>
                  </div>
                  <div>
                    <h4>Bring It With You</h4>
                    <p>{singleCardFallback.integration}</p>
                  </div>
                </section>
              </div>
            ) : (
              <>
                <p>{turn.fallbackInterpretation.summary}</p>
                <h4>Reflections</h4>
                <ul>{turn.fallbackInterpretation.reflections.map((r, i) => <li key={i}>{r}</li>)}</ul>
                <h4>Connections</h4>
                <p>{turn.fallbackInterpretation.connections}</p>
              </>
            )}
          </>
        )}
        {turn.interpretation && (
          <>
            {turn.interpretation.summary && (
              <section>
                <h4>Summary</h4>
                {renderMarkdown(turn.interpretation.summary)}
              </section>
            )}
            {turn.interpretation.detailed && (
              <section>
                <h4>Interpretation</h4>
                {renderMarkdown(turn.interpretation.detailed)}
              </section>
            )}
            {turn.interpretation.themes && (
              <section>
                <h4>Key Themes</h4>
                {renderMarkdown(turn.interpretation.themes)}
              </section>
            )}
            {turn.interpretation.reflectionQuestions && (
              <section>
                <h4>Reflection Questions</h4>
                {renderMarkdown(turn.interpretation.reflectionQuestions)}
              </section>
            )}
            {turn.interpretation.actionableInsights && (
              <section>
                <h4>Actionable Insights</h4>
                {renderMarkdown(turn.interpretation.actionableInsights)}
              </section>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default ConversationTurn
